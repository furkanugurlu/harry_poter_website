import React, { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import PathControl from "./pathControl";
import IconCustom from "../component/Icon";

import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const router = useRouter();
  const [effect, setEffect] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const homeStatus = useSelector((state) => state.home.home_status);

  const toggleVisibility = () => {
    if (window.scrollY) {
      setEffect(true);
    } else {
      setEffect(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.addEventListener("scroll", toggleVisibility);
    };
  }, []);

  const isActive = PathControl(router.pathname, false);

  return (
    <>
      <div
        onClick={() => setMenuShow(false)}
        className={`${styles.home_back}  ${!homeStatus && styles.navbarOrder} `}
      >
        <div className={styles.black_effect}>
          {homeStatus && <h3>{PathControl(router.pathname, true)}</h3>}
          {homeStatus && <p>hogwarts'a hoşgeldiniz</p>}
        </div>
      </div>
      <div className={` ${styles.navbar} ${effect && styles.navbaranimation}`}>
        <img
          onClick={() => router.push("/")}
          style={{ visibility: effect && "hidden" }}
          className={styles.logo}
          src="/hpLogo.png"
          alt=""
        />
        <div className={styles.nav_list}>
          <Link href="/">
            <a className={`${isActive == "home" && styles.active}`}>
              Ana Sayfa
            </a>
          </Link>
          <Link href="/character">
            <a className={`${isActive == "character" && styles.active}`}>
              Karakterler
            </a>
          </Link>
          <Link href="/about">
            <a className={`${isActive == "about" && styles.active}`}>
              Hakkında
            </a>
          </Link>
        </div>
        <IconCustom onPress={() => setMenuShow(!menuShow)} />
        <div
          className={`${styles.responseMenu} ${menuShow && styles.showMenu}`}
        >
          <div className={styles.menuIconWrapper}>
            <IconCustom onPress={() => setMenuShow(!menuShow)} />
          </div>
          <div className={styles.nav_list_response}>
            <Link href="/">
              <a onClick={() => setMenuShow(false)}>Ana Sayfa</a>
            </Link>
            <Link href="/character">
              <a onClick={() => setMenuShow(false)}>Karakterler</a>
            </Link>
            <Link href="/about">
              <a onClick={() => setMenuShow(false)}>Hakkında</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
