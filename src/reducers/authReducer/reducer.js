import { SET_AUTH, SET_CONFIRM, SET_EMAIL_VERIFY } from './constants'

export const initialState = {
    isAuthenticated: false,
    user: null,
    isLoading: true,
    isRegister: false,
    isEmailVerify: false,
}

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_AUTH:
            return { ...state, ...payload }
        case SET_CONFIRM:
            return {
                ...state,
                ...payload,
            }
        case SET_EMAIL_VERIFY:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}

export default reducer
