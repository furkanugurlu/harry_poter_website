import { MODAL_DELETE_SHOW_HİDDEN, MODAL_RECORDED_SHOW_HİDDEN } from './types'

export const modal_show_hidden = (status, status2) => (dispatch) => {
    dispatch({ type: MODAL_DELETE_SHOW_HİDDEN, payload: status })
    dispatch({ type: MODAL_RECORDED_SHOW_HİDDEN, payload: status2 })
}