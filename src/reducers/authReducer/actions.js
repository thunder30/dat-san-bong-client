import { SET_AUTH, SET_CONFIRM, SET_EMAIL_VERIFY } from './constants'

const setAuth = (payload) => {
    return {
        type: SET_AUTH,
        payload,
    }
}

const setConfirm = (payload) => {
    return {
        type: SET_CONFIRM,
        payload,
    }
}

const setEmailVerify = (payload) => {
    return {
        type: SET_EMAIL_VERIFY,
        payload,
    }
}
export { setAuth, setConfirm, setEmailVerify }
