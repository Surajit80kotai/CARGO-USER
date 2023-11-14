import React from 'react'
import { useLocation } from 'react-router-dom';
import SearchResultFlightList from '../components/core/others/SearchResultFlightList';

const SearchResults = () => {
    const location = useLocation();
    const { resultData, requestData } = location.state;

    // Function to get the minimum price from an array of flights
    const getMinPriceFlight = (flights) => {
        return flights?.reduce((minFlight, currentFlight) => {
            const minPrice = minFlight?.price?.price || Infinity;
            const currentPrice = currentFlight?.price?.price || Infinity;

            return currentPrice < minPrice ? currentFlight : minFlight;
        }, {});
    };

    // Get the flight with the lowest price
    const flightWithMinPrice = getMinPriceFlight(resultData);

    // Log the result
    console.log(flightWithMinPrice);

    // console.log(resultData);
    // console.log(requestData);

    return (
        <>
            <main>
                <div className="serch_result_wrapper">
                    <div className="serch_result_inner">
                        <form action="">
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

                                {/* Product Details */}
                                <h3 className="text-center text-white mt-5 mb-5">Fill Product Details</h3>
                                <div className="product_details_form">
                                    <div className="product_form">
                                        <div className="">
                                            <label htmlFor="exampleInputEmail1" className="form-label pro_form_label">Quantity</label>
                                            <input type="text" className="form-control pro_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" placeholder="Quantity" />

                                        </div>
                                    </div>
                                    <div className="product_form">
                                        <div className="">
                                            <label htmlFor="exampleInputEmail1" className="form-label pro_form_label">Length(cm)</label>
                                            <input type="text" className="form-control pro_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" placeholder="Length" />

                                        </div>
                                    </div>
                                    <div className="product_form">
                                        <div className="">
                                            <label htmlFor="exampleInputEmail1" className="form-label pro_form_label">Width(cm)</label>
                                            <input type="text" className="form-control pro_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" placeholder="Width" />

                                        </div>
                                    </div>
                                    <div className="product_form">
                                        <div className="">
                                            <label htmlFor="exampleInputEmail1" className="form-label pro_form_label">Height(cm)</label>
                                            <input type="text" className="form-control pro_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" placeholder="Height" />

                                        </div>
                                    </div>
                                    <div className="product_form">
                                        <div className="">
                                            <label htmlFor="exampleInputEmail1" className="form-label pro_form_label">Weight(kg)</label>
                                            <input type="text" className="form-control pro_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" placeholder="Weight" />

                                        </div>
                                    </div>
                                    <div className="product_form">
                                        <div className="">
                                            <label htmlFor="exampleInputEmail1" className="form-label pro_form_label">Weight Type</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label text-white" htmlFor="flexRadioDefault1">
                                                    Total
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                <label className="form-check-label text-white" htmlFor="flexRadioDefault2">
                                                    Per Item
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product_form">
                                        <div className="">
                                            <label htmlFor="exampleInputEmail1" className="form-label pro_form_label">Packing</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                                                    Stockable
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckdefaultChecked" defaultChecked />
                                                <label className="form-check-label text-white" htmlFor="flexCheckdefaultChecked">
                                                    Trunable
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </form>
                    </div>
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
                                        <div className="popular_filter pb-2">
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
                                        <hr />

                                        {/* Price range */}
                                        <div className="price_range">
                                            <div className="filter_option">
                                                <h5>Price Range</h5>
                                            </div>
                                            <div className="price_wrapper">
                                                <fieldset className="filter-price">

                                                    <div className="price-field">
                                                        <input type="range" min="100" max="500" defaultValue="100" id="lower" />
                                                        <input type="range" min="100" max="500" defaultValue="500" id="upper" />
                                                    </div>
                                                    <div className="price-wrap">

                                                        <div className="price-wrap-1">
                                                            <input id="one" />
                                                            <label htmlFor="one">Rs</label>
                                                        </div>
                                                        <div className="price-wrap_line">-</div>
                                                        <div className="price-wrap-2">
                                                            <input id="two" />
                                                            <label htmlFor="two">Rs</label>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <hr />

                                        {/* Airline filter */}
                                        <div className="airlines_wrapper">
                                            <div className="filter_option mb-3">
                                                <h5>Airlines</h5>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    <img src="/assets/img/air1.png" alt="" /> <span>Spicejet</span>
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckdefaultChecked" />
                                                <label className="form-check-label" htmlFor="flexCheckdefaultChecked">
                                                    <img src="/assets/img/air2.png" alt="" />  <span>Go First</span>
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    <img src="/assets/img/air3.png" alt="" /> <span>Air Asia</span>
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckdefaultChecked" />
                                                <label className="form-check-label" htmlFor="flexCheckdefaultChecked">
                                                    <img src="/assets/img/air4.png" alt="" />  <span>Indigo</span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckdefaultChecked" />
                                                <label className="form-check-label" htmlFor="flexCheckdefaultChecked">
                                                    <img src="/assets/img/air5.png" alt="" />  <span>AirIndia</span>
                                                </label>
                                            </div>
                                        </div>
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
                                <h3>Flights starting from ₹ 18294 <span><img src="/assets/img/5357316 1.png" alt="" className="img-fluid" style={{ width: "50px" }} /></span></h3>
                            </div>
                            <div className="serch_result_show">
                                {
                                    resultData?.map((item, index) => {
                                        return (
                                            <SearchResultFlightList
                                                item={item}
                                                index={index}
                                                key={item?._id}
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