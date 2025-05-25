import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signing.css";

function SignUpPage() {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate("/");
    };

    return (
        <div className="signup-modal">
            <div className="signup-container">
                <button className="close-button" onClick={handleClose}>X</button>
                <h1>Sign Up</h1>
                <h2>Welcome To Our Sign Up Page</h2>
                <p>Please create an account.</p>
                <form>
                    <input placeholder="Email" name="email" type="email" required /><br /><br />
                    <input placeholder="Password" name="password" type="password" required /><br /><br />
                    <input placeholder="Username" name="username" type="text" required /><br /><br />
                    <button type="submit" className="signup-button">Register</button>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;
