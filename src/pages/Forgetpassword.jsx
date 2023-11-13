import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { clearAuthData, userForgetPassword } from '../services/slices/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';

const Forgetpassword = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        conf_password: ""
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
                email: formValues?.email,
                password: formValues?.password
            }
            // console.log({ data });
            dispatch(userForgetPassword({ data, navigate }));
        }
    }

    useEffect(() => {
        if (!authData?.success) {
            setResError(authData);
        }
    }, [authData]);


    return (
        <>
            <div className="login_wrapper">
                <div className="login_left">
                    <img src="/assets/img/rachel-coyne-ZzVzIirmxSg-unsplash.jpg" alt="" className="img-fluid" />
                </div>
                <div className="login_right">
                    <Link to="/login"><i className="fa-solid fa-angle-left" style={{ color: "#ffffff" }}></i><span className='text-white mx-2'>Back</span></Link>
                    <div className="login_form">
                        <div className="login_com_logo">
                            <img src="/assets/img/logo (3).png" alt="" className="img-fluid" />

                        </div>
                        <h1 className="log_title">Reset Your Password</h1>
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
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control input_style"
                                    id="email"
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
                                    placeholder="Enter Password Again"
                                    name='conf_password'
                                    value={formValues?.conf_password}
                                    onChange={handleChange}
                                    style={{ border: formError ? "1px solid red" : "" }}
                                // required
                                />
                            </div>
                            <button type="submit" className="loginbtn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgetpassword