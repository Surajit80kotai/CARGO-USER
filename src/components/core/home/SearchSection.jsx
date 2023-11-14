import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllFlight, userSearchFlights } from '../../../services/slices/UtilitySlice';

const SearchSection = () => {
    // header
    const header = {
        headers: {
            Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`
        }
    }

    const [filteredOrigins, setFilteredOrigins] = useState([]);
    const [filteredDestinations, setFilteredDestinations] = useState([]);
    const [searchQueryFrom, setSearchQueryFrom] = useState('');
    const [searchQueryTo, setSearchQueryTo] = useState('');
    const [from, setFrom] = useState();
    const [to, setTo] = useState();

    const [formValues, setFormValues] = useState({
        shipmentDate: "",
        quantity: ""
    })


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { flightData } = useSelector(state => state.utilitySlice);


    // Function to update 'from' state when an origin is selected
    const handleOriginSelect = (selectedOrigin) => {
        setFrom({
            city: selectedOrigin,
            airport: `[${selectedOrigin}] Airport`,
        });
    };

    // Function to update 'to' state when a destination is selected
    const handleDestinationSelect = (selectedDestination) => {
        setTo({
            city: selectedDestination,
            airport: `[${selectedDestination}] Airport`,
        });
    };


    // Function to handle the swap
    const handleSwap = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    }

    // handleChange function.
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };


    // searchFlight function.
    const searchFlight = () => {
        const data = {
            origin: from?.city,
            destination: to?.city,
            shipmentDate: formValues?.shipmentDate,
            quantity: formValues?.quantity
        }
        // console.log({ data, header });
        dispatch(userSearchFlights({ data, navigate, header }))
    }

    useEffect(() => {
        dispatch(getAllFlight());
    }, [dispatch]);

    useEffect(() => {
        const uniqueOriginsSet = new Set();
        const uniqueDestinationSet = new Set();

        flightData?.data?.forEach(item => {
            uniqueOriginsSet?.add(item?.origin);
            uniqueDestinationSet?.add(item?.destination);
        });

        const uniqueOriginsArray = Array?.from(uniqueOriginsSet);
        const uniqueDestinationsArray = Array?.from(uniqueDestinationSet);

        // Filter the uniqueOrigins and uniqueDestinations based on the search query
        const filteredOrigins = uniqueOriginsArray?.filter(item => item?.toLowerCase()?.includes(searchQueryFrom?.toLowerCase()));
        setFilteredOrigins(filteredOrigins);

        const filteredDestinations = uniqueDestinationsArray?.filter(item => item?.toLowerCase()?.includes(searchQueryTo?.toLowerCase()));
        setFilteredDestinations(filteredDestinations);

        setFrom({
            city: filteredOrigins[0],
            airport: `[${filteredOrigins[0]}] Airport`,
        });

        setTo({
            city: filteredDestinations[0],
            airport: `[${filteredDestinations[0]}] Airport`,
        });
    }, [flightData, searchQueryFrom, searchQueryTo]);



    return (
        <>

            <div className="search_sction">
                <div className="container">
                    <h2 className="title_ser ">Search Lowest Price</h2>
                    <div className="serach_wrapper ">
                        <button className="text-left" data-bs-toggle="modal" data-bs-target="#form">
                            <div className="search_item_colum">
                                <p className="srlabel">FORM</p>
                                <div className="main_location_name">
                                    <h3>{from?.city}</h3>
                                </div>
                                <p className="airport_name">{from?.airport}</p>
                            </div>
                        </button>
                        <div className="modal fade" id="form" tabIndex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="form_search">
                                            <div className="ser_icon"><i className="fas fa-search" style={{ color: "#9b9a9a" }}></i>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="From"
                                                className="form_input"
                                                value={searchQueryFrom}
                                                onChange={(e) => setSearchQueryFrom(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="serch_list">
                                            <ul>
                                                {
                                                    filteredOrigins?.map((item, index) => {
                                                        return (
                                                            <li
                                                                className="ser_item"
                                                                key={index} onClick={() => handleOriginSelect(item)}
                                                                data-bs-dismiss="modal"
                                                            >
                                                                <div className="icon_plane">
                                                                    <i className="fas fa-plane" style={{ color: "#b0b0b0" }}></i>
                                                                </div>
                                                                <div className="airport_location">
                                                                    <h4>{item}</h4>
                                                                    {/* <div className="airport_name_area">
                                                                        <h6 className="nameport">Netaji Subhash Chandra Bose Airport</h6>
                                                                        <h6 className="country">India</h6>
                                                                    </div> */}
                                                                </div>

                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="swipesector" onClick={handleSwap}></div>

                        <button className="text-left" data-bs-toggle="modal" data-bs-target="#to">
                            <div className="search_item_colum">
                                <p className="srlabel">TO</p>
                                <div className="main_location_name">
                                    <h3>{to?.city}</h3>
                                </div>
                                <p className="airport_name">{to?.airport}</p>
                            </div>
                        </button>
                        <div className="modal fade" id="to" tabIndex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="form_search">
                                            <div className="ser_icon"><i className="fas fa-search" style={{ color: "#9b9a9a" }}></i>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="To"
                                                className="form_input"
                                                value={searchQueryTo}
                                                onChange={(e) => setSearchQueryTo(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="serch_list">
                                            <ul>
                                                {
                                                    filteredDestinations?.map((item, index) => {
                                                        return (
                                                            <li
                                                                className="ser_item"
                                                                key={index}
                                                                onClick={() => handleDestinationSelect(item)}
                                                                data-bs-dismiss="modal"
                                                            >
                                                                <div className="icon_plane">
                                                                    <i className="fas fa-plane" style={{ color: "#b0b0b0" }}></i>
                                                                </div>
                                                                <div className="airport_location">
                                                                    <h4>{item}</h4>
                                                                    {/* <div className="airport_name_area">
                                                                        <h6 className="nameport">Netaji Subhash Chandra Bose Airport</h6>
                                                                        <h6 className="country">India</h6>
                                                                    </div> */}
                                                                </div>

                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="search_item_colum">
                            <p className="srlabel">SHIPMENT DATE</p>
                            <div className="calender_area">
                                <div className="calendar">
                                    <label htmlFor="shipmentDate">
                                        <input
                                            name="shipmentDate"
                                            type="date"
                                            data-type="date"
                                            placeholder="Start Date"
                                            className="dateinput"
                                            value={formValues?.shipmentDate}
                                            onChange={handleChange}
                                        />

                                    </label>
                                </div>

                            </div>
                        </div>
                        <div className=" quantity_area">
                            <label htmlFor="quantity" className="form-label">QUANTITY</label>
                            <input
                                type="text"
                                className="form-control"
                                id="quantity"
                                placeholder="Enter Your Desired Quantity"
                                name='quantity'
                                value={formValues?.quantity}
                                onChange={handleChange}
                            // required
                            />
                        </div>
                        <div className="search_button_area">
                            <button onClick={searchFlight}><span><i className="fas fa-search" style={{ color: "#ffffff" }}></i></span> SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchSection