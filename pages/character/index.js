import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { home_background_off_on, get_data } from "../../actions";
import Cart from "../../component/Cart";

import styles from "../../styles/users.module.css";

const Character = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(home_background_off_on(false));
    dispatch(get_data());
  }, []);

  const data = useSelector((state) => state.user.data);
  return (
    <div>
      <Cart data={data} />
    </div>
  );
};

export default Character;
