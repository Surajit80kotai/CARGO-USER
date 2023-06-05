import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer_item">
                                <div className="fooyer_img">
                                    <img src="./assets/img/image_2023_01_19T09_31_19_582Z 2.png" alt="" className="img-fluid" />
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry</p>
                                <div className="social_media_link">
                                    <Link to="#" className="social_link"><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="#" className="social_link"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#" className="social_link"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="footer_item">
                                <div className="foot_title">
                                    <h4>Imformation</h4>
                                </div>
                                <ul className="foot_list">
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Career</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer_item">
                                <div className="foot_title">
                                    <h4>Product</h4>
                                </div>
                                <ul className="foot_list">
                                    <li><Link to="#">For forwarders</Link></li>
                                    <li><Link to="#">Customer</Link></li>
                                    <li><Link to="#">Get Started</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer_item">
                                <div className="foot_title">
                                    <h4>Resourse</h4>
                                </div>
                                <ul className="foot_list">
                                    <li><Link to="#">Blog</Link></li>
                                    <li><Link to="#">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <hr style={{ border: "0.5px solid #6D6969" }} />
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="cpright">
                            <h6><i className="far fa-copyright"></i> <span>s3cargo 2023</span></h6>
                        </div>
                        <div className="tc d-flex gap-1">
                            <Link to="#" className="ft_bt">Privacy Policy </Link>
                            <p>|</p>
                            <Link to="#" className="ft_bt">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer