import React from "react";
import Modal from "../modal/Modal";
import Card from "../../ui/Card";
import TransactionCheckout from "./TransactionCheckout";
import './TransactionList.css';

function TransactionList() {
    const [isOpen, setIsOpen] = React.useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="transaction">
                <div className="transaction__list">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="transaction__checkout">
                    <TransactionCheckout isOpen={togglePopup}/>
                </div>
            </div>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={togglePopup} />
            )}
        </>
    )
}

export default TransactionList;