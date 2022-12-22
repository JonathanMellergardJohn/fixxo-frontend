import React, { useEffect } from 'react'
import { useProductsContext } from '../hooks/useProductsContext';
import ProductCard from '../components/ProductCard';

const FeaturedProductsSection = () => {
  // the reason this variable is declared here has to do with error 
  // discussed on line # 26.
  let featuredProducts;
  const { products, dispatch } = useProductsContext();

    useEffect(() => {
        const fetchProducts = async () => {
            // NOTE: the CORS problem is handled through adding "proxy": "http://localhost:4000"
            // in 'package.json' in the frontend. This should be handled differently way when 
            // app is deployed!
            const response = await fetch('/api/products');
            const json = await response.json();
    
            if (response.ok) {
                dispatch({type: 'SET_PRODUCTS', payload: json})
            }
        }

        fetchProducts();
    }, [])
    // This if-check is extremely bad and extremely annoying and just CRAP. I had to put this in, 
    // as React throws an error otherwise because 'products' is 'null' before products are fetched. 
    // My sense is that this has something to do with useEffect that I don't yet grasp.
    // The component re-renders several times, and I don't understand why.
    if(products) {
      featuredProducts = products.slice(0,8)
      console.log(featuredProducts);
    }
  return (
    <section className="featured-products-section bg--white">
      <div className="featured-products-container">
        <h2 className="featured-products-header">Featured Products</h2>
        <div className="grid">
          {
          featuredProducts && featuredProducts.map(product => <ProductCard key={product._id} product={product} />)
          }
        </div>
      </div>
    </section>
    
)
}

export default FeaturedProductsSection