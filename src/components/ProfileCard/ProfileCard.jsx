import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = (props) => {
  return (
    <div className={styles.profile_mainContainer}>
      <img src={props.image} alt="" />
      <p className={styles.profile_desc}>{props.desc}</p>
      <h3>{props.name}</h3>
      <p className={styles.profile_design}>{props.designation}</p>
    </div>
  );
};

export default ProfileCard;
