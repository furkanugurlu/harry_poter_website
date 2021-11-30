import { GET_DATA, SPINNER_ON, SPINNER_OFF, USER_DELETE } from "./types";
import { api } from "./api";

export const get_data = () => (dispatch) => {
  dispatch({ type: SPINNER_ON });
  api()
    .get("/characters")
    .then((res) => {
      dispatch({ type: GET_DATA, payload: res.data.slice(0, 25) });
      dispatch({ type: SPINNER_OFF });
    })
    .catch((err) => {
      dispatch({ type: SPINNER_OFF });
      console.log("errr: ", err);
    });
};

export const user_delete = (id) => (dispatch) => {
  dispatch({ type: USER_DELETE, payload: id });
};
