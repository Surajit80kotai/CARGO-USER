import React from 'react'
import PhoneInput from 'react-phone-input-2';

const ShippingDetails = ({ shippingDetails, onShippingDetailsChange }) => {

    // handleChange function
    const handleChange = (e) => {
        onShippingDetailsChange({ ...shippingDetails, [e.target.name]: e.target.value });
    }


    return (
        <>
            <div className='row'>
                <div className="col-md-3">
                    <label htmlFor="customer_name" className="form-label result_label">Full Name</label>
                    <input
                        type="text"
                        className="form-control pro_form_input"
                        id="customer_name"
                        name='customer_name'
                        value={shippingDetails?.customer_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-3" id='phone-input'>
                    <label htmlFor="customer_phone" className="form-label result_label">Phone Number</label>
                    <PhoneInput
                        inputProps={{
                            name: 'customer_phone',
                        }}
                        id="customer_phone"
                        enableSearch={true}
                        country={'in'}
                        value={shippingDetails?.customer_phone}
                        onChange={(phoneValue) => onShippingDetailsChange({ ...shippingDetails, customer_phone: `+${phoneValue}` })}
                    />
                </div>
                <div className="col-md-3">
                    <label htmlFor="customer_email" className="form-label result_label">Email ID</label>
                    <input
                        type="email"
                        className="form-control pro_form_input"
                        id="customer_email"
                        name='customer_email'
                        value={shippingDetails?.customer_email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-3">
                    <label htmlFor="customer_address" className="form-label result_label">Full Address</label>
                    <input
                        type="text"
                        className="form-control pro_form_input"
                        id="customer_address"
                        name='customer_address'
                        value={shippingDetails?.customer_address}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <hr style={{ background: "white" }} />
        </>
    )
}

export default ShippingDetails