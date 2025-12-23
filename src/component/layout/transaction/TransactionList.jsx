import React from "react";
import Modal from "../modal/Modal";
import Card from "../../ui/Card";
import TransactionCheckout from "./TransactionCheckout";
import './TransactionList.css';

function TransactionList() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [food, setFood] = React.useState([]);

    const dummyData = [
        { id: 1, name: "Nasi Goreng", price: 15000, image: "url_gambar" },
        { id: 2, name: "Mie Ayam", price: 12000, image: "url_gambar" },
    ];

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const onFoodClick = (selectedFood) => {
        setFood((prevFood) => [...prevFood, selectedFood]);
        console.log("Makanan ditambahkan:", selectedFood);
    }

    return (
        <>
        
            <div className="transaction">
                <div className="transaction__list">
                    {dummyData.map((item) => (
                        <Card 
                            key={item.id} 
                            data={item} 
                            onClick={() => onFoodClick(item)} 
                        />
                    ))}
                </div>
                <div className="transaction__checkout">
                    <TransactionCheckout isOpen={togglePopup}  data={food}/>
                </div>
            </div>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={togglePopup} />
            )}
        </>
    )
}

export default TransactionList;