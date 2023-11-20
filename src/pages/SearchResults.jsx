import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import SearchResultFlightList from '../components/core/search-result-filter/SearchResultFlightList';
import PriceRangeFilter from '../components/core/search-result-filter/PriceRangeFilter';
import AirlineFilter from '../components/core/search-result-filter/AirlineFilter';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAirlines } from '../services/slices/UtilitySlice';
import ProductDetails from '../components/core/search-result-filter/ProductDetails';

const SearchResults = () => {
    const location = useLocation();
    const { resultData = [], requestData = [] } = location.state || [];
    const [filteredData, setFilteredData] = useState(resultData);
    const [selectedAirlines, setSelectedAirlines] = useState([]);
    const [airlineData, setAirlineData] = useState([]);
    const [productDetails, setProductDetails] = useState([]);


    const dispatch = useDispatch();
    const { airline_data } = useSelector(state => state.utilitySlice);

    // Function to get the minimum price from an array of flights
    const getMinPriceFlight = (flights) => {
        return flights?.reduce((minFlight, currentFlight) => {
            const minPrice = Number(minFlight?.price?.price) || Infinity;
            const currentPrice = Number(currentFlight?.price?.price) || Infinity;

            return currentPrice < minPrice ? currentFlight : minFlight;
        }, {});
    };
    // Get the flight with the lowest price
    const flightWithMinPrice = getMinPriceFlight(resultData);


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
    const handleProductDetailsChange = useCallback((index, field, value) => {
        const updatedProductDetails = [...productDetails];
        updatedProductDetails[index] = {
            ...updatedProductDetails[index],
            [field]: value,
        };
        setProductDetails(updatedProductDetails);
    }, [productDetails]);


    // handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("productDetails=>", { productDetails });
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


    return (
        <>
            <main>
                <div className="serch_result_wrapper">
                    <form onSubmit={handleSubmit}>
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

                        <div className="container">
                            <h3 className="text-center text-white mt-5 mb-5">Fill Product Details</h3>
                            {/* Product Details */}
                            <ProductDetails requestData={requestData} onProductDetailsChange={handleProductDetailsChange} />

                            {/* Submit Button */}
                            <div className='text-center'>
                                <button className='book_now'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>



                <div className="container mt-5">
                    <div className="row">
                        {/* Left Side Filter */}
                        <div className="col-md-4">

                            {/* Filter Section */}
                            <form action="">
                                <div className="filter_wrapper">
                                    <div className="fill">
                                        <h4 className="filter_title">Filter</h4>
                                    </div>
                                    <div className="fillter_wrapper ">
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
                                <h3>Flights starting from ₹ {flightWithMinPrice?.price?.price}/kg <span><img src="/assets/img/5357316 1.png" alt="" className="img-fluid" style={{ width: "50px" }} /></span></h3>
                            </div>
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
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SearchResults