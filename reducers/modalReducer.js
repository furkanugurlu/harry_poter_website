import { MODAL_DELETE_SHOW_HİDDEN, MODAL_RECORDED_SHOW_HİDDEN } from "../actions/types"
const INITIAL_STATE = {
    modal_delete_show_hidden: false,
    modal_recorded_show_hidden: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODAL_DELETE_SHOW_HİDDEN:
            return {
                ...state,
                modal_delete_show_hidden: action.payload
            }
        case MODAL_RECORDED_SHOW_HİDDEN:
            return {
                ...state,
                modal_recorded_show_hidden: action.payload
            }

        default:
            return state;
    }
}