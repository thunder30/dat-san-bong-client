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
    //console.log(`token: `, token)

    try {
        const res = await axios.get(`${API_BASE_URL}/auth`)
        //console.log('service success')
        return successHandler(res)
    } catch (error) {
        //console.log('service error')
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
            setCookie(ACCESS_TOKEN_NAME, res.data.accessToken)
        }

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

export { login, logout, getAuth, token }
