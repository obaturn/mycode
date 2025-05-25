import React, { useState } from "react";
import UploadImage from "./UploadImage";
import { useNavigate } from "react-router-dom";
import pics from "./Assets/use1.PNG";
import  "./uploadProduct.css";

function UploadProduct({ addProduct }) {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();

    const handleClickClose = () => {
        navigate("/");
    };


    const handleUpload = (url) => {
        setImageUrl(url);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!productName || !price || !imageUrl) {
            alert("Please fill all fields before submitting.");
            return;
        }


        const newProduct = { name: productName, price, image: imageUrl };
        addProduct(newProduct); // Update product list
        alert("Product uploaded successfully!");

        // Reset form fields
        setProductName("");
        setPrice("");
        setImageUrl("");
    };

    return (
        <div className="upload-product-container">
            {/* Close Button */}
            <button className="close-btn" onClick={handleClickClose}>X</button>

            {/* Header */}
            <h1 className="text">Hi, Welcome To Amazon! Please Upload Your Product</h1>

            {/* Product Image */}
            <img src={pics} alt="Seller illustration" className="upload-product-image" />

            {/* Upload Form */}
            <h2 className="upload-title">Upload A New Product</h2>
            <form onSubmit={handleSubmit} className="upload-form">
                <input
                    type="text"
                    placeholder="Enter Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price ($)"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                {/* Image Upload Component */}
                <UploadImage onUpload={handleUpload} />

                <button type="submit">Upload Product</button>
            </form>
        </div>
    );
}

export default UploadProduct;
