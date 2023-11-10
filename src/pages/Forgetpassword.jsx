import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Forgetpassword = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        conf_password: ""
    });
    const [formError, setFormError] = useState(false);

    // handleChange func.
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        setFormError(false);
    }

    // handleSubmit func.
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formError) {
            setFormError(true);
        } else {
            const data = {
                email: formValues?.email,
                password: formValues?.password
            }
            console.log({ data });
        }
    }

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
                        <h1 className="log_title">Reset Your Password</h1>
                        <form onSubmit={handleSubmit}>
                            {
                                formError ?
                                    <div className="alert alert-danger " role="alert">
                                        Incorrect Email Or Password!
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
                                    required
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
                                    required
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
                                    required
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