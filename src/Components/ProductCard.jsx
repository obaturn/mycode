import React from "react";
import "./card.css";

function ProductCard({ name, image, price }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
}

export default ProductCard;
