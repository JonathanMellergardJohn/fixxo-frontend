import React from 'react'
import ServiceInfo from '../components/ServiceInfo'

const ServiceInfoSection = () => {
  return (
    <section class="service-info-section bg--white">
    <div class="service-info-line-container">
        <hr />
    </div>
    <div class="service-info-content">
        <h2 class="service-info-header">Click to learn more about our service</h2>
        <div class="service-info-links-collection">
            <ServiceInfo icon="fa-regular fa-phone" headerText="Customer Support" pText="Village did removed enjoyed explain talking." />
            <ServiceInfo icon="fa-regular fa-credit-card" headerText="Secured Payment" pText="Village did removed enjoyed explain talking." />
            <ServiceInfo icon="fa-regular fa-truck" headerText="Free Home Delivery" pText="Village did removed enjoyed explain talking." />
            <ServiceInfo icon="fa-regular fa-truck-plane" headerText="30 Day Reuters" pText="Village did removed enjoyed explain talking." />      
        </div>
    </div>
</section>
  )
}

export default ServiceInfoSection