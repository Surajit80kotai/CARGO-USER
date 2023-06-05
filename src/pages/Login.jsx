import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="login_wrapper">
                <div className="login_left">
                    <img src="./assets/img/rachel-coyne-ZzVzIirmxSg-unsplash.jpg" alt="" className="img-fluid" />
                    {/* <div className="login_content">
                            <p><i className="fas fa-check" style="color: #ffffff;"></i> <span>Lorem Ipsum is simply dummy text of the printing</span></p>
                            <p><i className="fas fa-check" style="color: #ffffff;"></i> <span>Lorem Ipsum is simply dummy text of the printing</span></p>
                            <p><i className="fas fa-check" style="color: #ffffff;"></i> <span>Lorem Ipsum is simply dummy text of the printing</span></p>
                        </div>  */}
                </div>
                <div className="login_right">

                    <div className="login_form">
                        <div className="login_com_logo">
                            <img src="./assets/img/logo (3).png" alt="" className="img-fluid" />

                        </div>
                        <h1 className="log_title">Log in with password</h1>
                        <form onSubmit={(e) => e.preventDefault()}>

                            <div className="alert alert-danger " role="alert">
                                Incorrect Email Or Password!
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control input_style" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control input_style" id="exampleInputPassword1" placeholder="Enter Password" />
                            </div>
                            <div className="mb-3 ">
                                <Link to="#" className="Forgetpassword">Forgot your password?</Link>
                            </div>
                            <button type="submit" className="loginbtn">Login</button>
                            <div className="divider">
                                <p>OR</p>
                            </div>
                            <div className="text-center">
                                <Link to="#" className="loginlink">Send me a login link</Link>
                            </div>
                            <div className="singin">
                                <p>Don’t have an account yet? <Link to="#"> Sign Up Here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login