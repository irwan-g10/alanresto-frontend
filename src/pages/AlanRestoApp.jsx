import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

function AlanRestoApp() {

  const { pathname } = useLocation();

  const isFoodPage = pathname === '/' || pathname === '/add-food';

  return (
    <>
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

      <div className="content">
        <Outlet />
      </div>
      <footer className="footer">
        <p className="footer__text">
          Alan Resto &copy; 2020 | Developed by Alan Creative
        </p>
      </footer>


    </>
  )
}

export default AlanRestoApp
