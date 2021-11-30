import React, { useEffect, useState } from "react";
import styles from "../styles/users.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { get_data } from "../actions";

const Cart = ({ data }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const router = useRouter();

  const spinner_status = useSelector((state) => state.user.spinner_status);

  return (
    <div className={styles.container}>
      {spinner_status ? (
        <div
          className="d-flex justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: "500px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h1 className={styles.pageTitle}>Hogwart Karakterlerİ</h1>
            <div className={styles.inputWrapper}>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className={styles.inputText}
                placeholder="Ara"
              />
              <img
                className={styles.imgSearch}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
              />
            </div>
          </div>
          <br />
          <div className={styles.containerCart}>
            {data
              .filter((val) => {
                if (search == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((character, index) => (
                <div key={index} className={styles.cart}>
                  <div className={styles.top}>
                    <img src={character.image} alt="" />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.character_info}>
                      <span>{character.name}</span>
                      {character.actor ? <p>({character.actor})</p> : null}
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <button
                      onClick={() => router.push(`character/${character.name}`)}
                      type="button"
                      className={styles.detail_btn}
                    >
                      More
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
