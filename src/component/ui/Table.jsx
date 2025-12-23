import React from "react";
import "./Table.css";
import TableItem from "./TableItem";

function Table() {

    const foods = [
        { id: 1, name: "Nasi Goreng", image: "Gambar1", price: 15000 },
        { id: 2, name: "Mie Goreng", image: "Gambar2", price: 12000 },
    ];

    return (
        <div className="table__container">
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
                    
                    {foods.map((food, index) => (
                        <TableItem
                            key={food.id}
                            number={index + 1}
                            name={food.name}
                            image={food.image}
                            price={food.price}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;