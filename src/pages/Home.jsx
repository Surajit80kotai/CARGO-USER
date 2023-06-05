import React from 'react'
import SearchSection from '../components/core/home/SearchSection'
import ExclusiveOffer from '../components/core/home/ExclusiveOffer'
import OfferBottom from '../components/core/home/OfferBottom'
import WhyChooseUs from '../components/core/home/WhyChooseUs'
import GetStarted from '../components/core/home/GetStarted'

const Home = () => {
    return (
        <>
            {/* Search Section start */}
            <SearchSection />
            {/* Search Section end */}

            {/* Exclusive Offer start */}
            <ExclusiveOffer />
            {/* Exclusive Offer end */}

            {/* Offer bottom start */}
            <OfferBottom />
            {/* Offer bottom end */}

            {/* Why chose us start */}
            <WhyChooseUs />
            {/* Why chose us end */}

            {/* Get started start */}
            <GetStarted />
            {/* Get started end */}
        </>
    )
}

export default Home