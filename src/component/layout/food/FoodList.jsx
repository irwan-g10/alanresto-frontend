import React from "react";
import { NavLink } from "react-router-dom";
import TableList from "../../ui/TableList";
import "./FoodList.css";

function FoodList() {

    const dummyData = [
        { id: 1, name: "Nasi Goreng", price: 15000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUN39vrKXIsD2wjodz8bKlGovEvE7PwIPjA&s" },
        { id: 2, name: "Mie Ayam", price: 12000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUN39vrKXIsD2wjodz8bKlGovEvE7PwIPjA&s" },
    ];

    return (
        <div className="food__container">
            <p className="food__title">Tambahkan menu yang ada di resto</p>

            <div className="food__content">
                <div className="food__add ">
                    <NavLink to="/add-food" className="btn">+ Tambah Menu</NavLink>
                </div>

                <TableList data={dummyData}/>
            </div>
        </div>
    );
}

export default FoodList;
