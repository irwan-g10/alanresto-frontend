import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import Card from "../../ui/Card";
import TransactionCheckout from "./TransactionCheckout";
import './TransactionList.css';
import { getAllFoods } from "../../../services/FoodServiews";
import AlertModal from "../modal/AlertModal";

function TransactionList() {
    const [isOpenCheckout, setIsOpenCheckout] = React.useState(false);
    const [isOpenAlert, setIsOpenAlert] = useState(false)
    const [foods, setFoods] = useState([])
    const [selectedFood, setSelectedFood] = useState([])
    const [loading, setLoading] = useState(true)
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        if (filteredFood && filteredFood.length > 0) {
            const total = filteredFood.reduce((acc, item) => acc + (item.totalPrice || 0), 0);
            setGrandTotal(total);
        }
    })

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
            acc[current.id] = { ...current, total: 1, totalPrice: current.price };

        }
        return acc;
    }, {}));

    const togglePopupCheckout = () => {
        setIsOpenCheckout(!isOpenCheckout);
    }
    const togglePopupAlert = () => {
        setIsOpenAlert(!isOpenAlert)
    }
    const onFoodClick = (item) => {
        setSelectedFood((prevFood) => [...prevFood, item]);
    }
    const handleClearFood = () => {
        setSelectedFood([])
    }

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
                <TransactionCheckout handleClearFood={handleClearFood} isOpenCheckout={togglePopupCheckout} isOpenAlert={togglePopupAlert} data={filteredFood} grandTotal={grandTotal} />

            </div>
            {isOpenCheckout && (
                <Modal isOpenCheckout={isOpenCheckout} onClose={togglePopupCheckout} data={filteredFood} grandTotal={grandTotal} />
            )}
            {isOpenAlert && (
                <AlertModal isOpenAlert={isOpenAlert} onClose={togglePopupAlert} data={filteredFood} />
            )}
        </>
    )
}

export default TransactionList;