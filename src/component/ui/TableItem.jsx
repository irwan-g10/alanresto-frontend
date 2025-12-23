// src/features/food/components/TableItem.jsx
import React from "react";
import "./TableItem.css";

function TableItem({ number, name, image, price }) {
  return (
    <tr>
      <td>{number}</td>
      <td>{name}</td>
      <td>
        {image}
      </td>
      <td>Rp {price.toLocaleString()}</td>
    </tr>
  );
}

export default TableItem;