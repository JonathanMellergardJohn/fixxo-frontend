import React from 'react'
import ImgLeft from '../assets/images/img-showcase-left.png'
import Btn from '../components/Btn'

const ShowcaseSection = () => {
  return (
    <section className="showcase-section bg--grey-gradient">
        <div className="showcase-container">
            <img className="showcase-img" src={ImgLeft} alt="" />
            <div className="showcase-content">
                <h2 className="showcase-header">SALE UP to 50% off</h2>
                <p className="showcase-text">Online shopping free home delivery over $100</p>
                <Btn btnColor="btn--theme" btnText="SHOP NOW"/>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection