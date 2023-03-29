import React from "react";
import styles from "./Header.module.css";
import arrowDown from "../../assets/icon-arrow-down.svg";
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return (
        <div className={styles.header_mainContainer}>
            <NavBar />
            <h1>We are creatives</h1>
            <img className={styles.header_image} src={arrowDown} alt="" />
      </div>
    );
};

export default Header;
