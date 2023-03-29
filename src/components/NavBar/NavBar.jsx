import React from "react";
import styles from "./NavBar.module.css";
import hamburger from "../../assets/icon-hamburger.svg";

const NavBar = () => {
  return (
    <div className={styles.navbar_container}>
      <p>sunnyside</p>
      <img className={styles.navbar_menuIcon} src={hamburger} alt="" />
      <div className={styles.navbar_navLinkContainer}>
        <ul>
          <li className={styles.navbar_li}>About</li>
          <li className={styles.navbar_li}>Services</li>
          <li className={styles.navbar_li}>Projects</li>
          <li className={styles.navbar_contact}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
