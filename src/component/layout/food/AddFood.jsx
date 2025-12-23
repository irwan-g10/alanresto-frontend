import React, { useState } from "react";
import "./AddFood.css";

function AddFood() {

    return (
        <div className="addfood_container">
            <h2 className="addfood__title">Tambahkan Menu</h2>

            <form className="addfood__form">
                <div className="addfood__field">
                    <label className="addfood__label" htmlFor="name">Nama</label>
                    <input className="addfood__input" type="text" id="name" />
                </div>

                <div className="addfood__field">
                    <label className="addfood__label">Gambar</label>

                    <div className="upload-wrapper">
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                        />
                        <div  className="upload-box">
                            <i class="bi bi-cloud-arrow-up"></i>
                            <p>drag and drop a file here or click</p>
                        </div>
                    </div>
                </div>

                <div className="addfood__field">
                    <label className="addfood__label" htmlFor="price">Harga</label>
                    <div className="input-wrapper">
                        <p>Rp.</p>
                    <input className="addfood__input" type="text" id="price" />
                    </div>
                </div>

                <div className="addfood__action">
                    <button className="btn" type="submit">
                        Simpan
                    </button>
                </div>
            </form>
        </div>

    );
}

export default AddFood;
