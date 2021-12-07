import axios from 'axios'
import {
    API_BASE_URL,
    ACCESS_TOKEN_NAME,
} from '../../../config/serverApiConfig'
import setHeaderToken from '../../../helpers/setHeaderToken'
import { getCookie, setCookie, removeCookie } from './cookie'
import successHandler from '../../../request/successHandler'
import errorHandler from '../../../request/errorHandler'

const getAuth = async () => {
    const token = getCookie(ACCESS_TOKEN_NAME)
    setHeaderToken(token)

    try {
        const res = await axios.get(`${API_BASE_URL}/auth`)
        return successHandler(res)
    } catch (error) {
        removeCookie(ACCESS_TOKEN_NAME)
        setHeaderToken(null)
        return errorHandler(error)
    }
}

const login = async ({ email, password }) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/auth/login`, {
            email,
            password,
        })

        if (res.data.success) {
            if (res.data.roles.includes('KHACH_HANG')) {
                setCookie(ACCESS_TOKEN_NAME, res.data.accessToken)
            } else {
                res.data.success = false
                res.data.message = 'Sai email hoặc mật khẩu!'
            }
            // get user
        }

        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const register = async ({ email, password }) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/auth/register`, {
            email,
            password,
            roles: ['KHACH_HANG'],
        })
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const logout = async () => {
    token.remove()
}

const token = {
    get() {
        return getCookie(ACCESS_TOKEN_NAME)
    },
    set(value) {
        setCookie(ACCESS_TOKEN_NAME, value)
    },
    remove() {
        removeCookie(ACCESS_TOKEN_NAME)
    },
}

export { login, register, logout, getAuth, token }
