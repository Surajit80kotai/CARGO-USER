import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Booknow = () => {
    const location = useLocation();
    const { resultData = [], requestData = [] } = location.state || [];
    const navigate = useNavigate();

    // console.log("Book Now=>", { resultData, requestData });

    return (
        <>
            <main>
                <div className="container">
                    <div className="brecramp mb-5">
                        <button onClick={() => navigate('/serchresult', {
                            state: {
                                resultData: resultData,
                                requestData: requestData
                            }
                        })}><i className="fas fa-chevron-left" style={{ color: "#292929" }}></i> Back</button>
                    </div>
                    <div className="row ">
                        <div className="col-md-8">
                            <div className="booking_card">
                                <div className="booking_card_head">
                                    <div className="bk_left">
                                        <div className="airline_logo">
                                            <img src="/assets/img/download.png" alt="" />
                                        </div>
                                        <div className="up_down_location">
                                            <h4>BLR <i className="fas fa-arrow-right" style={{ color: "#363636" }}></i> KOL</h4>
                                            <div className="time_duration">
                                                5h - 50m
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bk_right">
                                        <div className="save_btn">
                                            <button className="sv_btn me-2">Save</button>
                                            <button className="share"><i className="fas fa-share-alt" style={{ color: "#E70A3E" }}></i>Share</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="body_booking">
                                    <div className="filght_details">
                                        <div className="booking_id">
                                            <h3><i className="fas fa-plane"></i> <span>EY0516</span></h3>
                                        </div>
                                        <div className="destination">
                                            <h3>BLR - Kol</h3>
                                        </div>
                                        <div className="des_time">
                                            <h3>12/04/23 19:25 - 3:25</h3>
                                        </div>
                                        <div className="cpy_details">
                                            <button><i className="far fa-copy"></i> Copy Flight Details</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_details">
                                    <div className="pro_details">
                                        <div className="details_head">
                                            <h3>Pieces</h3>
                                        </div>
                                        <div className="details_content">
                                            <h4>1</h4>
                                        </div>
                                    </div>
                                    <div className="pro_details">
                                        <div className="details_head">
                                            <h3>Dimensions</h3>
                                        </div>
                                        <div className="details_content">
                                            <h4>150 X 110 X 100 cm</h4>
                                        </div>
                                    </div>
                                    <div className="pro_details">
                                        <div className="details_head">
                                            <h3>Weight</h3>
                                        </div>
                                        <div className="details_content">
                                            <h4>726.32kg</h4>
                                        </div>
                                    </div>
                                    <div className="pro_details">
                                        <div className="details_head">
                                            <h3>Stackable</h3>
                                        </div>
                                        <div className="details_content">
                                            <h4><i className="fas fa-check" style={{ color: "#E70A3E" }}></i></h4>
                                        </div>
                                    </div>
                                    <div className="pro_details">
                                        <div className="details_head">
                                            <h3>Trunable</h3>
                                        </div>
                                        <div className="details_content">
                                            <h4><i className="fas fa-check" style={{ color: "#E70A3E" }}></i></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="booking_details_wrapper">
                                <div className="book_details_head">
                                    <h3>Booking Details</h3>
                                    <h5><span>&#8377;</span>3,806</h5>
                                </div>

                                <div className="order_summary mt-4">
                                    <div className="sum_one">
                                        <div className="sum_title">
                                            <h3>Chargeble Weight </h3>
                                        </div>
                                        <div className="sum_details">
                                            <h4> 875 <span> Kg</span></h4>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="sum_one">
                                        <div className="sum_title">
                                            <h3>Air Freight Cost</h3>
                                            <p>@0.61 ₹/Kg</p>
                                        </div>
                                        <div className="sum_details">
                                            <h4> <span>₹</span>502.23 </h4>
                                        </div>
                                    </div>
                                    <div className="sum_one">
                                        <div className="sum_title">
                                            <h3>Surcharches </h3>
                                            <p>@0.61 ₹/Kg</p>
                                        </div>
                                        <div className="sum_details">
                                            <h4> <span>₹</span>502.23 </h4>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="sum_one">
                                        <div className="sum_title">
                                            <h3>Chargeble Weight </h3>
                                        </div>
                                        <div className="sum_details">
                                            <h4> 875 <span> Kg</span></h4>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="sum_one">
                                        <div className="sum_title">
                                            <h3 className="fw-bold">Total</h3>
                                        </div>
                                        <div className="sum_details">
                                            <h4> <span>₹</span>3,806</h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <button className="book"><i className="fas fa-lock" style={{color: "#ffffff"}}></i> Book Now</button> */}
                                <button onClick={() => navigate('/payment')} className="place-order place-order--default">
                                    <div className="default text">Continue</div>
                                    <div className="forklift">
                                        <div className="upper"></div>
                                        <div className="lower"></div>
                                    </div>
                                    <div className="box animation"></div>
                                    <div className="done text"><i className="fas fa-check" style={{ color: "#ffffff" }}></i> Done</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default Booknow