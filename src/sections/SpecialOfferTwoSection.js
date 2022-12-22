import React, {useEffect} from 'react'
import Btn from '../components/Btn'
import ProductCard from '../components/ProductCard'
import { useProductsContext } from '../hooks/useProductsContext';

const SpecialOfferTwoSection = () => {

  let offerProducts;
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
    // This if-check is extremely bad and extremely annoying. I had to put this in, 
    // as React throws an error otherwise because 'products' is apparently 'null'. 
    // My sense is that this has something to do with useEffect that I don't yet grasp.
    // The component re-renders several times, and I don't understand why.
    if(products) {
      offerProducts = products.slice(12, 16)
      console.log(offerProducts);
    }

  return (
    <section className="special-offer-1-section bg--white">
        <div className="grid grid--2-by-2">
          {
          offerProducts && offerProducts.map(product => <ProductCard product={product} />)
          }
        </div>
        <div className="special-offer">
            <h2 className="special-offer__header">2 FOR $29</h2>
            <Btn btnText="FLASH SALE" btnColor="btn--white"/>
        </div>
    </section>
  )
}

export default SpecialOfferTwoSection