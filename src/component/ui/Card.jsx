import React from "react";
import './Card.css';

function Card() {
    return (
        <div className="card__item">
            <img
                src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/09/Resep-Nasi-Bakar-Ayam-Kemangi.jpg?fit=500%2C500&ssl=1"
                alt="Nasi Goreng"
                className="card__image"
            />
            <h4 className="card__name">Nasi Goreng</h4>
            <p className="card__price">Rp 15.000</p>
        </div>
    )
}

export default Card;