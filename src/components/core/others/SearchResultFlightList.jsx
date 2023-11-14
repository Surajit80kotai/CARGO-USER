import React from 'react'

const SearchResultFlightList = ({ item, index }) => {
    return (
        <>
            <div className={index === 0 ? "result_airline_box" : "result_airline_box  mt-3"}>
                <div className="best_label">
                    <h6>BEST PRICE <span><img src="/assets/img/4194559 1.png" alt="" /></span></h6>
                </div>
                <div className="result_table">
                    <div className="airline_name">
                        <h4><span><img src="/assets/img/go-first-logo 2.png" alt="" /></span>Spicejet</h4>
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
                        <img src="/assets/img/distance.png" alt="" className="img-fluid" />
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
                    <h5><span><img src="/assets/img/879859 1.png" alt="" /></span> Get Rs 250 off using MMTOFFER</h5>
                </div>
            </div>
        </>
    )
}

export default SearchResultFlightList