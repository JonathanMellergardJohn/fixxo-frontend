import React from 'react'
import Btn from './Btn'

const Banner = ({headerText, img, btnColor, btnText}) => {
  return (
    <div className="banner banner--w-img">
                <img className="banner__img" src={img} alt="" />
                <div className="banner__content-container">
                    <h2 className="banner__header">{headerText}</h2>
                    <p className="banner__text">Sed ut perspiciatis unde omnis iste natus 
                        error sit voluptatem accusantium doloremque laudantium, totam 
                        rem apriam eaque ipsa quae ab illo inventore.
                    </p>
                    <Btn btnColor={btnColor} btnText={btnText} />
                </div>
            </div>
  )
}

export default Banner