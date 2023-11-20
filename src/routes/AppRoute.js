import React from 'react';
import Navbar from '../components/common/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Home from '../pages/Home';
import Payment from '../pages/Payment';
import Booknow from '../pages/Booknow';
import Orderhistory from '../components/core/profile/Orderhistory';
import SearchResults from '../pages/SearchResults';
import ProtectedRouteOne from './protected/ProtectedRouteOne';
// import Test from '../../Test';

const AppRoute = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route element={<ProtectedRouteOne />}>
                    <Route path='/' element={<Home />} exact />
                </Route>
                <Route path='/payment' element={<Payment />} />
                <Route path='/booknow' element={<Booknow />} />
                <Route path='/orderhistory' element={<Orderhistory />} />
                <Route path='/serchresult' element={<SearchResults />} />
                {/* <Route path='/test' element={<Test />} /> */}
            </Routes>
            <Footer />
        </>
    )
}

export default AppRoute;