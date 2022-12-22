import React from 'react';
import { useEffect } from 'react';
import { useProductsContext } from '../hooks/useProductsContext';

// components
import ProductDetails from '../components/ProductDetails';
import ProductForm from '../components/ProductForm';

const ProductsPage = () => {
    const { products, dispatch } = useProductsContext();

    useEffect(() => {
        const fetchProducts = async () => {
            // NOTE: the CORS problem is handled through adding "proxy": "http://localhost:4000"
            // in 'package.json' in the frontend. This should be handled differently when 
            // app is deployed!
            const response = await fetch('/api/products');
            const json = await response.json();
    
            if (response.ok) {
                dispatch({type: 'SET_PRODUCTS', payload: json})
            }
        }

        fetchProducts();
    }, [])

    return (
    <div className='home-page'>
        <div className="products">
            {products && products.map((product) => (
                <ProductDetails key={product._id} product={product} />
            ))}
        </div>
        <ProductForm />
    </div>
    )
}

export default ProductsPage