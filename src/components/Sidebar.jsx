import React, { useState } from 'react';
import logo from '../images/logo.png';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaShoppingBag,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../asset/sidebar.css';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/about",
            name: "Giới thiệu",
            icon: <FaUserAlt />
        },
        {
            path: "/todo",
            name: "Todo List",
            icon: <FaShoppingBag />
        },
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Destrier</h1>
                    <div style={{ marginLeft: isOpen ? "35px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;