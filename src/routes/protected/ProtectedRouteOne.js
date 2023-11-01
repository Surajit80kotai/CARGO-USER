import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRouteOne = () => {
    const token = true;
    // const token = JSON.parse(window.localStorage.getItem('token'));
    return (
        <>
            {
                token ? <Outlet /> : <Navigate to='/login' />
            }
        </>
    )
}

export default ProtectedRouteOne