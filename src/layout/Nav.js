import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import logo from "../images/1.png";
import button1 from "../images/2.png";
import button2 from "../images/3.png";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <ul className={styles.menu}>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
            <div className={styles.buttons}>
                <img src={button1} alt="Button 1" />
                <img src={button2} alt="Button 2" />
            </div>
        </nav>
    );
};

export default Nav;
