import { addDays, differenceInMilliseconds, format, isAfter, parse } from 'date-fns';
import React from 'react';

const SearchResultFlightList = ({ item, index, onBookNowClick, isBooked }) => {
    const startTimeString = item?.deperture_time;
    const endTimeString = item?.arival_time;

    // Parse the time strings using date-fns
    const startTime = parse(startTimeString, 'h:mm:ssa', new Date());
    let endTime = parse(endTimeString, 'h:mm:ssa', new Date());

    // Check if endTime is before startTime
    if (!isAfter(endTime, startTime)) {
        // If it's not after, assume it's on the next day
        endTime = addDays(endTime, 1);
    }

    // Calculate the time difference in milliseconds
    const timeDifference = differenceInMilliseconds(endTime, startTime);

    // Convert the time difference to hours and minutes
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    const formattedStartTime = format(startTime, 'h:mm a');
    const formattedEndTime = format(endTime, 'h:mm a');

    const handleBookNowClick = () => {
        // Call the callback function with the flight data
        onBookNowClick(item, index);
    };

    const lowestPrice = item?.price?.reduce((minPrice, currentPrice) => {
        return currentPrice?.price < minPrice?.price ? currentPrice : minPrice;
    }, item.price[0]);


    return (
        <>
            <div className={index === 0 ? "result_airline_box" : "result_airline_box  mt-3"}>
                <div className="best_label">
                    <h6>BEST PRICE <span>
                        <img src="/assets/img/4194559 1.png" alt="" />
                    </span></h6>
                </div>
                <div className="result_table">
                    <div className="airline_name">
                        <h4><span>
                            {
                                item?._airlineId?.airline === "IndiGo" ?
                                    <img src="/assets/img/6E.png" alt='' width="30px" />
                                    : item?._airlineId?.airline === "Air India" ?
                                        < img src="/assets/img/airindia.png" alt='' width="30px" />
                                        : item?._airlineId?.airline === "AirAsia" ?
                                            < img src="/assets/img/I5.png" alt='' width="30px" />
                                            : item?._airlineId?.airline === "Air India Express" ?
                                                < img src="/assets/img/Air_India_Express.png" alt='' width="30px" />
                                                : item?._airlineId?.airline === "SpiceJet" ?
                                                    < img src="/assets/img/sg.png" alt='' width="30px" />
                                                    : item?._airlineId?.airline === "Blue Dart" ?
                                                        < img src="/assets/img/BlueDartAviation.png" alt='' width="30px" />
                                                        : item?._airlineId?.airline === "Vistara" ?
                                                            < img src="/assets/img/vistara-logo.png" alt='' width="30px" />
                                                            : item?._airlineId?.airline === "Quick Jet" ?
                                                                < img src="/assets/img/quickjet.jpg" alt='' width="30px" />
                                                                : item?._airlineId?.airline === "Akasa Air" ?
                                                                    < img src="/assets/img/akasa-air-logo.png" alt='' width="30px" />
                                                                    : < img src="/assets/img/pradhan-air.png" alt='' width="30px" />
                            }
                        </span>{item?._airlineId?.airline}</h4>
                    </div>
                    <div className="form_des">
                        <div className="time">
                            <h5>{formattedStartTime}</h5>
                        </div>
                        <div className="loaction_name">
                            <h6>{item?.origin}</h6>
                        </div>
                    </div>
                    <div className="distance">
                        <h3>{hours} h {minutes} m</h3>
                        <img src="/assets/img/distance.png" alt="" className="img-fluid" />
                    </div>
                    <div className="form_des">
                        <div className="time">
                            <h5>{formattedEndTime}</h5>
                        </div>
                        <div className="loaction_name">
                            <h6>{item?.destination}</h6>
                        </div>
                    </div>
                    <div className="total_cost">
                        <h4> ₹ <span> {lowestPrice?.price}<span style={{ color: "#e70a3e" }}>**</span></span></h4>
                    </div>
                    <button
                        className="book_now"
                        onClick={handleBookNowClick}
                        disabled={isBooked}
                        style={isBooked ? {
                            background: "white",
                            color: "#e70a3e",
                            border: "1px solid #e70a3e"
                        } : null}
                    >
                        {isBooked ? 'Booked' : 'Book Now'}
                    </button>
                </div>
                {/* #e70a3e */}
                {/* Offer section */}
                {/* <div className="offer_showing">
                    <h5><span><img src="/assets/img/879859 1.png" alt="" /></span> Get Rs 250 off using MMTOFFER</h5>
                </div> */}
            </div>
        </>
    )
}

export default SearchResultFlightList