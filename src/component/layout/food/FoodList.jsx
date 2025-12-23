import React from "react";
import { NavLink } from "react-router-dom";
import TableList from "../../ui/TableList";
import "./FoodList.css";

function FoodList() {
    return (
        <div className="food__container">
            <p className="food__title">Tambahkan menu yang ada di resto</p>

            <div className="food__content">
                <div className="food__add ">
                    <NavLink to="/add-food" className="btn">+ Tambah Menu</NavLink>
                </div>

                <TableList />
            </div>
        </div>
    );
}

export default FoodList;
