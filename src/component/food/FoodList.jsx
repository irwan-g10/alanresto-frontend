import React from "react";
import { NavLink } from "react-router-dom";

function FoodList() {
    return (
        <div className="food__container">
            <p className="food__title">Tambahkan menu yang ada di resto</p>

            <div className="food__content">
                <div className="food__add ">

                    <NavLink to="/add-food" className="btn">+ Tambah Menu</NavLink>
                </div>
                {/* <button className="food__add">+ Tambah Menu</button> */}

                <div className="food__table">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nama</th>
                                <th>Foto</th>
                                <th>Harga</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nasi Goreng</td>
                                <td>gambar</td>
                                <td>15000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Nasi Goreng</td>
                                <td>gambar</td>
                                <td>15000</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nasi Goreng</td>
                                <td>gambar</td>
                                <td>15000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Nasi Goreng</td>
                                <td>gambar</td>
                                <td>15000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default FoodList;
