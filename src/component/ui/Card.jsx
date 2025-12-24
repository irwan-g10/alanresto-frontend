import React from "react";
import './Card.css';

function Card({ data, onClick }) {
    return (
        <div className="card__item" onClick={onClick}>
            <img
                src={data.image} alt={data.name}
                className="card__image"
            />
            <h4 className="card__name">{data.name}</h4>
            <p className="card__price">Rp {data.price.toLocaleString()}</p>
        </div>
    )
}

export default Card;