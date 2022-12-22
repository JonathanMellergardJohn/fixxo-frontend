import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({product}) => {

  return (
    <div className="product-card"> 
        
        <div className="product-card__img">
        <div className="product-card__img-container" ><img src={product.imageURL} alt={product.name} /></div>    
            <div className="product-card__links">
                <button className="round-link round-link--f-product-card"><i className="round-link__icon fa-regular fa-repeat"></i></button>
                <button className="round-link round-link--f-product-card"><i className="round-link__icon fa-regular fa-heart"></i></button>
                <button className="round-link round-link--f-product-card"><i className="round-link__icon fa-regular fa-bag-shopping"></i></button>
            </div>
            <NavLink to={`/product/${product._id}`} className="product-card__btn">QUICK VIEW</NavLink>
        </div>                
        <div className="product-card__content-container">
            <p className="product-card__category">{product.category}</p>
            <h3 className="product-card__product-name">{product.name}</h3>
            <div className="product-card__costomer-rating">
                <i className="fa-sharp fa-solid fa-star-sharp"></i>
                <i className="fa-sharp fa-solid fa-star-sharp"></i>
                <i className="fa-sharp fa-solid fa-star-sharp"></i>
                <i className="fa-sharp fa-solid fa-star-sharp"></i>
                <i className="fa-sharp fa-solid fa-star-sharp"></i>
            </div>
            <div className="product-card__prices">
                <p className="product-card__old-price product-card__old-price--none">{product.oldPrice}</p>
                <p className="product-card__current-price">${product.price}.00 </p>
            </div>
        </div> 
    </div>   
  )
}

export default ProductCard