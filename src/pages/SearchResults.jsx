import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import SearchResultFlightList from '../components/core/search-result-filter/SearchResultFlightList';
import PriceRangeFilter from '../components/core/search-result-filter/PriceRangeFilter';
import AirlineFilter from '../components/core/search-result-filter/AirlineFilter';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAirlines } from '../services/slices/UtilitySlice';
import ProductDetails from '../components/core/search-result-filter/ProductDetails';
import ShippingDetails from '../components/core/search-result-filter/ShippingDetails';
import { encryptData } from '../util/encryptionUtils';
import { toast } from 'react-toastify';


const SearchResults = () => {
    // user details
    const user = JSON.parse(window.localStorage.getItem("user"));

    const location = useLocation();
    const { resultData = [], requestData = [] } = location.state || [];

    const { quantity } = requestData;
    // Convert quantity to a number
    const quantityNumber = parseInt(quantity, Infinity);

    const [filteredData, setFilteredData] = useState(resultData);
    const [selectedAirlines, setSelectedAirlines] = useState([]);
    const [airlineData, setAirlineData] = useState([]);
    const [productDetails, setProductDetails] = useState(Array(quantityNumber)?.fill({
        Length: '',
        width: '',
        height: '',
        weight: '',
        vol_weight: '',
        chargeable_weight: '',
        count: 'total',
        category: '',
        totalPrice: '',
        isStockable: true,
        isTrunable: false,
        isBatteryIncluded: true
    }));

    const [selectedFlight, setSelectedFlight] = useState(null);
    // State to track the booking state for each item
    const [bookingStates, setBookingStates] = useState([]);
    const [totalWeight, setTotalWeight] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [dimension, setTotalDimension] = useState(null);


    // Take values for shippingDetails //
    const [shippingDetails, setShippingDetails] = useState({
        customer_name: '',
        customer_phone: '',
        customer_email: '',
        customer_address: ''
    });

    // console.log(shippingDetails);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { airline_data } = useSelector(state => state.utilitySlice);

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


    // Callback function to handle the click event
    const handleBookNowClick = (flightData, index) => {
        // Do something with the selected flight data (e.g., store it in state)
        setSelectedFlight(flightData);
        const encryptedFlightData = encryptData(flightData);
        window.sessionStorage.setItem("MmPLHcYiqG", encryptedFlightData);
        // Update the booking state for the clicked index
        setBookingStates(() => {
            const newStates = Array.from({ length: filteredData?.length }, (_, i) => i === index);
            return newStates;
        });
    };


    // handleSubmit function with validation
    const handleSubmit = (e) => {
        e.preventDefault();
        // const key = generateRandomString(10);
        // console.log(key);

        // Validate productDetails array
        const isProductDetailsValid = productDetails.every((product) => {
            return Object.values(product).every(value => value !== "");
        });

        // validation logic.
        if (!selectedFlight) {
            toast.warning("Book A Flight Before Proceeding.", {
                autoClose: 3000
            });
        } else if (!isProductDetailsValid) {
            toast.warning("Fill All The Product Details Before Proceeding.", {
                autoClose: 3500
            });
        } else if (!shippingDetails?.customer_name) {
            toast.warning("Customer Name Is Required Before Proceeding.", {
                autoClose: 3500
            });
        } else if (!shippingDetails?.customer_phone) {
            toast.warning("A Customer Phone Number Is Required Before Proceeding.", {
                autoClose: 3500
            });
        } else if (!shippingDetails?.customer_email) {
            toast.warning("A Customer Email Id Is Required Before Proceeding.", {
                autoClose: 3500
            });
        } else if (!shippingDetails?.customer_address) {
            toast.warning("Enter Customer Address Before Proceeding.", {
                autoClose: 3500
            });
        } else {
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
                _airlineId: selectedFlight?._airlineId?._id,
                _userID: user?.id,
                totalWeight: Number(totalWeight)?.toFixed(2),
                dimension: dimension,
                chargeableWeight: Number(totalWeight)?.toFixed(2),
                transport_type: "A2C",
                price: Number(totalPrice)?.toFixed(2),
                currency: "INR",
            }
            const encryptedData = encryptData(DATA);
            window.sessionStorage.setItem("bhPNQreINf", encryptedData);

            navigate('/booknow', {
                state: {
                    resultData: resultData,
                    requestData: requestData
                }
            })
        }
    }

    useEffect(() => {
        dispatch(getAllAirlines());
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
    }, [resultData, selectedAirlines, airline_data]);

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
                            productDetails={productDetails}
                            setProductDetails={setProductDetails}
                            flight={selectedFlight}
                            setTotalWeight={setTotalWeight}
                            setTotalPrice={setTotalPrice}
                            setTotalDimension={setTotalDimension}
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