import React from 'react'
import Slider from 'react-slick';

const ExclusiveOffer = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    let copyText = document.querySelector(".copy-text");
    copyText?.querySelector("button").addEventListener("click", function () {
        let input = copyText.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
            copyText.classList.remove("active");
        }, 2500);
    });


    return (
        <>
            <div className="offer_section">
                <div className="container">
                    <div className="section_title">
                        <h2>Exclusive Offfer</h2>
                    </div>

                    {/* .. slider start .. */}
                    <div className="offer_slider">
                        <Slider {...settings}>
                            <div className="offer_item">
                                <div className="offer_banner">
                                    <img src="assets/img/Rectangle 11.png" alt="" />
                                </div>
                                <div className="offer_container">
                                    <h4 className="offer_name">New User Offer</h4>
                                    <p>Register and Get Discount On
                                        first Booking</p>
                                    <div className="offer_code">
                                        <div className="copy-text">
                                            <input type="text" className="text" defaultValue="NW2356" />
                                            <button><i className="fa fa-clone"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offer_item">
                                <div className="offer_banner">
                                    <img src="assets/img/Rectangle 11.png" alt="" />
                                </div>
                                <div className="offer_container">
                                    <h4 className="offer_name">New User Offer</h4>
                                    <p>Register and Get Discount On
                                        first Booking</p>
                                    <div className="offer_code">
                                        <div className="copy-text">
                                            <input type="text" className="text" defaultValue="david@stylus.co.za" />
                                            <button><i className="fa fa-clone"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offer_item">
                                <div className="offer_banner">
                                    <img src="assets/img/Rectangle 11.png" alt="" />
                                </div>
                                <div className="offer_container">
                                    <h4 className="offer_name">New User Offer</h4>
                                    <p>Register and Get Discount On
                                        first Booking</p>
                                    <div className="offer_code">
                                        <div className="copy-text">
                                            <input type="text" className="text" defaultValue="david@stylus.co.za" />
                                            <button><i className="fa fa-clone"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offer_item">
                                <div className="offer_banner">
                                    <img src="assets/img/Rectangle 11.png" alt="" />
                                </div>
                                <div className="offer_container">
                                    <h4 className="offer_name">New User Offer</h4>
                                    <p>Register and Get Discount On
                                        first Booking</p>
                                    <div className="offer_code">
                                        <div className="copy-text">
                                            <input type="text" className="text" defaultValue="david@stylus.co.za" />
                                            <button><i className="fa fa-clone"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offer_item">
                                <div className="offer_banner">
                                    <img src="assets/img/Rectangle 11.png" alt="" />
                                </div>
                                <div className="offer_container">
                                    <h4 className="offer_name">New User Offer</h4>
                                    <p>Register and Get Discount On
                                        first Booking</p>
                                    <div className="offer_code">
                                        <div className="copy-text">
                                            <input type="text" className="text" defaultValue="david@stylus.co.za" />
                                            <button><i className="fa fa-clone"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offer_item">
                                <div className="offer_banner">
                                    <img src="assets/img/Rectangle 11.png" alt="" />
                                </div>
                                <div className="offer_container">
                                    <h4 className="offer_name">New User Offer</h4>
                                    <p>Register and Get Discount On
                                        first Booking</p>
                                    <div className="offer_code">
                                        <div className="copy-text">
                                            <input type="text" className="text" defaultValue="david@stylus.co.za" />
                                            <button><i className="fa fa-clone"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offer_item">
                                <div className="offer_banner">
                                    <img src="assets/img/Rectangle 11.png" alt="" />
                                </div>
                                <div className="offer_container">
                                    <h4 className="offer_name">New User Offer</h4>
                                    <p>Register and Get Discount On
                                        first Booking</p>
                                    <div className="offer_code">
                                        <div className="copy-text">
                                            <input type="text" className="text" defaultValue="david@stylus.co.za" />
                                            <button><i className="fa fa-clone"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offer_item">
                                <div className="offer_banner">
                                    <img src="assets/img/Rectangle 11.png" alt="" />
                                </div>
                                <div className="offer_container">
                                    <h4 className="offer_name">New User Offer</h4>
                                    <p>Register and Get Discount On
                                        first Booking</p>
                                    <div className="offer_code">
                                        <div className="copy-text">
                                            <input type="text" className="text" defaultValue="david@stylus.co.za" />
                                            <button><i className="fa fa-clone"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offer_item">
                                <div className="offer_banner">
                                    <img src="assets/img/Rectangle 11.png" alt="" />
                                </div>
                                <div className="offer_container">
                                    <h4 className="offer_name">New User Offer</h4>
                                    <p>Register and Get Discount On
                                        first Booking</p>
                                    <div className="offer_code">
                                        <div className="copy-text">
                                            <input type="text" className="text" defaultValue="david@stylus.co.za" />
                                            <button><i className="fa fa-clone"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offer_item">
                                <div className="offer_banner">
                                    <img src="assets/img/Rectangle 11.png" alt="" />
                                </div>
                                <div className="offer_container">
                                    <h4 className="offer_name">New User Offer</h4>
                                    <p>Register and Get Discount On
                                        first Booking</p>
                                    <div className="offer_code">
                                        <div className="copy-text">
                                            <input type="text" className="text" defaultValue="david@stylus.co.za" />
                                            <button><i className="fa fa-clone"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offer_item">
                                <div className="offer_banner">
                                    <img src="assets/img/Rectangle 11.png" alt="" />
                                </div>
                                <div className="offer_container">
                                    <h4 className="offer_name">New User Offer</h4>
                                    <p>Register and Get Discount On
                                        first Booking</p>
                                    <div className="offer_code">
                                        <div className="copy-text">
                                            <input type="text" className="text" defaultValue="david@stylus.co.za" />
                                            <button><i className="fa fa-clone"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    {/* .x. slider end .x. */}

                </div>

            </div>
        </>
    )
}

export default ExclusiveOffer