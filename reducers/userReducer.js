import {
  GET_DATA,
  SPINNER_OFF,
  SPINNER_ON,
  USER_DELETE,
  USER_DETAIL,
} from "../actions/types";

const INITIAL_STATE = {
  data: [],
  spinner_status: false,
  user_detail: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case USER_DETAIL:
      return {
        user_detail: action.payload,
      };
    case SPINNER_OFF:
      return {
        ...state,
        spinner_status: false,
      };
    case SPINNER_ON:
      return {
        ...state,
        spinner_status: true,
      };
    case USER_DELETE:
      return {
        ...state,
        data: state.data.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
