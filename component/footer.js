import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerIconWrapper}>
        <div className={styles.iconWrapper}>
          <FaFacebookF className={styles.icon} />
        </div>
        <div className={styles.iconWrapper}>
          <FaInstagram className={styles.icon} />
        </div>
        <div className={styles.iconWrapper}>
          <FaTwitter className={styles.icon} />
        </div>
      </div>
      <div className={styles.footerText}>
        <p>Telif Hakkı © Bilişim Sistemleri Mühendisliği</p>
      </div>
    </div>
  );
};

export default Footer;
