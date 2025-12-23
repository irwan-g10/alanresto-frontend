import React from "react";

function AddFood() {
    return (
        <div className="addfood food food__content">
            <h2 className="addfood__title">Tambahkan Menu</h2>

            <form className="addfood__form">
                <div className="addfood__field">
                    <label className="addfood__label" htmlFor="name">Nama</label>
                    <input className="addfood__input" type="text" id="name" />
                </div>

                <div className="addfood__field">
                    <label className="addfood__label" htmlFor="image">Gambar</label>
                    <input className="addfood__input" type="file" id="image" />
                </div>

                <div className="addfood__field">
                    <label className="addfood__label" htmlFor="price">Harga</label>
                    <input className="addfood__input" type="text" id="price" />
                </div>

                <div className="addfood__actions">
                    <button className="addfood__button" type="submit">
                        Simpan
                    </button>
                </div>
            </form>
        </div>

    );
}

export default AddFood;
