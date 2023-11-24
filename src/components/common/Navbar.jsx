import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { doLogOut } from '../../services/slices/AuthSlice';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

const Navbar = () => {
    // logged in user & token
    // const USER = JSON.parse(window.localStorage.getItem("user"));
    const TOKEN = JSON.parse(window.localStorage.getItem("token"));

    const dispatch = useDispatch();
    const navigate = useNavigate();


    // logout func.
    const LOGOUT = () => {
        dispatch(doLogOut());
        navigate('/login');
    }


    // Componenet mount cycle
    useEffect(() => {
        // Check your session and logout after it's expired.
        if (TOKEN) {
            // decode jwt token
            const decodedJwt = jwtDecode(TOKEN);
            const isExpired = decodedJwt.exp < Date.now() / 1000;
            if (isExpired) {
                dispatch(doLogOut());
                navigate('/login');
                // react toast message
                toast.success("Your Session Has Expired Please Login To Continue", {
                    autoClose: 4500
                });
            }
        } else {
            navigate('/login');
        }
    }, [dispatch, navigate, TOKEN]);

    return (
        <>
            <Helmet>
                <script src="/assets/js/custom.js"></script>
            </Helmet>

            <header>
                <div className="container-fluid">
                    <div className="nav-wrapper ">

                        <div className="logo-container" style={{ cursor: "pointer" }} onClick={() => navigate('/')}>
                            <img className="logo" src="/assets/img/logo (3).png" alt="Logo" />
                        </div>
                        <nav>
                            <input className="hidden" type="checkbox" id="menuToggle" />
                            <label className="menu-btn" htmlFor="menuToggle">
                                <div className="menu"></div>
                                <div className="menu"></div>
                                <div className="menu"></div>
                            </label>
                            {/* <div className="nav-container">
                                <ul className="nav-tabs">
                                    <li className="nav-tab"> <Link to="#">For forwards</Link> </li>
                                    <li className="nav-tab"> <Link to="#">For airlines</Link> </li>
                                    <li className="nav-tab"> <Link to="#">Customer</Link></li>
                                    <li className="nav-tab"> <Link to="#">About</Link></li>
                                    <li className="nav-tab"> <Link to="#" className="open_res">Login</Link></li>
                                    <li className="nav-tab"> <Link to="#" className="open_res">Sign Up</Link></li>
                                </ul>
                            </div> */}
                        </nav>

                        <div className="right ">

                            {/* Select From Dropdown */}
                            {/* <div className="select-dropdown">
                                <button type="button" data-value="" className="select-dropdown__button"><span>India</span>
                                    <i className="fas fa-chevron-down"></i>
                                </button>
                                <div className="select-dropdown__list">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Choose Country</label>
                                            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option defaultValue="0">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Currency</label>
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
                                        <label className="mb-2">Choose Language</label>
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
                                                        id="flexRadioDefault2" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                        English
                                                    </label>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <div className="radio_button">
                                                <div className="form-check ">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                        id="flexRadioDefault3" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                        Assamese
                                                    </label>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <div className="radio_button">
                                                <div className="form-check ">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                        id="flexRadioDefault4" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                        Bengali
                                                    </label>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <div className="radio_button">
                                                <div className="form-check ">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                        id="flexRadioDefault5" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault5">
                                                        Gujrati
                                                    </label>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <div className="radio_button">
                                                <div className="form-check ">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                        id="flexRadioDefault6" />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault6">
                                                        Marathi
                                                    </label>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="login_btn">
                                <Link onClick={LOGOUT} to="/login">Logout</Link>
                            </div>
                            {/* <div className="get_started">
                                <Link to="#">Get Start</Link>
                            </div> */}
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