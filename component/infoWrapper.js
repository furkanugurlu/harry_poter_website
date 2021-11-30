import React, { useEffect } from "react";
import styles from "../styles/home.module.css";
import Aos from "aos";

import "aos/dist/aos.css";
import "aos/dist/aos";

const InfoWrapper = ({ title, image, p1, p2, p3, p4 }) => {
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);
  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={styles.harryWrapper}>
        <div data-aos="fade-up" className={styles.ımageWrapper}>
          <img className={styles.harryImage} src={image}></img>
        </div>
        <div data-aos="fade-down" className={styles.textWrapper}>
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
          <p>{p4}</p>
        </div>
      </div>
    </>
  );
};

export default InfoWrapper;
