import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import userReducer from "./userReducer";
import modalReducer from './modalReducer'

export default combineReducers({
    home: homeReducer,
    user: userReducer,
    modal: modalReducer

});