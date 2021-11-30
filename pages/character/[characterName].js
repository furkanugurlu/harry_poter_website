import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { home_background_off_on } from "../../actions";

import styles from "../../styles/users.module.css";

const UserDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(home_background_off_on(false));
  }, []);

  const name = router.query.characterName;
  const data = useSelector((state) => state.user.data);
  const newData = data.filter((res) => res.name === name);

  console.log(newData[0]);

  const { name, image, actor, house, eyeColour, hairColour } = newData[0];

  return (
    <div className={styles.detailWrapper}>
      <img src={image} alt="" />
      <div className={styles.right}>
        <p>
          <span>Name = </span> {name}
        </p>
        <p>
          <span>Actor = </span> {actor}
        </p>
        <p>
          <span>House = </span> {house}
        </p>
        <p>
          <span>Eye Colour = </span> {eyeColour ? eyeColour : "black"}
        </p>
        <p>
          <span>Hair Colour = </span> {hairColour}
        </p>
      </div>
    </div>
  );
};

export default UserDetail;
