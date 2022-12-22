import React from 'react'
import { NavLink } from 'react-router-dom'
import RoundLink from '../components/RoundLink'

const Header = ({backgroundcolor}) => {
  return (
    <>
    <header className={"header-section " + backgroundcolor}>
        <nav className="header-container">
            <h1 className="header-logo">Fixxo.</h1>
            <div className="header-links-container">
                <RoundLink link="/search" icon="fa-regular fa-magnifying-glass" />
                <RoundLink link="/compare" icon="fa-regular fa-repeat" />
                <RoundLink link="/wishlist" icon="fa-regular fa-heart" />
                <RoundLink link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
            </div>
            <input className="hamburger-menu__checkbox" type="checkbox" id="hamburger-menu__checkbox"/>
            <label className="hamburger-menu__hamburger" htmlFor="hamburger-menu__checkbox"><span className="hamburger-menu__hamb-line"></span></label>
            <nav className="hamburger-menu__dropdown-body">
                <ul className="hamburger-menu__menu-list">
                    <li><NavLink className="hamburger-menu__list-item" to="/">Home</NavLink></li>
                    <li><NavLink className="hamburger-menu__list-item" to="/categories">Categories</NavLink></li>
                    <li><NavLink className="hamburger-menu__list-item" to="/products">Products</NavLink></li>
                    <li><NavLink className="hamburger-menu__list-item" to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </nav>
    </header>
    <div className='header-space-adjust'></div>
    </>
  )
}

export default Header