import React from "react";
import Modal from "../modal/Modal";
import Card from "../../ui/Card";
import TransactionCheckout from "./TransactionCheckout";
import './TransactionList.css';

function TransactionList() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [food, setFood] = React.useState([]);

    const dummyData = [
        { id: 1, name: "Nasi Goreng", price: 15000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUN39vrKXIsD2wjodz8bKlGovEvE7PwIPjA&s" },
        { id: 2, name: "Mie Ayam", price: 12000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUN39vrKXIsD2wjodz8bKlGovEvE7PwIPjA&s" },
    ];

    const filteredFood = Object.values(food.reduce((acc, current) => {
        if (acc[current.id]) {
            // Jika ID sudah ada, tambah jumlah totalnya saja
            acc[current.id].total += 1;
        } else {
            // Jika ID belum ada, masukkan datanya dan set total = 1
            acc[current.id] = { ...current, total: 1 };
        }
        return acc;
    }, {}));
    console.log("Data di TransactionCheckout:", filteredFood);

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
                    <TransactionCheckout isOpen={togglePopup}  data={filteredFood}/>
                </div>
            </div>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={togglePopup} data={filteredFood} />
            )}
        </>
    )
}

export default TransactionList;