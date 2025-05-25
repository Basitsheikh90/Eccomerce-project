import React from "react"
import "./Hero.css";
import hand_icon from '../../../assets/hand_icon.png'
import arrow_icon from '../../../assets/arrow_icon.png'
import men from '../../../assets/men.png.png'


const Hero = () => {
    return (
        <div className="Hero">
            <div className="hero-left">
                <h2>Best Deals! Best Prices!</h2>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" height="60px" />
                </div>
                <p>Collection </p>
                <p>for Everyone</p>
            <div className="hero-latest-button">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" height="30px" />
            </div>
              </div>
            <div className="hero-right">
                <img src={men} alt="" height="500px" />
            </div>
        </div>
    )
}

export default Hero;