import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // You missed importing Link
import './Navbar.css';
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart-icon.png.png";

const Navbar = () => {
    const [menu, setMenu] = useState("Home"); // fixed naming convention

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Logo" height="35px" />
                <p>Shopify</p>
            </div>

            <ul className='nav-menu'>
                <li onClick={() => setMenu("Home")}>
                    <Link style={{textDecoration:"none" ,color: "#626262"}} to="/">Home</Link>
                    {menu === "Home" && <hr />}
                </li>
                <li onClick={() => setMenu("Men")}>
                    <Link style={{textDecoration:"none", color: "#626262"}} to="/men">Men</Link>
                    {menu === "Men" && <hr />}
                </li>
                <li onClick={() => setMenu("Womens")}>
                    <Link style={{textDecoration:"none", color: "#626262"}} to="/womens">Womens</Link>
                    {menu === "Womens" && <hr />}
                </li>
                <li onClick={() => setMenu("Kids")}>
                    <Link  style={{textDecoration:"none", color: "#626262"}} to="/kids">Kids</Link>
                    {menu === "Kids" && <hr />}
                </li>
            </ul>

            <div className='nav-login-cart'>
                  <Link to="/Login">  <button >Login</button></Link>
                <Link to="/Cart"><img src={cart_icon} alt="Cart" height="40px" /></Link> 
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;
