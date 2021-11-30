import React from "react";
import styles from "../styles/navbar.module.css";

const IconCustom = ({ onPress }) => {
  return (
    <div onClick={onPress} className={styles.menuIconWrapper}>
      <div className={styles.iconLine}></div>
      <div className={styles.iconLine}></div>
      <div className={styles.iconLine}></div>
    </div>
  );
};

export default IconCustom;
