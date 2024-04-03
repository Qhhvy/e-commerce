import React, { useState } from "react";
import "./PostForm.css"
import axios from "axios";
import Gambar from "../../Image/undraw_Shopping_re_hdd9.png";

const PostForm = ({ addNewProduct }) => { // Terima addNewProduct sebagai prop
    const url = "https://fakestoreapi.com/products";

    const [data, setData] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
        category: "",
    });

    const handleChange = (e) => {
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(url, {
            title: data.title,
            price: data.price,
            description: data.description,
            image: data.image,
            category: data.category,
        })
        .then((response) => {
            // Tambahkan produk baru ke state menggunakan fungsi yang diteruskan dari props
            addNewProduct(response.data);
            // Reset formulir setelah menambahkan produk
            setData({
                title: "",
                price: "",
                description: "",
                image: "",
                category: "",
            });
        });
    };

    return (
        <div className="kontener">
            <section className="form">
                <div className="form-left">
                    <img src={Gambar} alt="movie-img" className="form-image" style={{ marginRight: "2rem" }}/>
                </div>
                <div className="form-right">
                    <h1 className="form-title">Add Product</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-inputgroup">
                            <label htmlFor="title" className="form-label">Nama</label>
                            <input type="text" className="form-input" id="title" onChange={(e) => handleChange(e)} value={data.title}/>
                        </div>
                        <div className="form-inputgroup">
                            <label htmlFor="price" className="form-label">Harga</label>
                            <input type="number" min={0} className="form-input" id="price" onChange={(e) => handleChange(e)} value={data.price}/>
                        </div>
                        <div className="form-inputgroup">
                            <label htmlFor="description" className="form-label">Deskripsi</label>
                            <input type="text" className="form-input" id="description" onChange={(e) => handleChange(e)} value={data.description}/>
                        </div>
                        <div className="form-inputgroup">
                            <label htmlFor="image" className="form-label">Gambar</label>
                            <input type="text" className="form-input" id="image" placeholder="https://...." onChange={(e) => handleChange(e)} value={data.image}/>
                        </div>
                        <div className="form-inputgroup">
                            <label htmlFor="category" className="form-label">Kategori</label>
                            <input type="text" className="form-input" id="category" onChange={(e) => handleChange(e)} value={data.category}/>
                        </div>
                        <button className="form-button">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default PostForm;
