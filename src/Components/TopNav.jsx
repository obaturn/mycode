import React, { useState } from "react";
import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import pictures from "./Assets/amazon1.PNG";
import "./TopNavBar.css";


function TopNav() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbarClass">
                <div className="Pics">
                    <img src={pictures} alt="Amazon Logo" className="amazon-logo" />
                    <h2 className="text">Deliver <br /> To <br /> Nigeria</h2>
                </div>

                <div className="search-container">
                    <input type="text" className="search" placeholder="Search for products"/>
                    <button className="search-button">
                        <FaSearch/>
                    </button>

                    <span className="Sign" onClick={() => navigate("/signup")}>
                        Sign Up <br/> Now
                    </span>
                </div>

                <div className="menu-container">
                    <button className="upload-button" onClick={() => navigate("/upload-product")}>
                        Upload Product
                    </button>
                    <FaBars className="menu-icon"/>

                    <h2 className="logo">E-STORE</h2>
                    <FaShoppingCart className="cart-icon"/>

                </div>
            </nav>
        </>
    );
}

export default TopNav;
