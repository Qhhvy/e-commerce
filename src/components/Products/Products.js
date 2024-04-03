import React, { useState, useEffect } from "react";
import "./Products.css";
import PostForm from "../PostForm/PostForm"; // Import komponen formulir tambahan

const Products = (props) => {
    const url = "https://fakestoreapi.com/products";

    const [products, setProducts] = useState([]);

    const getDataProducts = async () => {
        const response = await fetch(url);            
        const dataProducts = await response.json();
        setProducts(dataProducts);
    }

    useEffect(() => {
        getDataProducts();
    }, []);

    // Fungsi untuk menambahkan produk baru ke dalam state produk
    const addNewProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    }
    
    return (
        <div className="konten">
            {/* Tampilkan formulir tambahan */}            
            {/* Tampilkan kartu untuk setiap produk */}
            {products.map((produk) => (
                <CardProducts
                    key={produk.id}
                    image={produk.image}
                    title={produk.title}
                    price={produk.price}
                    description={produk.description}
                />
            ))}
            <PostForm addNewProduct={addNewProduct} />
        </div>
    )
};

function CardProducts(props) {
    return (
        <div className="kartu">
            <div className="gambar-kartu">
                <img src={props.image} alt="foto-barang" width={200}/>
            </div>
            <div className="badan-kartu">
                <p style={{ color: "grey", fontSize: "20px", fontWeight: "bolder" }}>{props.title}</p>
                <p style={{ fontSize: "30px", color: "green", fontWeight: "bold" }}>$ {props.price}</p>
                <small style={{ color: "grey" }}>{props.description}</small><br/>
                <br/>
                <button onClick={() => alert("Berhasil dibeli")}>Beli</button>
            </div>
        </div>
    )
}

export default Products;
