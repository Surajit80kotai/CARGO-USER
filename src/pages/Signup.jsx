import React, { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { clearAuthData, userSignup } from '../services/slices/AuthSlice';

const Signup = () => {
    const [formValues, setFormValues] = useState({
        full_name: "",
        email: "",
        phone: "",
        phone_country_code: "",
        password: "",
        conf_password: "",
    });

    const [formError, setFormError] = useState(null);
    const [resError, setResError] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authData } = useSelector(state => state.authSlice);

    // handleChange func.
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        setFormError(null);
        dispatch(clearAuthData());
        setResError(null);
    }

    // handleSubmit func.
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValues?.password !== formValues?.conf_password) {
            setFormError({ error: true, message: "Password & Confrim Password Did Not Matched." });
        } else {
            const data = {
                full_name: formValues?.full_name,
                email: formValues?.email,
                phone: formValues?.phone,
                password: formValues?.password
            }
            // console.log({ data });
            dispatch(userSignup({ data, navigate }));
        }
    }


    useEffect(() => {
        if (!authData?.success) {
            setResError(authData);
        }
    }, [authData]);

    // console.log(error);

    return (
        <>
            <div className="login_wrapper">
                <div className="signup_left">
                    <img src="/assets/img/rachel-coyne-ZzVzIirmxSg-unsplash.jpg" alt="" className="img-fluid" />
                </div>
                <div className="login_right">
                    <Link to="/"><i className="fa-solid fa-angle-left" style={{ color: "#ffffff" }}></i><span className='text-white mx-2'>Home</span></Link>
                    <div className="login_form">
                        <div className="login_com_logo">
                            <img src="/assets/img/logo (3).png" alt="" className="img-fluid" />

                        </div>
                        <h1 className="log_title">Signup with your information</h1>
                        <form onSubmit={handleSubmit}>
                            {
                                formError?.error ?
                                    <div className="alert alert-danger " role="alert">
                                        {formError?.message}
                                    </div>
                                    : resError ?
                                        <div className="alert alert-danger " role="alert">
                                            {resError?.message}
                                        </div>
                                        : null
                            }

                            <div className="mb-3">
                                <label htmlFor="full_name" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control input_style"
                                    id="full_name"
                                    placeholder="Enter Full Name"
                                    name='full_name'
                                    value={formValues?.full_name}
                                    onChange={handleChange}
                                    style={{ border: resError?.key === "full_name" ? "1px solid red" : "" }}
                                // required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control input_style"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Email"
                                    name='email'
                                    value={formValues?.email}
                                    onChange={handleChange}
                                    style={{ border: resError?.key === "email" ? "1px solid red" : "" }}
                                // required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Mobile Number</label>
                                <PhoneInput
                                    placeholder="Enter your phone number"
                                    inputProps={{
                                        name: 'phone',
                                        // required: true,
                                    }}
                                    enableSearch={true}
                                    enableLongNumbers={true}
                                    country={'in'}
                                    value={formValues?.phone}
                                    onChange={(phoneValue, countryCode) => {
                                        // Your existing logic
                                        setFormValues({ ...formValues, phone: `+${phoneValue}`, phone_country_code: `+${countryCode?.dialCode}` });

                                        // Additional actions
                                        dispatch(clearAuthData());
                                        setFormError(null);
                                        setResError(null);
                                    }}
                                    style={resError?.key === "phone" ? {
                                        border: '1px solid red',
                                        borderRadius: '5px',
                                    } : null}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control input_style"
                                    id="password"
                                    placeholder="Enter Password"
                                    name='password'
                                    value={formValues?.password}
                                    onChange={handleChange}
                                    style={{ border: resError?.key === "password" ? "1px solid red" : "" }}
                                // required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="conf_password" className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control input_style"
                                    id="conf_password"
                                    placeholder="Enter Password"
                                    name='conf_password'
                                    value={formValues?.conf_password}
                                    onChange={handleChange}
                                    // required
                                    style={{ border: formError ? "1px solid red" : "" }}
                                />
                            </div>

                            <button type="submit" className="loginbtn">Register</button>
                            <div className="divider">
                                <p>OR</p>
                            </div>
                            {/* <div className="text-center">
                                <Link to="#" className="loginlink">Send me a login link</Link>
                            </div> */}
                            <div className="singin">
                                <p>Already have an account yet? <Link to="/login"> Login Here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup