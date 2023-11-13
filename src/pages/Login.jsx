import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { clearAuthData, userLogin } from '../services/slices/AuthSlice';

const Login = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });
    const [resError, setResError] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authData } = useSelector(state => state.authSlice);

    // handleChange func.
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        dispatch(clearAuthData());
        setResError(null);
    }

    // handleSubmit func.
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: formValues?.email,
            password: formValues?.password
        }
        // console.log({ data });
        dispatch(userLogin({ data, navigate }));
    }

    useEffect(() => {
        if (!authData?.success) {
            setResError(authData);
        }
    }, [authData]);

    // console.log(authData);

    return (
        <>
            <div className="login_wrapper">
                <div className="login_left">
                    <img src="./assets/img/rachel-coyne-ZzVzIirmxSg-unsplash.jpg" alt="" className="img-fluid" />
                </div>
                <div className="login_right">
                    <Link to="/"><i className="fa-solid fa-angle-left" style={{ color: "#ffffff" }}></i><span className='text-white mx-2'>Home</span></Link>
                    <div className="login_form">
                        <div className="login_com_logo">
                            <img src="./assets/img/logo (3).png" alt="" className="img-fluid" />

                        </div>
                        <h1 className="log_title">Log in with password</h1>
                        <form onSubmit={handleSubmit}>
                            {
                                resError ?
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
                            <div className="mb-3 ">
                                <Link to="/forget-password" className="Forgetpassword">Forgot your password?</Link>
                            </div>
                            <button type="submit" className="loginbtn">Login</button>
                            <div className="divider">
                                <p>OR</p>
                            </div>
                            {/* <div className="text-center">
                                <Link to="#" className="loginlink">Send me a login link</Link>
                            </div> */}
                            <div className="singin">
                                <p>Don’t have an account yet? <Link to="/signup"> Sign Up Here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login