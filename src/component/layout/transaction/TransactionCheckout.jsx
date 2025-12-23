import React from "react";
import './TransactionCheckout.css';

function TransactionCheckout({ isOpen, data }) {
    console.log("Data di TransactionCheckout:", data);
    return (
        <div className="checkout__container">
            <div className="checkout__title">
                <i className="bi bi-person-circle checkout__icon"></i>
                <h1>Pesanan</h1>
            </div>
            {data.map((item, index) => (
                <div className="checkout__item" key={index}>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="transaction__image"
                    />
                    <h4 className="transaction__name">{item.name}</h4>
                    <div>x2</div>
                    <p className="transaction__price">Rp {item.price.toLocaleString()}</p>
                </div>
            ))}


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