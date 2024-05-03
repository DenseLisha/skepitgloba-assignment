import React from "react";
import Box from "../assests/Box.png";


const Footer = () => {
    return (
        <div className="footer">
            <div className="file-box">
                <p className="file-text">File</p>
            </div>
            <div className="box-container">
                <img src={Box} alt="box" className="box-image" />
            </div>
        </div>
    );
}

export default Footer;
