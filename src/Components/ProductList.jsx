import React from "react";
import ProductCard from "./ProductCard";
import "./card.css";


function ProductList({ products }) {
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                />
            ))}
        </div>
    );
}

export default ProductList;
