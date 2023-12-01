import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRouteThree = () => {
    // getting encryptedBookingData
    const encryptedBookingData = window.sessionStorage.getItem("bhPNQreINf");
    // getting encryptedFlightData
    const encryptedFlightData = window.sessionStorage.getItem("MmPLHcYiqG");
    const location = useLocation();

    return (
        <>
            {
                (encryptedBookingData && encryptedFlightData) ? <Outlet /> : <Navigate to={`/`} state={{ from: location.pathname }} replace />
            }
        </>
    )
}

export default ProtectedRouteThree