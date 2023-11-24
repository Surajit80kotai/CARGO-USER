import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { decryptData } from '../util/encryptionUtils';
import { timeDifferenceCalculation } from '../util/timeDifferenceCalculation';
import { useDispatch } from 'react-redux';
import { saveBookingDetails, shareBookingViaEmail } from '../services/slices/UtilitySlice';

const Booknow = () => {
    // header
    const header = {
        headers: {
            Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`
        }
    }
    const [buttonState, setButtonState] = useState('default');
    const [timeoutId, setTimeoutId] = useState(null);

    const location = useLocation();
    const { resultData = [], requestData = [] } = location.state || [];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const VOLUMETRIC_FACTOR = 5000;

    // getting encryptedBookingData
    const encryptedBookingData = window.sessionStorage.getItem("bhPNQreINf");
    const decryptedBookingData = decryptData(encryptedBookingData);

    // getting encryptedFlightData
    const encryptedFlightData = window.sessionStorage.getItem("MmPLHcYiqG");
    const decryptedFlightData = decryptData(encryptedFlightData);

    // Time gap calculation
    const TIME = timeDifferenceCalculation(decryptedFlightData?.deperture_time, decryptedFlightData?.arival_time);

    // calculating totals 
    const calculateTotals = () => {
        let totalLength = 0;
        let totalWidth = 0;
        let totalHeight = 0;
        let totalWeight = 0;
        let totalVolWeight = 0;
        let totalChargeableWeight = 0;
        let totalPrice = 0;

        decryptedBookingData?.product_details?.forEach((item) => {
            const { Length, width, height, weight, totalPrice: productTotalPrice } = item;
            totalLength += parseFloat(Length) || 0;
            totalWidth += parseFloat(width) || 0;
            totalHeight += parseFloat(height) || 0;
            totalWeight += parseFloat(weight) || 0;
            totalPrice += parseFloat(productTotalPrice) || 0;

            // Calculate volumetric weight based on Length, Width, and Height
            const volWeight = (parseFloat(Length) * parseFloat(width) * parseFloat(height)) / VOLUMETRIC_FACTOR || 0;
            totalVolWeight += volWeight;

            // Calculate chargeable weight based on the greater of weight and vol_weight
            const chargeableWeight = Math.max(parseFloat(weight) || 0, volWeight);
            totalChargeableWeight += chargeableWeight;
        });

        return {
            totalLength,
            totalWidth,
            totalHeight,
            totalWeight,
            totalVolWeight,
            totalChargeableWeight,
            totalPrice
        };
    };

    // function for copy to clipboard
    const handleCopyDetails = () => {
        const flightDetails = `
            Flight: ${decryptedFlightData?.flight}
            Origin: ${decryptedFlightData?.origin}
            Destination: ${decryptedFlightData?.destination}
            Shipment Date & Time: ${decryptedBookingData?.shipment_date_time}
        `;

        navigator.clipboard.writeText(flightDetails)
            .then(() => alert("Flight details copied to clipboard"))
            .catch((error) => console.error("Error copying details:", error));
    };

    // function for save data
    const handleSave = () => {
        const data = {
            title: "Booked Flight Details",
            text: "Check out these details",
            flightData: decryptedFlightData,
            bookingData: decryptedBookingData,
            totals: calculateTotals(),
        };
        // console.log({ data });
        dispatch(saveBookingDetails({ data, header }));
    };

    // function for share data
    const handleShare = () => {
        const data = {
            title: "Booked Flight Details",
            text: "Check out these details",
            flightData: decryptedFlightData,
            bookingData: decryptedBookingData,
            totals: calculateTotals(),
        };
        // console.log({ data });
        dispatch(shareBookingViaEmail({ data, header }));
    };

    // Book now button animation clcik
    const handleClick = () => {
        setButtonState('placing');

        const timeout = setTimeout(() => {
            setButtonState('done');
            navigate('/payment');
        }, 3500);
        setTimeoutId(timeout);
    };

    // Cleanup the timeout when the component unmounts
    useEffect(() => {
        return () => {
            clearTimeout(timeoutId);
        };
    }, [timeoutId]);


    // console.log('Decrypted booking data:', decryptedBookingData);
    // console.log('Decrypted flight data:', decryptedFlightData);
    // console.log('resultData:', resultData);

    return (
        <>
            <main>
                <div className="container">
                    <div className="brecramp mb-5">
                        <button onClick={() => navigate('/serchresult', {
                            state: {
                                resultData: resultData,
                                requestData: requestData
                            }
                        })}><i className="fas fa-chevron-left" style={{ color: "#292929" }}></i> Back</button>
                    </div>
                    <div className="row ">
                        <div className="col-md-9">
                            <div className="booking_card">
                                {/* Flight Details */}
                                <div className="booking_card_head">
                                    <div className="bk_left">
                                        {/* airline_logo images */}
                                        <div className="airline_logo">
                                            {
                                                decryptedFlightData?._airlineId?.airline === "IndiGo" ?
                                                    <img src="/assets/img/6E.png" alt='' />
                                                    : decryptedFlightData?._airlineId?.airline === "Air India" ?
                                                        < img src="/assets/img/airindia.png" alt='' />
                                                        : decryptedFlightData?._airlineId?.airline === "AirAsia" ?
                                                            < img src="/assets/img/I5.png" alt='' />
                                                            : decryptedFlightData?._airlineId?.airline === "Air India Express" ?
                                                                < img src="/assets/img/Air_India_Express.png" alt='' />
                                                                : decryptedFlightData?._airlineId?.airline === "SpiceJet" ?
                                                                    < img src="/assets/img/sg.png" alt='' />
                                                                    : decryptedFlightData?._airlineId?.airline === "Blue Dart" ?
                                                                        < img src="/assets/img/BlueDartAviation.png" alt='' />
                                                                        : decryptedFlightData?._airlineId?.airline === "Vistara" ?
                                                                            < img src="/assets/img/vistara-logo.png" alt='' />
                                                                            : decryptedFlightData?._airlineId?.airline === "Quick Jet" ?
                                                                                < img src="/assets/img/quickjet.jpg" alt='' />
                                                                                : decryptedFlightData?._airlineId?.airline === "Akasa Air" ?
                                                                                    < img src="/assets/img/akasa-air-logo.png" alt='' />
                                                                                    : < img src="/assets/img/pradhan-air.png" alt='' />
                                            }
                                        </div>

                                        <div className="up_down_location">
                                            <h4>{decryptedFlightData?.origin} <i className="fas fa-arrow-right" style={{ color: "#363636" }}></i> {decryptedFlightData?.destination}</h4>
                                            <div className="time_duration">
                                                {TIME?.hours}h - {TIME?.minutes}m
                                            </div>
                                        </div>
                                    </div>

                                    {/* Save & Share button */}
                                    <div className="bk_right">
                                        <div className="save_btn">
                                            <button className="sv_btn me-2" onClick={handleSave}>Save</button>
                                            <button className="share" onClick={handleShare}><i className="fas fa-share-alt" style={{ color: "#E70A3E" }}></i>Share</button>
                                        </div>
                                    </div>

                                </div>
                                <div className="body_booking">
                                    <div className="filght_details">
                                        <div className="booking_id">
                                            <h3><i className="fas fa-plane"></i> <span>{decryptedFlightData?.flight}</span></h3>
                                        </div>
                                        <div className="destination">
                                            <h3>{decryptedFlightData?.origin} - {decryptedFlightData?.destination}</h3>
                                        </div>
                                        <div className="des_time">
                                            <h3>
                                                {decryptedBookingData?.shipment_date_time}
                                                <span className='mx-2'>{TIME?.formattedStartTime} - {TIME?.formattedEndTime}</span>
                                            </h3>
                                        </div>
                                        <div className="cpy_details">
                                            <button onClick={handleCopyDetails}><i className="far fa-copy"></i> Copy Flight Details</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="pro_details">
                                    <div className="details_content">
                                        <h4>Total Dimensions: <span>
                                            {decryptedBookingData?.dimension} cm<sup>3</sup>
                                        </span></h4>
                                    </div>
                                </div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col" className='text-center'>Gross Weight(Kg.)</th>
                                            <th scope="col" className='text-center'>Vol. Weight(Kg.)</th>
                                            <th scope="col" className='text-center'>Chargeable Weight(Kg.)</th>
                                            <th scope="col" className='text-center'>Stackable</th>
                                            <th scope="col" className='text-center'>Trunable</th>
                                            <th scope="col" className='text-center'>Battery</th>
                                            <th scope="col" className='text-center'>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            decryptedBookingData?.product_details?.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td className='text-center'>{Number(item?.weight)?.toFixed(2)}</td>
                                                        <td className='text-center'>{Number(item?.vol_weight)?.toFixed(2)}</td>
                                                        <td className='text-center'>{Number(item?.chargeable_weight)?.toFixed(2)}</td>
                                                        <td className='text-center'>
                                                            {
                                                                item?.isStockable ? <i className="fa-solid fa-check" style={{ color: "#E70A3E" }}></i> : <i className="fa-solid fa-xmark" style={{ color: "#E70A3E" }}></i>
                                                            }
                                                        </td>
                                                        <td className='text-center'>
                                                            {
                                                                item?.isTurnable ? <i className="fa-solid fa-check" style={{ color: "#E70A3E" }}></i> : <i className="fa-solid fa-xmark" style={{ color: "#E70A3E" }}></i>
                                                            }
                                                        </td>
                                                        <td className='text-center'>
                                                            {
                                                                item?.isBatteryIncluded ? <i className="fa-solid fa-check" style={{ color: "#E70A3E" }}></i> : <i className="fa-solid fa-xmark" style={{ color: "#E70A3E" }}></i>
                                                            }
                                                        </td>
                                                        <td className='text-center'>{item?.totalPrice?.toFixed(2)}/-</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <th scope="col">TOTAL</th>
                                            <th scope="col" className='text-center'>{calculateTotals()?.totalWeight?.toFixed(2)}(Kg.)</th>
                                            <th scope="col" className='text-center'>{calculateTotals()?.totalVolWeight?.toFixed(2)}(Kg.)</th>
                                            <th scope="col" className='text-center'>{calculateTotals()?.totalChargeableWeight?.toFixed(2)}(Kg.)</th>
                                            <th scope="col" className='text-center'></th>
                                            <th scope="col" className='text-center'></th>
                                            <th scope="col" className='text-center'></th>
                                            <th scope="col" className='text-center'>{calculateTotals()?.totalPrice?.toFixed(2)}/-</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>

                        {/* Payment Calculation section */}
                        <div className="col-md-3">
                            <div className="booking_details_wrapper">
                                <div className="book_details_head">
                                    <h3>Booking Details</h3>
                                </div>
                                <div className="book_details_head">
                                    <h5><span>&#8377;</span>{calculateTotals()?.totalPrice?.toFixed(2)}</h5>
                                </div>

                                <div className="order_summary mt-4">
                                    <div className="sum_one">
                                        <div className="sum_title">
                                            <h3>Chargeable Weight </h3>
                                        </div>
                                        <div className="sum_details">
                                            <h4>{calculateTotals()?.totalChargeableWeight?.toFixed(2)}<span> Kg</span></h4>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="sum_one">
                                        <div className="sum_title">
                                            <h3>Air Freight Cost</h3>
                                            <p>@0.61 ₹/Kg</p>
                                        </div>
                                        <div className="sum_details">
                                            <h4> <span>₹</span>502.23 </h4>
                                        </div>
                                    </div>
                                    <div className="sum_one">
                                        <div className="sum_title">
                                            <h3>Surcharches </h3>
                                            <p>@0.61 ₹/Kg</p>
                                        </div>
                                        <div className="sum_details">
                                            <h4> <span>₹</span>502.23 </h4>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="sum_one">
                                        <div className="sum_title">
                                            <h3>Chargeable Weight </h3>
                                        </div>
                                        <div className="sum_details">
                                            <h4>{calculateTotals()?.totalChargeableWeight?.toFixed(2)} <span> Kg</span></h4>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="sum_one">
                                        <div className="sum_title">
                                            <h3 className="fw-bold">Total</h3>
                                        </div>
                                        <div className="sum_details">
                                            <h4> <span>₹</span>{calculateTotals()?.totalPrice?.toFixed(2)}</h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <button className="book"><i className="fas fa-lock" style={{color: "#ffffff"}}></i> Book Now</button> */}
                                <button
                                    onClick={handleClick}
                                    className={`place-order place-order--${buttonState}`}
                                >
                                    <div className="default text">Book Now</div>
                                    <div className="forklift">
                                        <div className="upper"></div>
                                        <div className="lower"></div>
                                    </div>
                                    <div className={`box animation ${buttonState === 'done' ? 'animate' : ''}`}></div>
                                    <div className="done text"><i className="fas fa-check" style={{ color: "#ffffff" }}></i> Done</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
            </main >
        </>
    )
}

export default Booknow