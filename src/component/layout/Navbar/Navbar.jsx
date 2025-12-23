import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const { pathname } = useLocation();

    const isFoodPage = pathname === '/' || pathname === '/add-food';

    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <i className="bi bi-egg-fried navbar__icon"></i>
                <NavLink to="/" className="navbar__title">
                    Alan Resto
                </NavLink>
            </div>

            <ul className="navbar__menu">
                <NavLink
                    to="/"
                    className={
                        isFoodPage
                            ? 'navbar__item navbar__item--active'
                            : 'navbar__item'
                    }
                >
                    Food
                </NavLink>
                <NavLink
                    to="/transactions"
                    className={
                        isFoodPage
                            ? 'navbar__item'
                            : 'navbar__item navbar__item--active'
                    }
                >
                    Transactions
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;