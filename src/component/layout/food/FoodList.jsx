import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TableList from "../../ui/TableList";
import "./FoodList.css";
import { getAllFoods } from "../../../services/FoodServiews";

function FoodList() {
    const [foods, setFoods] = useState([])
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


    console.log(foods)

    // const dummyData = [
    //     { id: 1, name: "Nasi Goreng", price: 15000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUN39vrKXIsD2wjodz8bKlGovEvE7PwIPjA&s" },
    //     { id: 2, name: "Mie Ayam", price: 12000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUN39vrKXIsD2wjodz8bKlGovEvE7PwIPjA&s" },
    // ];

    return (
        <div className="food__container">
            <p className="food__title">Tambahkan menu yang ada di resto</p>

            <div className="food__content">
                <div className="food__add ">
                    <NavLink to="/add-food" className="btn">+ Tambah Menu</NavLink>
                </div>

                <TableList data={foods} />
            </div>
        </div>
    );
}

export default FoodList;
