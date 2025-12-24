import React from "react";
import "./TableList.css";
import TableItem from "./TableItem";

function TableList({ data }) {

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

                    {data.map((food, index) => (
                        <TableItem
                            key={food.id}
                            number={index + 1}
                            name={food.total ? `${food.name} x${food.total}` : food.name}
                            image={food.image}
                            price={food.total ? food.price * food.total : food.price}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableList;