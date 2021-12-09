import axios from 'axios'
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../../../config'
import successHandler from '../../../request/successHandler'
import errorHandler from '../../../request/errorHandler'
import setHeaderToken from '../../../helpers/setHeaderToken'
import { getCookie } from '../auth/cookie'

const updateUser = async (user, _id) => {
    const token = getCookie(ACCESS_TOKEN_NAME)
    setHeaderToken(token)
    try {
        const res = await axios.put(API_BASE_URL + `/users/${_id}`, {
            ...user,
            roles: ['KHACH_HANG'],
        })
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

export { updateUser }
