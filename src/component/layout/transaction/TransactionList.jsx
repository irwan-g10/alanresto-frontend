import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import Card from "../../ui/Card";
import TransactionCheckout from "./TransactionCheckout";
import './TransactionList.css';
import { getAllFoods } from "../../../services/FoodServiews";

function TransactionList() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [foods, setFoods] = useState([])
    const [selectedFood, setSelectedFood] = useState([])
    const [loading, setLoading] = useState(true)

    const loadData = async () => {
        try {
            const response = await getAllFoods();
            setFoods(response.data.data)
        } catch {
            alert('gagal mengambil data')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData()
    }, [])


    const filteredFood = Object.values(selectedFood.reduce((acc, current) => {
        if (acc[current.id]) {
            // Jika ID sudah ada, tambah jumlah totalnya saja
            acc[current.id].total += 1;
            acc[current.id].totalPrice = acc[current.id].total * acc[current.id].price;
        } else {
            // Jika ID belum ada, masukkan datanya dan set total = 1
            acc[current.id] = { ...current, total: 1, totalPrice: current.price};
            
        }
        return acc;
    }, {}));

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const onFoodClick = (item) => {
        setSelectedFood((prevFood) => [...prevFood, item]);
        console.log("Makanan ditambahkan:", item);
    }
    console.log(selectedFood)

    return (
        <>
            <div className="transaction">
                <div className="transaction__list">
                    {foods.map((item) => (
                        <Card
                            key={item.id}
                            data={item}
                            onClick={() => onFoodClick(item)}
                        />
                    ))}
                </div>
                <div className="transaction__checkout">
                    <TransactionCheckout isOpen={togglePopup} data={filteredFood} />
                </div>
            </div>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={togglePopup} data={filteredFood} />
            )}
        </>
    )
}

export default TransactionList;