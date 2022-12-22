import React from 'react'
import ImgPamela from '../assets/images/pamelas-picks.svg'
import ImgArrivals from '../assets/images/img-new-arrivals.png'
import Banner from '../components/Banner'

const TopPicksNConsciousSection = () => {
  return (
    <section className="top-picks-n-conscious-section bg--white">
        <div className="top-picks-n-conscious-container">
            <Banner img={ImgPamela} headerText="Pamela Reif's Top Picks" btnColor="btn--dark" btnText="SHOP NOW"/>
            <Banner img={ImgArrivals} headerText="Let's Be Conscious" btnColor="btn--white" btnText="FLASH SALE"/>
        </div>
    </section>
  )
}

export default TopPicksNConsciousSection