import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import SearchResultFlightList from '../components/core/search-result-filter/SearchResultFlightList';
import PriceRangeFilter from '../components/core/search-result-filter/PriceRangeFilter';
import AirlineFilter from '../components/core/search-result-filter/AirlineFilter';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAirlines, getAllCategoryPrice } from '../services/slices/UtilitySlice';
import ProductDetails from '../components/core/search-result-filter/ProductDetails';
import ShippingDetails from '../components/core/search-result-filter/ShippingDetails';
import { encryptData, decryptData } from '../util/encryptionUtils';


const SearchResults = () => {
    // user details
    const user = JSON.parse(window.localStorage.getItem("user"));

    const location = useLocation();
    const { resultData = [], requestData = [] } = location.state || [];
    const [filteredData, setFilteredData] = useState(resultData);
    const [selectedAirlines, setSelectedAirlines] = useState([]);
    const [airlineData, setAirlineData] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    const [allCategoryData, setAllCategoryData] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState(null);
    // State to track the booking state for each item
    const [bookingStates, setBookingStates] = useState([]);
    const [totalWeight, setTotalWeight] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [dimension, setTotalDimension] = useState('');


    // Take values for shippingDetails //
    const [shippingDetails, setShippingDetails] = useState({
        customer_name: '',
        customer_phone: '',
        customer_email: '',
        customer_address: ''
    });

    // console.log(shippingDetails);

    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const { airline_data, all_category_data } = useSelector(state => state.utilitySlice);

    // Function to get the minimum price from an array of flights
    const getMinPriceFlight = (flights) => {
        return flights?.reduce((minFlight, currentFlight) => {
            const currentPrices = currentFlight?.price || [];
            const minPrices = minFlight?.price || [];

            const minPrice = currentPrices?.length > 0 ? Math.min(...currentPrices?.map(item => item?.price)) : Infinity;
            const currentMinPrice = minPrices?.length > 0 ? Math.min(...minPrices?.map(item => item?.price)) : Infinity;
            return minPrice < currentMinPrice ? currentFlight : minFlight;
        }, {});
    };
    // Get the flight with the lowest price
    const flightWithMinPrice = getMinPriceFlight(resultData);
    const lowestPrice = Math.min(...flightWithMinPrice?.price?.map(item => item.price));

    // Callback function to handle both price range and airline changes
    const handleFilterChange = useCallback((range, selectedAirlines) => {
        let filteredResult = resultData;
        // Apply price range filter
        if (range) {
            filteredResult = filteredResult?.filter(
                (item) =>
                    Number(item?.price?.price) >= range[0] &&
                    Number(item?.price?.price) <= range[1]
            );
        }
        // Apply airline filter
        if (selectedAirlines?.length) {
            filteredResult = filteredResult?.filter(
                (item) => selectedAirlines?.includes(item?._airlineId?.airline)
            );
        }
        setFilteredData(filteredResult);
    }, [resultData]);


    // Callback function to handle price range changes
    const handlePriceRangeChange = (range) => {
        const filteredResult = resultData?.filter(
            (item) =>
                Number(item?.price?.price) >= range[0] &&
                Number(item?.price?.price) <= range[1]
        );
        setFilteredData(filteredResult);
        handleFilterChange(range, selectedAirlines);
    };


    // Function to filter airlines
    const handleAirlineChange = (selectedAirline) => {
        // Check if the airline is already selected
        if (selectedAirlines?.includes(selectedAirline)) {
            // If selected, remove it from the list
            setSelectedAirlines((prevSelectedAirlines) =>
                prevSelectedAirlines?.filter((airline) => airline !== selectedAirline)
            );
        } else {
            // If not selected, add it to the list
            setSelectedAirlines((prevSelectedAirlines) => [...prevSelectedAirlines, selectedAirline]);
        }
        handleFilterChange(null, selectedAirlines);
    };


    // handleProductDetailsChange function
    const handleProductDetailsChange = useCallback((index, field, value, newTotalWeight, newTotalPrice, dimension) => {
        const updatedProductDetails = [...productDetails];
        updatedProductDetails[index] = {
            ...updatedProductDetails[index],
            [field]: value,
        };
        setProductDetails(updatedProductDetails);
        setTotalWeight(newTotalWeight);
        setTotalPrice(newTotalPrice);
        setTotalDimension(dimension);
    }, [productDetails]);


    // Callback function to handle the click event
    const handleBookNowClick = (flightData, index) => {
        // Do something with the selected flight data (e.g., store it in state)
        setSelectedFlight(flightData);
        // Update the booking state for the clicked index
        setBookingStates(() => {
            const newStates = Array.from({ length: filteredData?.length }, (_, i) => i === index);
            return newStates;
        });
    };


    // handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate('/booknow', {
        //     state: {
        //         resultData: resultData,
        //         requestData: requestData
        //     }
        // })

        const DATA = {
            origin: requestData?.origin,
            destination: requestData?.destination,
            shipment_date_time: requestData?.shipmentDate,
            flight: selectedFlight?.flight,
            customer_name: shippingDetails?.customer_name,
            customer_phone: shippingDetails?.customer_phone,
            customer_email: shippingDetails?.customer_email,
            customer_address: shippingDetails?.customer_address,
            product_details: productDetails,
            _userID: user?.id,
            totalWeight: Number(totalWeight)?.toFixed(2),
            dimension: Number(dimension)?.toFixed(2),
            chargeableWeight: Number(totalWeight)?.toFixed(2),
            transport_type: "A2C",
            price: totalPrice?.toFixed(2),
            currency: "INR",
        }
        const encryptedData = encryptData(DATA);

        // const key = generateRandomString(10);
        // console.log(key);

        window.sessionStorage.setItem("bhPNQreINf", encryptedData);
        const encryptedBookingData = window.sessionStorage.getItem("bhPNQreINf");
        const decryptedData = decryptData(encryptedBookingData);

        console.log('Decrypted booking data:', decryptedData);
    }


    useEffect(() => {
        dispatch(getAllAirlines());
        dispatch(getAllCategoryPrice());
    }, [dispatch]);


    useEffect(() => {
        if (!selectedAirlines?.length) {
            setFilteredData(resultData);
        } else if (selectedAirlines?.length) {
            const filteredResult = resultData?.filter(
                (item) => selectedAirlines?.includes(item?._airlineId?.airline)
            );
            setFilteredData(filteredResult);
        }
        setAirlineData(airline_data?.data);
        setAllCategoryData(all_category_data?.data);
    }, [resultData, selectedAirlines, airline_data, all_category_data]);

    // console.log("resultData", resultData);

    return (
        <>
            <main>
                {/* TOP SECTION */}
                <div className="serch_result_wrapper">
                    <div className="serch_result_inner">
                        <div className="container">
                            {/* Search Result */}
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="mt-4 text-center">
                                        <label htmlFor="origin" className="form-label result_label">FORM</label>
                                        <input
                                            type="text"
                                            className="form-control result_input"
                                            id="origin"
                                            name="origin"
                                            defaultValue={requestData?.origin}
                                            readOnly
                                            style={{ background: "rgba(255,255,255,0.25)" }}
                                        />

                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="mt-4 text-center">
                                        <label htmlFor="destination" className="form-label result_label">TO</label>
                                        <input
                                            type="text"
                                            className="form-control result_input"
                                            id="destination"
                                            name="destination"
                                            defaultValue={requestData?.destination}
                                            readOnly
                                            style={{ background: "rgba(255,255,255,0.25)" }}
                                        />

                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="mt-4 text-center">
                                        <label htmlFor="shipmentDate" className="form-label result_label">SHIPMENT DATE</label>
                                        <input
                                            type="date"
                                            className="form-control result_input"
                                            id="shipmentDate"
                                            name="shipmentDate"
                                            defaultValue={requestData?.shipmentDate}
                                            readOnly
                                            style={{ background: "rgba(255,255,255,0.25)" }}
                                        />

                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="mt-4 text-center">
                                        <label htmlFor="quantity" className="form-label result_label">QUANTITY</label>
                                        <input
                                            type="text"
                                            className="form-control result_input"
                                            id="quantity"
                                            name="quantity"
                                            defaultValue={requestData?.quantity}
                                            readOnly
                                            style={{ background: "rgba(255,255,255,0.25)" }}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MID SECTION */}
                <div className="container mt-5">
                    <div className="row">

                        {/* Filter Section */}
                        <div className="col-md-4">
                            <form action="">
                                {/* Left Side Filter */}
                                <div className="filter_wrapper">
                                    <div className="fill">
                                        <h4 className="filter_title">Filter</h4>
                                    </div>
                                    <div className="fillter_wrapper mx-2">
                                        {/* Popular Filter */}
                                        {/* <div className="popular_filter pb-2">
                                            <div className="filter_option">
                                                <h5>Popular Fillter</h5>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Non Stop
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckdefaultChecked" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexCheckdefaultChecked">
                                                    Spicejet
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    GO FIRST
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckdefaultChecked" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexCheckdefaultChecked">
                                                    Morning Departure
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Air Asia
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckdefaultChecked" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexCheckdefaultChecked">
                                                    Indigo
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Air India
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckdefaultChecked" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexCheckdefaultChecked">
                                                    Vistara
                                                </label>
                                            </div>
                                        </div>
                                        <hr /> */}

                                        {/* Price range */}
                                        <PriceRangeFilter onPriceRangeChange={handlePriceRangeChange} />
                                        <hr />

                                        {/* Airline filter */}
                                        <AirlineFilter airlineData={airlineData} onAirlineChange={handleAirlineChange} />
                                        <hr />

                                        {/* Note */}
                                        <p style={{ fontSize: "12px" }}>
                                            <span style={{ color: "#e70a3e", fontSize: "16px" }} className='fw-bold me-1'>*</span>Lowerst price among all the flights based on product category.
                                        </p>
                                        <p style={{ fontSize: "12px" }}>
                                            <span style={{ color: "#e70a3e", fontSize: "16px" }} className='fw-bold me-1'>**</span>Lowerst price among all the flights based on product category of a specific airline.
                                        </p>
                                    </div>
                                </div>
                            </form>

                        </div>

                        {/* Right Side Flightlist */}
                        <div className="col-md-8">
                            <div className="ser_list_title">
                                <div className="chep">
                                    <h4>Chepest</h4>
                                </div>
                                <h3>Flights starting from ₹ {lowestPrice}/kg<span style={{ color: "#e70a3e" }}>*</span> <span><img src="/assets/img/5357316 1.png" alt="" className="img-fluid" style={{ width: "50px" }} /></span></h3>
                            </div>

                            {/* Flight List */}
                            <div className="serch_result_show">
                                {
                                    filteredData?.map((item, index) => {
                                        return (
                                            <SearchResultFlightList
                                                item={item}
                                                index={index}
                                                key={item?._id}
                                                resultData={resultData}
                                                requestData={requestData}
                                                onBookNowClick={(flightData) => handleBookNowClick(flightData, index)}
                                                isBooked={bookingStates[index]}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="serch_result_wrapper">
                    <div className="container">
                        {/* Product Details */}
                        <h3 className="text-center text-white mt-5 mb-5">Fill Product Details</h3>
                        <ProductDetails
                            requestData={requestData}
                            onProductDetailsChange={handleProductDetailsChange}
                            allCategoryData={allCategoryData}
                            flight={selectedFlight}
                            setTotalWeight={setTotalWeight}
                            setTotalPrice={setTotalPrice}
                        />

                        {/* Shipping Details */}
                        <h3 className="text-center text-white mt-5 mb-5">Add Shipping Details</h3>
                        <ShippingDetails
                            onShippingDetailsChange={setShippingDetails}
                            shippingDetails={shippingDetails}
                        />
                    </div>


                    {/* PROCEED Button */}
                    <div className='text-center mt-4'>
                        <button
                            className='btn btn-lg btn-success'
                            style={{ width: "20%" }}
                            onClick={handleSubmit}
                        >PROCEED</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SearchResults