import { RECORDED_ADD, USER_RECORDED_DELETE } from './types'

export const recorded_add = (user) => (dispatch) => {
    dispatch({ type: RECORDED_ADD, payload: user })
}

export const user_recorded_delete = (id) => (dispatch) => {
    dispatch({ type: USER_RECORDED_DELETE, payload: id })
}