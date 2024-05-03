import React from "react";
import Box from "../assests/Box.png"
import { useNavigate } from "react-router-dom";
import Ellipse33 from "../assests/Ellipse 33.png"


const Login = () => {
    const navigate= useNavigate()
    const handleClick=()=>{
        navigate("/dashboard")
    }
    return (
        <div className="login-container">
            <div className="shadow"></div>
            <div className="left-image-container">
            <img src={Ellipse33} alt="Image" className="left-image" />
            </div>
 
             <div className="login-box-large">
                <img src={Box} alt="Image" className="top-image" />
                <h3>Welcome back</h3>
                <form >
                    <div className="form-group">
                        <input type="email" id="email" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" id="rememberMe" name="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div className="submit-button">
                        <button type="submit" onClick={handleClick}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
