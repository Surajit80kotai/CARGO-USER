import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { decryptData } from '../util/encryptionUtils';
import { useDispatch, useSelector } from 'react-redux';
import { cargoBooking, clearCreateBookingStatus, fileDelete } from '../services/slices/UtilitySlice';
import { toast } from 'react-toastify';

const Payment = () => {
    // header
    const header = {
        headers: {
            Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`
        }
    }

    const BASE_URL = process.env.REACT_APP_NODE_HOST;

    // getting encryptedBookingData
    const encryptedBookingData = window.sessionStorage.getItem("bhPNQreINf");
    const decryptedBookingData = decryptData(encryptedBookingData);

    const [formValues, setFormValues] = useState({
        full_name: "",
        billing_address: "",
        city: "",
        state: "",
        zip: "",
        card_holder_name: "",
        card_number: "",
        exp_month: "",
        exp_year: "",
        CVC_number: ""
    });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { create_booking_stat } = useSelector(state => state.utilitySlice);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!(formValues?.full_name && formValues?.billing_address && formValues?.city && formValues?.state && formValues?.zip && formValues?.card_holder_name && formValues?.card_number && formValues?.exp_month && formValues?.exp_year && formValues?.CVC_number)) {
            toast.error("All fields are required.", 3000)
        } else {
            const data = {
                origin: decryptedBookingData?.origin,
                destination: decryptedBookingData?.destination,
                shipment_date_time: decryptedBookingData?.shipment_date_time,
                flight: decryptedBookingData?.flight,
                customer_name: decryptedBookingData?.customer_name,
                customer_phone: decryptedBookingData?.customer_phone,
                customer_email: decryptedBookingData?.customer_email,
                customer_address: decryptedBookingData?.customer_address,
                product_details: decryptedBookingData?.product_details,
                _userID: decryptedBookingData?._userID,
                _airlineId: decryptedBookingData?._airlineId,
                totalWeight: decryptedBookingData?.totalWeight,
                dimension: decryptedBookingData?.dimension,
                transport_type: decryptedBookingData?.transport_type,
                price: decryptedBookingData?.price,
                currency: decryptedBookingData?.currency,
                chargeableWeight: decryptedBookingData?.chargeableWeight,
            }
            dispatch(cargoBooking({ data, navigate, header }));
        }
    }

    useEffect(() => {
        if (create_booking_stat?.success) {
            const filePath = BASE_URL + create_booking_stat?.folderUrl;
            const fileName = create_booking_stat?.file_name.toLowerCase();

            const aTag = document.createElement("a");
            aTag.href = filePath;
            aTag.setAttribute("download", fileName);
            aTag.setAttribute("target", "_blank");
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();

            navigate('/successpage');
            setTimeout(() => {
                dispatch(fileDelete({ folder: create_booking_stat?.folder }))
            }, 30000);
        }
        return () => {
            dispatch(clearCreateBookingStatus());
        }
    }, [dispatch, BASE_URL, create_booking_stat, navigate]);


    return (
        <>
            <main>
                <article className="card">
                    <form onSubmit={handleSubmit}>
                        <div className="container">
                            <div className="card-title">
                                <h2>Payment</h2>
                            </div>
                            <div className="card-body">
                                <div className="payment-type">
                                    <h4>Choose payment method below</h4>
                                    <div className="types flex justify-space-between">
                                        <div className="type selected">
                                            <div className="logo">
                                                <i className="far fa-credit-card"></i>
                                            </div>
                                            <div className="text">
                                                <p>Pay with Credit Card</p>
                                            </div>
                                        </div>
                                        <div className="type">
                                            <div className="logo">
                                                <i className="fab fa-paypal"></i>
                                            </div>
                                            <div className="text">
                                                <p>Pay with PayPal</p>
                                            </div>
                                        </div>
                                        <div className="type">
                                            <div className="logo">
                                                <i className="fab fa-amazon"></i>
                                            </div>
                                            <div className="text">
                                                <p>Pay with Amazon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="payment-info flex justify-space-between">
                                    <div className="column billing">
                                        <div className="title">
                                            <div className="num">1</div>
                                            <h4>Billing Info</h4>
                                        </div>
                                        <div className="field full">
                                            <label htmlFor="full_name">Full Name</label>
                                            <input
                                                required
                                                name='full_name'
                                                value={formValues?.full_name}
                                                onChange={handleChange}
                                                id="full_name"
                                                type="text"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div className="field full">
                                            <label htmlFor="billing_address">Billing Address</label>
                                            <input
                                                required
                                                onChange={handleChange}
                                                name='billing_address'
                                                value={formValues?.billing_address}
                                                id="billing_address"
                                                type="text"
                                                placeholder="Billing Address"
                                            />
                                        </div>
                                        <div className="flex justify-space-between">
                                            <div className="field half">
                                                <label htmlFor="city">City</label>
                                                <input
                                                    required
                                                    onChange={handleChange}
                                                    name='city'
                                                    value={formValues?.city}
                                                    id="city"
                                                    type="text"
                                                    placeholder="City"
                                                />
                                            </div>
                                            <div className="field half">
                                                <label htmlFor="state">State</label>
                                                <input
                                                    required
                                                    onChange={handleChange}
                                                    name='state'
                                                    value={formValues?.state}
                                                    id="state"
                                                    type="text"
                                                    placeholder="State"
                                                />
                                            </div>
                                        </div>
                                        <div className="field full">
                                            <label htmlFor="zip">Zip</label>
                                            <input
                                                required
                                                onChange={handleChange}
                                                name='zip'
                                                value={formValues?.zip}
                                                id="zip"
                                                type="text"
                                                placeholder="Zip"
                                            />
                                        </div>
                                    </div>
                                    <div className="column shipping">
                                        <div className="title">
                                            <div className="num">2</div>
                                            <h4>Credit Card Info</h4>
                                        </div>
                                        <div className="field full">
                                            <label htmlFor="card_holder_name">Cardholder Name</label>
                                            <input
                                                required
                                                onChange={handleChange}
                                                name='card_holder_name'
                                                value={formValues?.card_holder_name}
                                                id="card_holder_name"
                                                type="text"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div className="field full">
                                            <label htmlFor="card_number">Card Number</label>
                                            <input
                                                required
                                                onChange={handleChange}
                                                name='card_number'
                                                value={formValues?.card_number}
                                                id="card_number"
                                                type="text"
                                                placeholder="1234-5678-9012-3456"
                                                maxLength={16}
                                            />
                                        </div>
                                        <div className="flex justify-space-between">
                                            <div className="field half">
                                                <label htmlFor="exp_month">Exp. Month</label>
                                                <input
                                                    required
                                                    onChange={handleChange}
                                                    name='exp_month'
                                                    value={formValues?.exp_month}
                                                    id="exp_month"
                                                    type="text"
                                                    placeholder="12"
                                                />
                                            </div>
                                            <div className="field half">
                                                <label htmlFor="exp_year">Exp. Year</label>
                                                <input
                                                    required
                                                    onChange={handleChange}
                                                    name='exp_year'
                                                    value={formValues?.exp_year}
                                                    id="exp_year"
                                                    type="text"
                                                    placeholder="19"
                                                />
                                            </div>
                                        </div>
                                        <div className="field full">
                                            <label htmlFor="CVC_number">CVC Number</label>
                                            <input
                                                required
                                                onChange={handleChange}
                                                name='CVC_number'
                                                value={formValues?.CVC_number}
                                                id="CVC_number"
                                                type="text"
                                                placeholder="468"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-actions flex justify-space-between">
                                <div className="flex-start">
                                    {/* <button className="button button-secondary">Return to Store</button> */}
                                </div>
                                <div className="flex-end">
                                    <Link to="/booknow" onClick={() => navigate('/booknow')} className="button button-link">Back to Shipping</Link>
                                    <button className="button button-primary" type='submit'>Proceed</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </article>
            </main>
        </>
    )
}

export default Payment