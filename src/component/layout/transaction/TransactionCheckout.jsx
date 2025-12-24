import React, { useEffect, useRef, useState } from "react";
import './TransactionCheckout.css';
import { useReactToPrint } from "react-to-print";

function TransactionCheckout({ handleClearFood, isOpenCheckout, isOpenAlert, data, grandTotal }) {
    const contentRef = useRef(null);



    const handlePrint = useReactToPrint({
        contentRef,
        documentTitle: 'Order_Receipt'
    })
    return (
        <div className="checkout__container">
            <div ref={contentRef} className="transaction__checkout">
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
                        <div>x{item.total}</div>
                        <p className="transaction__price">Rp {item.totalPrice}</p>
                    </div>
                ))}
            </div>
            <div className="transaction__checkout">



                <div className="checkout__button">
                    <button className="btn btn-clear" onClick={handleClearFood}>Clear Cart</button>
                </div>
                <div className="group-button">
                    <div className="checkout__button">

                        <button className="btn" onClick={isOpenAlert}>Save bills</button>
                    </div>
                    <div className="checkout__button">

                        <button className="btn" onClick={handlePrint}>print bills</button>
                    </div>
                </div>

                <div className="checkout__button">
                    <button className="btn" onClick={isOpenCheckout}>Charge Rp. {grandTotal}</button>
                </div>
            </div>
        </div>
    )
}
export default TransactionCheckout;