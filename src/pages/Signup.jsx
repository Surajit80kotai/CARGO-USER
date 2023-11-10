import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [formValues, setFormValues] = useState({
        full_name: "",
        email: "",
        phone: "",
        phone_country_code: "",
        password: "",
        conf_password: "",
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
        if (formValues?.password !== formValues?.conf_password) {
            setFormError(true);
        } else {
            const data = {
                full_name: formValues?.full_name,
                email: formValues?.email,
                phone: formValues?.phone_country_code + formValues?.phone,
                // phone_country_code: formValues?.phone_country_code,
                password: formValues?.password
            }
            console.log({ data });
        }
    }


    return (
        <>
            <div className="login_wrapper">
                <div className="signup_left">
                    <img src="./assets/img/rachel-coyne-ZzVzIirmxSg-unsplash.jpg" alt="" className="img-fluid" />
                </div>
                <div className="login_right">
                    <Link to="/"><i className="fa-solid fa-angle-left" style={{ color: "#ffffff" }}></i><span className='text-white mx-2'>Home</span></Link>
                    <div className="login_form">
                        <div className="login_com_logo">
                            <img src="./assets/img/logo (3).png" alt="" className="img-fluid" />

                        </div>
                        <h1 className="log_title">Signup with your information</h1>
                        <form onSubmit={handleSubmit}>
                            {
                                formError ?
                                    <div className="alert alert-danger " role="alert">
                                        Password & Confirm Password Did Not Matched
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
                                    required
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
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Mobile Number</label>
                                <PhoneInput
                                    placeholder="Enter your phone number"
                                    inputProps={{
                                        name: 'phone',
                                        required: true,
                                    }}
                                    enableSearch={true}
                                    enableLongNumbers={true}
                                    country={'in'}
                                    value={formValues?.phone}
                                    onChange={(phoneValue, countryCode) => setFormValues({ ...formValues, phone: `+${phoneValue}`, phone_country_code: `+${countryCode?.dialCode}` })
                                    }
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
                                    placeholder="Enter Password"
                                    name='conf_password'
                                    value={formValues?.conf_password}
                                    onChange={handleChange}
                                    required
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