import React, { useState, Fragment } from "react";
import styles from "./Header.module.css";
import arrowDown from "../../assets/icon-arrow-down.svg";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const [displayModal, setDsiplayModal] = useState(false);

  const displayModalHandler = (value) => {
    setDsiplayModal(value);
  };

  return (
    <Fragment>
      <div className={styles.header_mainContainer}>
        <NavBar onDisplayModal={displayModalHandler} />
        <h1>We are creatives</h1>
        <img className={styles.header_image} src={arrowDown} alt="" />
      </div>
      {displayModal && (
        <div
          className={styles.backdrop}
          onClick={() => setDsiplayModal(false)}
        />
      )}
      {displayModal && (
        <Fragment>
                  <div className={styles.triangle} />
          <div className={styles.modal_container}>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Project</li>
              <li className={styles.navbar_contact}>Contact</li>
            </ul>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Header;
