import React from 'react'
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
    const { state } = useLocation();
    const response = state?.data;
    console.log(response);

    return (
        <>
            <main>
                <div className="serch_result_wrapper">
                    <div className="serch_result_inner">
                        <form action="">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="mt-4 text-center">
                                            <label htmlFor="exampleInputEmail1" className="form-label result_label">FORM</label>
                                            <input type="text" className="form-control result_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" defaultValue="Bangalore" />

                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mt-4 text-center">
                                            <label htmlFor="exampleInputEmail1" className="form-label result_label">TO</label>
                                            <input type="text" className="form-control result_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" defaultValue="Kolkata" />

                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mt-4 text-center">
                                            <label htmlFor="exampleInputEmail1" className="form-label result_label">SHIPMENT DATE</label>
                                            <input type="date" className="form-control result_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" />

                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mt-4 text-center">
                                            <label htmlFor="exampleInputEmail1" className="form-label result_label">QUANTITY</label>
                                            <select className="form-select result_select" aria-label="Default select example">
                                                <option defaultValue={23}></option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>
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
                        <div className="col-md-4">
                            <form action="">
                                <div className="filter_wrapper">
                                    <div className="fill">
                                        <h4 className="filter_title">Filter</h4>
                                    </div>
                                    <div className="fillter_wrapper ">
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
                                        <div className="airlines_wrapper">
                                            <div className="filter_option mb-3">
                                                <h5>Airlines</h5>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    <img src="./assets/img/air1.png" alt="" /> <span>Spicejet</span>
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckdefaultChecked" />
                                                <label className="form-check-label" htmlFor="flexCheckdefaultChecked">
                                                    <img src="./assets/img/air2.png" alt="" />  <span>Go First</span>
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    <img src="./assets/img/air3.png" alt="" /> <span>Air Asia</span>
                                                </label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckdefaultChecked" />
                                                <label className="form-check-label" htmlFor="flexCheckdefaultChecked">
                                                    <img src="./assets/img/air4.png" alt="" />  <span>Indigo</span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckdefaultChecked" />
                                                <label className="form-check-label" htmlFor="flexCheckdefaultChecked">
                                                    <img src="./assets/img/air5.png" alt="" />  <span>AirIndia</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className="col-md-8">
                            <div className="ser_list_title">
                                <div className="chep">
                                    <h4>Chepest</h4>
                                </div>
                                <h3>Flights starting from ₹ 18294 <span><img src="./assets/img/5357316 1.png" alt="" className="img-fluid" style={{ width: "50px" }} /></span></h3>
                            </div>
                            <div className="serch_result_show">
                                <div className="result_airline_box">
                                    <div className="best_label">
                                        <h6>BEST PRICE <span><img src="./assets/img/4194559 1.png" alt="" /></span></h6>
                                    </div>
                                    <div className="result_table">
                                        <div className="airline_name">
                                            <h4><span><img src="./assets/img/go-first-logo 2.png" alt="" /></span>Spicejet</h4>
                                        </div>
                                        <div className="form_des">
                                            <div className="time">
                                                <h5>05:45</h5>
                                            </div>
                                            <div className="loaction_name">
                                                <h6>New Delhi</h6>
                                            </div>
                                        </div>
                                        <div className="distance">
                                            <h3>02 h 50 m</h3>
                                            <img src="./assets/img/distance.png" alt="" className="img-fluid" />
                                        </div>
                                        <div className="form_des">
                                            <div className="time">
                                                <h5>08:35</h5>
                                            </div>
                                            <div className="loaction_name">
                                                <h6>Kolkata</h6>
                                            </div>
                                        </div>
                                        <div className="total_cost">
                                            <h4> ₹ <span> 5,237</span></h4>
                                        </div>
                                        <div className="book_btn">
                                            <button className="book_now">Book Now</button>
                                        </div>
                                    </div>
                                    <div className="offer_showing">
                                        <h5><span><img src="./assets/img/879859 1.png" alt="" /></span> Get Rs 250 off using MMTOFFER</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SearchResults