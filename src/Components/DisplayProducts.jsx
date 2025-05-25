import React, { useState, useEffect } from "react";
import book1 from "./Assets/book1.PNG";
import fan2 from "./Assets/fan2.PNG";
import headPhone from "./Assets/headPhone.PNG";
import food from "./Assets/food 1.PNG";
import jersey from "./Assets/jersey1.PNG";
import watch1 from "./Assets/watch1.PNG";
import shoe6 from "./Assets/shoe6.PNG";
import "./Display.css";

const products = [book1, fan2, headPhone, food, jersey, watch1, shoe6];
const orderText = ["Order Now!", "Get Yours Today!", "Limited Offer!"];

function DisplayProducts() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % products.length);
            setTextIndex((prev) => (prev + 1) % orderText.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="featured-container">
            <img src={products[currentIndex]} alt="Product" className="animated-product" />
            <h2 className="order-text">{orderText[textIndex]}</h2>
        </div>
    );
}

export default DisplayProducts;
