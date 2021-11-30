import { HOME_STATUS } from './types'

export const home_background_off_on = (status) => (dispatch) => {
    dispatch({ type: HOME_STATUS, payload: status })
}

