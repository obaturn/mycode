import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import DisplayProducts from "./Components/DisplayProducts";
import ProductList from "./Components/ProductList";
import TopNav from "./Components/TopNav";
import SignUpPage from "./Components/SignUpPage";
import UploadProduct from "./Components/UploadProduct";
import book1 from "./Components/Assets/book1.PNG";
import fan1 from "./Components/Assets/fan1.PNG";
import headPhone from "./Components/Assets/headPhone.PNG";
import food1 from "./Components/Assets/food 1.PNG";
import jersey1 from "./Components/Assets/jersey1.PNG";
import watch1 from "./Components/Assets/watch1.PNG";
import shoe6 from "./Components/Assets/shoe6.PNG";
import headPhones from "./Components/Assets/headPhone2.PNG"
import iphone from "./Components/Assets/iphone.PNG";
import laptop from "./Components/Assets/laptop.PNG";
import fridge from "./Components/Assets/fridge.PNG";
import microwave from "./Components/Assets/mcrowave.PNG";
import Section from "./Components/Section"
import Careers from "./Components/Careers";
import AboutUs from "./Components/AboutUs";
import "./App.css";

function App() {
    const location = useLocation();// Get current route

    const [products, setProducts] = useState([
        { name: "Book", image: book1, price: 15 },
        { name: "Fan", image: fan1, price: 40 },
        { name: "Headphone", image: headPhone, price: 30 },
        { name: "Food Pack", image: food1, price: 20 },
        { name: "Jersey", image: jersey1, price: 35 },
        { name: "Watch", image: watch1, price: 50 },
        { name: "Shoes", image: shoe6, price: 45 },
        {name: "headphone", image: headPhones, price: 60 },
        {name: "laptop", image: laptop, price: 70 },
        {name: "iphone", image: iphone, price: 80 },
        {name:"fridge", image: fridge, price: 90 },
        {name: "microwave", image: microwave, price: 90 },
    ]);


    const addProduct = (newProduct) => {
        setProducts((prevProducts) => [newProduct, ...prevProducts]);
    };


    const hideTopNav
        = location.pathname === "/signup" ||
        location.pathname === "/upload-product"
    ||location.pathname==="/Careers"
    ||location.pathname==="/AboutUs";

    return (
        <div>
            {/* Conditionally render TopNav */}
            {!hideTopNav && <TopNav />}

            {/* Define the routes */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <h1 className="text" style={{
                                textAlign: "center",
                                color: "purple",
                                fontSize: "32px",
                                marginTop: "20px",
                                letterSpacing: "1px"
                            }}>
                                Welcome to Our E-Commerce Store
                            </h1>
                            <DisplayProducts />
                            <ProductList products={products} />
                            <Section  />
                        </>
                    }


                />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/upload-product" element={<UploadProduct addProduct={addProduct} />} />
                <Route path="/Careers" element={<Careers />} />
                <Route path="/AboutUs" element={<AboutUs />} />
            </Routes>
        </div>
    );
}

// Wrapping App inside Router
export default function WrappedApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}
