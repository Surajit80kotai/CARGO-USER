import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="nav-wrapper ">

                        <div className="logo-container">
                            <img className="logo" src="./assets/img/logo (3).png" alt="Logo" />
                        </div>
                        <nav>
                            <input className="hidden" type="checkbox" id="menuToggle" />
                            <label className="menu-btn" htmlFor="menuToggle">
                                <div className="menu"></div>
                                <div className="menu"></div>
                                <div className="menu"></div>
                            </label>
                            <div className="nav-container">
                                <ul className="nav-tabs">
                                    <li className="nav-tab"> <Link to="#">For forwards</Link> </li>
                                    <li className="nav-tab"> <Link to="#">For airlines</Link> </li>
                                    <li className="nav-tab"> <Link to="#">Customer</Link></li>
                                    <li className="nav-tab"> <Link to="#">About</Link></li>
                                    <li className="nav-tab"> <Link to="#" className="open_res">Login</Link></li>
                                    <li className="nav-tab"> <Link to="#" className="open_res">Sign Up</Link></li>
                                </ul>
                            </div>
                        </nav>

                        <div className="right ">
                            <div className="select-dropdown">
                                <button type="button" data-value="" className="select-dropdown__button"><span>India</span>
                                    <i className="fas fa-chevron-down"></i>
                                </button>
                                <div className="select-dropdown__list">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="">Choose Country</label>
                                            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option defaultValue="0">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="">Currency</label>
                                            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option defaultValue="0">INR</option>
                                                <option value="1">AED</option>
                                                <option value="2">THB</option>
                                                <option value="3">USD</option>
                                                <option value="3">GBP</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <label htmlFor="" className="mb-2">Choose Language</label>
                                        <div className="col-md-6">
                                            <div className="radio_button">
                                                <div className="form-check ">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                        id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Hindi
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="radio_button">
                                                <div className="form-check ">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                        id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        English
                                                    </label>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <div className="radio_button">
                                                <div className="form-check ">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                        id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Assamese
                                                    </label>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <div className="radio_button">
                                                <div className="form-check ">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                        id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Bengali
                                                    </label>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <div className="radio_button">
                                                <div className="form-check ">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                        id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Gujrati
                                                    </label>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <div className="radio_button">
                                                <div className="form-check ">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                        id="flexRadioDefault1" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Marathi
                                                    </label>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="login_btn">
                                <Link to="/login">Login</Link>
                            </div>
                            <div className="get_started">
                                <Link to="#">Get Start</Link>
                            </div>
                            <div className="hlpline">
                                <p><i className="fas fa-headphones-alt" style={{ color: "#2b2b2b" }}></i><span> Helpline: <a
                                    href="tel:2358789546"> 2358789546</a></span></p>
                            </div>
                        </div>



                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar