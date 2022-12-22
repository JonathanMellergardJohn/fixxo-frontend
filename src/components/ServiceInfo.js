import React from 'react'

const ServiceInfo = ({headerText, pText, icon}) => {
  return (
    <div className="service-info-link-container">
        <a href="#" className="round-link"><i className={icon}></i></a>
        <h3 className="service-info-link-header">{headerText}</h3>
        <p className="service-info-link-text">{pText}</p>
    </div>
  )
}
// "fa-regular fa-phone"
export default ServiceInfo