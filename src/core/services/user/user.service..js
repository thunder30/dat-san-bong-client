import axios from 'axios'
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../../../config'
import successHandler from '../../../request/successHandler'
import errorHandler from '../../../request/errorHandler'
import setHeaderToken from '../../../helpers/setHeaderToken'
import { getCookie } from './cookie'

const updateUser = (user) => {
    const token = getCookie(ACCESS_TOKEN_NAME)
    setHeaderToken(token)

    try {
        const res = axios.put(API_BASE_URL + `/users/${user._id}`, user)
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

export { updateUser }
