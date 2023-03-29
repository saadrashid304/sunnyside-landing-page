import React from "react";
import styles from "./ImageSecond.module.css";

const ImageSecond = (props) => {
  return (
    <div className={styles.image_container}>
      <img src={props.source} alt="" />
    </div>
  );
};

export default ImageSecond;
