import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Vector from "../assests/Vector.png"
import Wifi from "../assests/Vector wifi.png";
import Group from "../assests/Group.png";
import Google from "../assests/Google Chrome.png"
import Bin from "../assests/Empty Bin.png";
import Diary from "../assests/Diary.png"
import Calender from "../assests/Calender.png"

const Dashboard = () => {
    const [currentDateTime, setCurrentDateTime] = useState(
        new Date()
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false, 
    };
    const formatDate = (date) => {
        const options = {
            weekday: 'long', 
            month: 'long',   
            day: 'numeric',
            daySuffix: 'ordinal',
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        return formatter.format(date);
    };

    return (
        
       <div className="dashboard">
        <div className="header-component">
      <img src={Wifi} alt="Wifi" />
      <img src={Vector} alt="Sound" />
      <img src={Group} alt="Battery" />
    </div>
        
            <div className="time-container">
            <p className="time">{currentDateTime.toLocaleTimeString([], timeOptions)}</p>
            <p className="date"> {formatDate(currentDateTime)}</p>
            </div>
        <div className="right-images">
            <img src={Diary} alt="diary" />
            <img src={Calender} alt="calender"/>
            <img src={Google} alt="google-chrome"/>
            <img src={Bin} alt="empty-bin"/>
        </div>
        <div className="parent-container">
            <div className="bubble-container">
            <div className="bubble">
            <p>Hello! What are you looking for?</p>
            <div className="triangle"></div>
            </div>

            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Dashboard;

