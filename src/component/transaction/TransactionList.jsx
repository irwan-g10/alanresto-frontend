import React from "react";

function TransactionList() {
    const [isOpen, setIsOpen] = React.useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <div className="transaction">
                <div className="transaction__list">
                    <div className="transaction__item">
                        <img
                            src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/09/Resep-Nasi-Bakar-Ayam-Kemangi.jpg?fit=500%2C500&ssl=1"
                            alt="Nasi Goreng"
                            className="transaction__image"
                        />
                        <h4 className="transaction__name">Nasi Goreng</h4>
                        <p className="transaction__price">Rp 15.000</p>
                    </div>
                    <div className="transaction__item">
                        <img
                            src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/09/Resep-Nasi-Bakar-Ayam-Kemangi.jpg?fit=500%2C500&ssl=1"
                            alt="Nasi Goreng"
                            className="transaction__image"
                        />
                        <h4 className="transaction__name">Nasi Goreng</h4>
                        <p className="transaction__price">Rp 15.000</p>
                    </div>
                    <div className="transaction__item">
                        <img
                            src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/09/Resep-Nasi-Bakar-Ayam-Kemangi.jpg?fit=500%2C500&ssl=1"
                            alt="Nasi Goreng"
                            className="transaction__image"
                        />
                        <h4 className="transaction__name">Nasi Goreng</h4>
                        <p className="transaction__price">Rp 15.000</p>
                    </div>
                    <div className="transaction__item">
                        <img
                            src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/09/Resep-Nasi-Bakar-Ayam-Kemangi.jpg?fit=500%2C500&ssl=1"
                            alt="Nasi Goreng"
                            className="transaction__image"
                        />
                        <h4 className="transaction__name">Nasi Goreng</h4>
                        <p className="transaction__price">Rp 15.000</p>
                    </div>
                    <div className="transaction__item">
                        <img
                            src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/09/Resep-Nasi-Bakar-Ayam-Kemangi.jpg?fit=500%2C500&ssl=1"
                            alt="Nasi Goreng"
                            className="transaction__image"
                        />
                        <h4 className="transaction__name">Nasi Goreng</h4>
                        <p className="transaction__price">Rp 15.000</p>
                    </div>
                    <div className="transaction__item">
                        <img
                            src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/09/Resep-Nasi-Bakar-Ayam-Kemangi.jpg?fit=500%2C500&ssl=1"
                            alt="Nasi Goreng"
                            className="transaction__image"
                        />
                        <h4 className="transaction__name">Nasi Goreng</h4>
                        <p className="transaction__price">Rp 15.000</p>
                    </div>
                    <div className="transaction__item">
                        <img
                            src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/09/Resep-Nasi-Bakar-Ayam-Kemangi.jpg?fit=500%2C500&ssl=1"
                            alt="Nasi Goreng"
                            className="transaction__image"
                        />
                        <h4 className="transaction__name">Nasi Goreng</h4>
                        <p className="transaction__price">Rp 15.000</p>
                    </div>
                    <div className="transaction__item">
                        <img
                            src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/09/Resep-Nasi-Bakar-Ayam-Kemangi.jpg?fit=500%2C500&ssl=1"
                            alt="Nasi Goreng"
                            className="transaction__image"
                        />
                        <h4 className="transaction__name">Nasi Goreng</h4>
                        <p className="transaction__price">Rp 15.000</p>
                    </div>
                </div>
                <div className="transaction__checkout">
                    <div className="checkout__title">
                        <i class="bi bi-person-circle checkout__icon"></i>
                        <h1>Pesanan</h1>
                    </div>
                    <div className="checkout__item">
                        <img
                            src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/09/Resep-Nasi-Bakar-Ayam-Kemangi.jpg?fit=500%2C500&ssl=1"
                            alt="Nasi Goreng"
                            className="transaction__image"
                        />
                        <h4 className="transaction__name">Nasi Goreng</h4>
                        <div>x2</div>
                        <p className="transaction__price">Rp 15.000</p>
                    </div>
                    <div className="checkout__item">
                        <img
                            src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/09/Resep-Nasi-Bakar-Ayam-Kemangi.jpg?fit=500%2C500&ssl=1"
                            alt="Nasi Goreng"
                            className="transaction__image"
                        />
                        <h4 className="transaction__name">Nasi Goreng</h4>
                        <div>x2</div>
                        <p className="transaction__price">Rp 15.000</p>
                    </div>
                    <div className="checkout__item">
                        <img
                            src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/09/Resep-Nasi-Bakar-Ayam-Kemangi.jpg?fit=500%2C500&ssl=1"
                            alt="Nasi Goreng"
                            className="transaction__image"
                        />
                        <h4 className="transaction__name">Nasi Goreng</h4>
                        <div>x2</div>
                        <p className="transaction__price">Rp 15.000</p>
                    </div>
                    <div className="checkout__item">
                        <img
                            src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/09/Resep-Nasi-Bakar-Ayam-Kemangi.jpg?fit=500%2C500&ssl=1"
                            alt="Nasi Goreng"
                            className="transaction__image"
                        />
                        <h4 className="transaction__name">Nasi Goreng</h4>
                        <div>x2</div>
                        <p className="transaction__price">Rp 15.000</p>
                    </div>

                    <div className="checkout__button">
                        <button className="btn btn-clear">Clear Cart</button>
                    </div>
                    <div className="group-button">
                        <div className="checkout__button">

                            <button className="btn">Save bills</button>
                        </div>
                        <div className="checkout__button">

                            <button className="btn">print bills</button>
                        </div>
                    </div>

                    <div className="checkout__button">

                        <button className="btn" onClick={togglePopup}>charge</button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="popup__overlay">
                    <div className="popup__content">
                        <h2>Detail Pesanan </h2>
                        <div className="popup__content-wrapped">
                            <div className="popup__list">
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
                                    </tbody>

                                </table>
                            </div>
                        </div>
                        <div className="popup__payment">
                            uang pembeli (Rp)
                            <div>
                                <input type="text" />
                            </div>
                            <div>

                            <button onClick={togglePopup}>close</button>
                            <button>Pay</button>
                            </div>
                            <div>
                                Kembalian: 
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TransactionList;