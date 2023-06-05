import React from 'react'

const SearchResults = () => {
    return (
        <>
            <main>
                <div class="serch_result_wrapper">
                    <div class="serch_result_inner">
                        <form action="">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="mt-4 text-center">
                                            <label for="exampleInputEmail1" class="form-label result_label">FORM</label>
                                            <input type="text" class="form-control result_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" value="Bangalore" />

                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mt-4 text-center">
                                            <label for="exampleInputEmail1" class="form-label result_label">TO</label>
                                            <input type="text" class="form-control result_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" value="Kolkata" />

                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mt-4 text-center">
                                            <label for="exampleInputEmail1" class="form-label result_label">SHIPMENT DATE</label>
                                            <input type="date" class="form-control result_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" />

                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mt-4 text-center">
                                            <label for="exampleInputEmail1" class="form-label result_label">QUANTITY</label>
                                            <select class="form-select result_select" aria-label="Default select example">
                                                <option selected>23</option>
                                                <option value="1">4</option>
                                                <option value="2">5</option>
                                                <option value="3">6</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>
                                <h3 class="text-center text-white mt-5 mb-5">Fill Product Details</h3>
                                <div class="product_details_form">
                                    <div class="product_form">
                                        <div class="">
                                            <label for="exampleInputEmail1" class="form-label pro_form_label">Quantity</label>
                                            <input type="text" class="form-control pro_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" placeholder="Quantity" />

                                        </div>
                                    </div>
                                    <div class="product_form">
                                        <div class="">
                                            <label for="exampleInputEmail1" class="form-label pro_form_label">Length(cm)</label>
                                            <input type="text" class="form-control pro_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" placeholder="Length" />

                                        </div>
                                    </div>
                                    <div class="product_form">
                                        <div class="">
                                            <label for="exampleInputEmail1" class="form-label pro_form_label">Width(cm)</label>
                                            <input type="text" class="form-control pro_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" placeholder="Width" />

                                        </div>
                                    </div>
                                    <div class="product_form">
                                        <div class="">
                                            <label for="exampleInputEmail1" class="form-label pro_form_label">Height(cm)</label>
                                            <input type="text" class="form-control pro_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" placeholder="Height" />

                                        </div>
                                    </div>
                                    <div class="product_form">
                                        <div class="">
                                            <label for="exampleInputEmail1" class="form-label pro_form_label">Weight(kg)</label>
                                            <input type="text" class="form-control pro_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="" placeholder="Weight" />

                                        </div>
                                    </div>
                                    <div class="product_form">
                                        <div class="">
                                            <label for="exampleInputEmail1" class="form-label pro_form_label">Weight Type</label>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label class="form-check-label text-white" for="flexRadioDefault1">
                                                    Total
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                <label class="form-check-label text-white" for="flexRadioDefault2">
                                                    Per Item
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product_form">
                                        <div class="">
                                            <label for="exampleInputEmail1" class="form-label pro_form_label">Packing</label>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label text-white" for="flexCheckDefault">
                                                    Stockable
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                                <label class="form-check-label text-white" for="flexCheckChecked">
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
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-md-4">
                            <form action="">
                                <div class="filter_wrapper">
                                    <div class="fill">
                                        <h4 class="filter_title">Filter</h4>
                                    </div>
                                    <div class="fillter_wrapper ">
                                        <div class="popular_filter pb-2">
                                            <div class="filter_option">
                                                <h5>Popular Fillter</h5>
                                            </div>

                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Non Stop
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                                <label class="form-check-label" for="flexCheckChecked">
                                                    Spicejet
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    GO FIRST
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                                <label class="form-check-label" for="flexCheckChecked">
                                                    Morning Departure
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Air Asia
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                                <label class="form-check-label" for="flexCheckChecked">
                                                    Indigo
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Air India
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                                <label class="form-check-label" for="flexCheckChecked">
                                                    Vistara
                                                </label>
                                            </div>
                                        </div>

                                        <hr />
                                        <div class="price_range">
                                            <div class="filter_option">
                                                <h5>Price Range</h5>
                                            </div>
                                            <div class="price_wrapper">
                                                <fieldset class="filter-price">

                                                    <div class="price-field">
                                                        <input type="range" min="100" max="500" value="100" id="lower" />
                                                        <input type="range" min="100" max="500" value="500" id="upper" />
                                                    </div>
                                                    <div class="price-wrap">

                                                        <div class="price-wrap-1">
                                                            <input id="one" />
                                                            <label for="one">Rs</label>
                                                        </div>
                                                        <div class="price-wrap_line">-</div>
                                                        <div class="price-wrap-2">
                                                            <input id="two" />
                                                            <label for="two">Rs</label>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>

                                        <hr />
                                        <div class="airlines_wrapper">
                                            <div class="filter_option mb-3">
                                                <h5>Airlines</h5>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    <img src="./assets/img/air1.png" alt="" /> <span>Spicejet</span>
                                                </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">
                                                    <img src="./assets/img/air2.png" alt="" />  <span>Go First</span>
                                                </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    <img src="./assets/img/air3.png" alt="" /> <span>Air Asia</span>
                                                </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">
                                                    <img src="./assets/img/air4.png" alt="" />  <span>Indigo</span>
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">
                                                    <img src="./assets/img/air5.png" alt="" />  <span>AirIndia</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div class="col-md-8">
                            <div class="ser_list_title">
                                <div class="chep">
                                    <h4>Chepest</h4>
                                </div>
                                <h3>Flights starting from ₹ 18294 <span><img src="./assets/img/5357316 1.png" alt="" class="img-fluid" style={{ width: "50px" }} /></span></h3>
                            </div>
                            <div class="serch_result_show">
                                <div class="result_airline_box">
                                    <div class="best_label">
                                        <h6>BEST PRICE <span><img src="./assets/img/4194559 1.png" alt="" /></span></h6>
                                    </div>
                                    <div class="result_table">
                                        <div class="airline_name">
                                            <h4><span><img src="./assets/img/go-first-logo 2.png" alt="" /></span>Spicejet</h4>
                                        </div>
                                        <div class="form_des">
                                            <div class="time">
                                                <h5>05:45</h5>
                                            </div>
                                            <div class="loaction_name">
                                                <h6>New Delhi</h6>
                                            </div>
                                        </div>
                                        <div class="distance">
                                            <h3>02 h 50 m</h3>
                                            <img src="./assets/img/distance.png" alt="" class="img-fluid" />
                                        </div>
                                        <div class="form_des">
                                            <div class="time">
                                                <h5>08:35</h5>
                                            </div>
                                            <div class="loaction_name">
                                                <h6>Kolkata</h6>
                                            </div>
                                        </div>
                                        <div class="total_cost">
                                            <h4> ₹ <span> 5,237</span></h4>
                                        </div>
                                        <div class="book_btn">
                                            <button class="book_now">Book Now</button>
                                        </div>
                                    </div>
                                    <div class="offer_showing">
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