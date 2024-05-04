import React from "react";
import Box from "../assests/Box.png";
import Ellipse33 from "../assests/Ellipse 33.png";
import { useNavigate } from "react-router-dom";
import LoginBox from "./loginComponent";

const Login = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault(); 
        navigate("/dashboard");
    };

    return (
    <div  className="login-container">
      <div className="background-image"></div>
      <div className="shadow"></div>
      <div  className="top-image-container">
        <img src={Box} alt="Image" className="top-image" />
      </div>

 <div className="left-image-container1">
 <div className="egg">
    <img src={Ellipse33} alt="Image" className="left-image"  />
  </div>
  <div className="u-shape"></div>
  <div className="right-column">
    <LoginBox handleClick={handleClick} />
  </div>
</div>

    </div>
    );
};

export default Login;
