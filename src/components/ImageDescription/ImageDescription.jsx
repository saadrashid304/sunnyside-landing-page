import React from "react";
import styles from "./ImageDescription.module.css";

const ImageDescription = (props) => {
  return (
    <div
      // style={{
      //   ...props.style,
      // }}
      className={`${styles.imageDesc_mainContainer} ${
        props.title === "Graphic Design"
          ? styles.imageDesc_graphic
          : styles.imageDesc_photo
      }`}
    >
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
};

export default ImageDescription;
