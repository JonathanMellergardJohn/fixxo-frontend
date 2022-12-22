import React, { useState } from 'react'
import { useProductsContext } from '../hooks/useProductsContext';

const ProductForm = () => {
    const { dispatch } = useProductsContext();
    // states for products
    const [name, setName] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [price, setPrice] = useState('');
    // state for error
    const [err, setErr] = useState(null);
    // state for empty fields
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = {name, imageURL, description, category, rating, price};

        const response = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setErr(json.err);
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            // fields are reset to empty if product added successfully
            setName('');
            setImageURL('');
            setDescription('');
            setCategory('');
            setRating('');
            setPrice('');
            setErr(null);
            setEmptyFields([])
            console.log('new workout added', json);
            dispatch({type: 'CREATE_PRODUCT', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Product</h3>

            <label>Name:</label>
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name}
                // conditional class. If 'name' is included in emptyFields array,
                // class is set to 'error' which is handled by the .css file with a
                // red border.
                className={emptyFields.includes('name') ? 'error' : ''}
            />

            <label>Image URL:</label>
            <input 
                type="text" 
                onChange={(e) => setImageURL(e.target.value)}
                value={imageURL}
                className={emptyFields.includes('imageURL') ? 'error' : ''}
            />

            <label>Category:</label>
            <input 
                type="text" 
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className={emptyFields.includes('category') ? 'error' : ''}
            />

            <label>Description:</label>
            <input 
                type="text" 
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className={emptyFields.includes('description') ? 'error' : ''}
            />

            <label>Rating:</label>
            <input 
                type="number" 
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                className={emptyFields.includes('rating') ? 'error' : ''}
            />

            <label>Price:</label>
            <input 
                type="number" 
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className={emptyFields.includes('price') ? 'error' : ''}
            />
            <button>Add Product</button>
            {err && <div className='error'>{err}</div>}
        </form>
    )
}

export default ProductForm