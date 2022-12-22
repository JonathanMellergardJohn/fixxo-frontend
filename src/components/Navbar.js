import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <Link to='/products' >
                <h1>Products Page</h1>
            </Link>
        </div>
    </header>
    
  )
}

export default Navbar