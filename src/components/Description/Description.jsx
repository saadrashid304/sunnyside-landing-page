import React, { useState } from "react";
import styles from "./Description.module.css";

const Description = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getHoverStyle = () => {
    if (props.color === "yellow") {
      return {
        borderBottom: "5px solid rgba(250, 212, 0, 1)",
      };
    } else {
      return {
        borderBottom: "5px solid rgba(254, 120, 103, 1)",
      };
    }
  };

  return (
    <div className={styles.desc_mainContainer}>
      <div>
        <h1 className={styles.desc_title}>{props.title}</h1>
        <p className={styles.desc_desc}>{props.desc}</p>
        <p
          className={styles.desc_btn}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={
            isHovering
              ? getHoverStyle()
              : {
                  borderBottom:
                    props.color === "yellow"
                      ? "5px solid rgba(250, 212, 0, 0.3)"
                      : "5px solid rgba(254, 120, 103, 0.3)",
                }
          }
        >
          LEARN MORE
        </p>
      </div>
    </div>
  );
};

export default Description;
