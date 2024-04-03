import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>JBOnline.com</h1>
            </div>
            <form action="" className="search">
                <input type="search"/>
            </form>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Header;