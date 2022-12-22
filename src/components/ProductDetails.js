import React from 'react';
import { useProductsContext } from '../hooks/useProductsContext';

const ProductDetails = ( { product }) => {
  const { dispatch } = useProductsContext();
  const handleClick = async () => {
    const response = await fetch('/api/products/' + product._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_PRODUCT', payload: json})
    }
  }

  return (
    <div className='product-details'>
        <img src={product.imageURL} alt={product.name} />
        <h4>{product.name}</h4>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Rating:</strong> {product.rating}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default ProductDetails