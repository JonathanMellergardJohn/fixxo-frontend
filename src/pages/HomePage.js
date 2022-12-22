import React from 'react'
import FeaturedProductsSection from '../sections/FeaturedProductsSection'
import FooterSection from '../sections/FooterSection'
import ServiceInfoSection from '../sections/ServiceInfoSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import SpecialOfferOneSection from '../sections/SpecialOfferOneSection'
import SpecialOfferTwoSection from '../sections/SpecialOfferTwoSection'
import TopPicksNConsciousSection from '../sections/TopPicksNConsciousSection'

const HomePage = () => {

    return (
        <>
            <ShowcaseSection />
            <FeaturedProductsSection />
            <TopPicksNConsciousSection />
            <SpecialOfferOneSection />
            <SpecialOfferTwoSection />
            <ServiceInfoSection />
            <FooterSection />
        </>
    )
}

export default HomePage