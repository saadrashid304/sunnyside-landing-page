import React from "react";
import styles from "./Image.module.css";

const Image = (props) => {
  return (
    <div className={styles.image_container}>
      <img src={props.source} alt="" />
    </div>
  );
};

export default Image;
