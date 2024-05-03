import React from "react";
import Box from "../assests/Box.png";
import Ellipse33 from "../assests/Ellipse 33.png";
import { useNavigate } from "react-router-dom";
import LoginBox from "./loginComponent";

const Login = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        navigate("/dashboard");
    };

    return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }} className="login-container444">
      <div className="background-image"></div>
      <div className="shadow"></div>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', paddingBottom:'30px',
       }} className="top-image-container">
        <img src={Box} alt="Image" className="top-image" />
      </div>

 <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', alignContent:'center', alignSelf:'center' }}>
    <div style={{justifyContent:'center', alignContent:'center'}} className="left-image-container">
      <img src={Ellipse33} alt="Image" className="left-image" />
    </div>
  <div className="right-column" style={{ padding:'10px', display: 'flex', alignItems: 'center' }}>
    <LoginBox handleClick={handleClick} />
  </div>
</div>

    </div>
    );
};

export default Login;
