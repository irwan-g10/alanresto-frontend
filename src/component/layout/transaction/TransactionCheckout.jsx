import React from "react";
import './TransactionCheckout.css';

function TransactionCheckout({ isOpen }) {
    return (
        <div className="checkout__container">
            <div className="checkout__title">
                <i class="bi bi-person-circle checkout__icon"></i>
                <h1>Pesanan</h1>
            </div>
            <div className="checkout__item">
                <img
                    src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/09/Resep-Nasi-Bakar-Ayam-Kemangi.jpg?fit=500%2C500&ssl=1"
                    alt="Nasi Goreng"
                    className="transaction__image"
                />
                <h4 className="transaction__name">Nasi Goreng</h4>
                <div>x2</div>
                <p className="transaction__price">Rp 15.000</p>
            </div>
            <div className="checkout__button">
                <button className="btn btn-clear">Clear Cart</button>
            </div>
            <div className="group-button">
                <div className="checkout__button">

                    <button className="btn">Save bills</button>
                </div>
                <div className="checkout__button">

                    <button className="btn">print bills</button>
                </div>
            </div>

            <div className="checkout__button">
                <button className="btn" onClick={isOpen}>charge</button>
            </div>
        </div>
    )
}
export default TransactionCheckout;