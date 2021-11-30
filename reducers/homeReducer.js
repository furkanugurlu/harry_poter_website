import {
    HOME_STATUS,
} from "../actions/types";

const INITIAL_STATE = {
    home_status: true,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HOME_STATUS:
            return {
                ...state,
                home_status: action.payload
            }
        default:
            return state
    }

}
