import { useState } from 'react'
import FoodList from '../component/food/foodlist'
import AddFood from '../component/food/AddFood'
import TransactionList from '../component/transaction/TransactionList'

function AlanRestoApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar">
        <div className="navbar__brand">
          <i className="bi bi-egg-fried navbar__icon"></i>
          <a className="navbar__title" href="#">Alan Resto</a>
        </div>

        <ul className="navbar__menu">
          <li className="navbar__item">Food</li>
          <li className="navbar__item navbar__item--active">Transaksi</li>
        </ul>
      </nav>

      <div className="content">
        <TransactionList />
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
