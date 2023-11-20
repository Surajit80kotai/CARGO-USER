import React from 'react'

const AirlineFilter = ({ airlineData, onAirlineChange }) => {
    // console.log({ airlineData });

    return (
        <>
            <div className="airlines_wrapper">
                <div className="filter_option mb-3">
                    <h5>Airlines</h5>
                </div>
                {
                    airlineData?.map((item) => {
                        return (
                            <div className="form-check mb-2" key={item?._id}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={item?.airline}
                                    id={item?._id}
                                    onChange={() => onAirlineChange(item?.airline)}
                                />
                                <label className="form-check-label" htmlFor={item?._id}>
                                    {
                                        item?.airline === "IndiGo" ?
                                            <img src="/assets/img/6E.png" alt='' width="17px" className='me-2' style={{ borderRadius: "5px" }} />
                                            : item?.airline === "Air India" ?
                                                < img src="/assets/img/airindia.png" alt='' width="17px" className='me-2' style={{ borderRadius: "5px" }} />
                                                : item?.airline === "AirAsia" ?
                                                    < img src="/assets/img/I5.png" alt='' width="17px" className='me-2' style={{ borderRadius: "5px" }} />
                                                    : item?.airline === "Air India Express" ?
                                                        < img src="/assets/img/Air_India_Express.png" alt='' width="17px" className='me-2' style={{ borderRadius: "5px" }} />
                                                        : item?.airline === "SpiceJet" ?
                                                            < img src="/assets/img/sg.png" alt='' width="17px" className='me-2' style={{ borderRadius: "5px" }} />
                                                            : item?.airline === "Blue Dart" ?
                                                                < img src="/assets/img/BlueDartAviation.png" alt='' width="17px" className='me-2' style={{ borderRadius: "5px" }} />
                                                                : item?.airline === "Vistara" ?
                                                                    < img src="/assets/img/vistara-logo.png" alt='' width="17px" className='me-2' style={{ borderRadius: "5px" }} />
                                                                    : item?.airline === "Quick Jet" ?
                                                                        < img src="/assets/img/quickjet.jpg" alt='' width="17px" className='me-2' style={{ borderRadius: "5px" }} />
                                                                        : item?.airline === "Akasa Air" ?
                                                                            < img src="/assets/img/akasa-air-logo.png" alt='' width="17px" className='me-2' style={{ borderRadius: "5px" }} />
                                                                            : < img src="/assets/img/pradhan-air.png" alt='' width="17px" className='me-2' style={{ borderRadius: "5px" }} />
                                    }
                                    <span>{item?.airline}</span>
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default AirlineFilter