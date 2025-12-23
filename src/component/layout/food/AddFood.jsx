import React, { useState } from "react";
import "./AddFood.css";
import { storeFood } from "../../../services/FoodServiews";

function AddFood() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name,price,image)

        const formData = new FormData()
        formData.append('name', name);
        formData.append('price', price);
        formData.append('image', image);

        try {
            const response = await storeFood(formData);
            console.log("Response Laravel:", response.data);
            alert(response.data.message);
        } catch {
            console.error("Gagal simpan:", error.response?.data);
            alert("Terjadi kesalahan, cek konsol");
        }

    }

    return (
        <div className="addfood_container">
            <h2 className="addfood__title">Tambahkan Menu</h2>

            <form className="addfood__form" onSubmit={handleSubmit}>
                <div className="addfood__field">
                    <label className="addfood__label" htmlFor="name">Nama</label>
                    <input className="addfood__input" type="text" id="name"onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="addfood__field">
                    <label className="addfood__label">Gambar</label>

                    <div className="upload-wrapper">
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        <div className="upload-box">
                            <i className="bi bi-cloud-arrow-up"></i>
                            <p>drag and drop a file here or click</p>
                        </div>
                    </div>
                </div>

                <div className="addfood__field">
                    <label className="addfood__label" htmlFor="price">Harga</label>
                    <div className="input-wrapper">
                        <p>Rp.</p>
                        <input className="addfood__input" type="text" id="price" onChange={(e) => setPrice(e.target.value)} />
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
