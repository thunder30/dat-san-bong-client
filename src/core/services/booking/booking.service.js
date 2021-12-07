import axios from 'axios'
import {
    API_BASE_URL,
    ACCESS_TOKEN_NAME,
} from '../../../config/serverApiConfig'
import setHeaderToken from '../../../helpers/setHeaderToken'
import { getCookie } from '../auth/cookie'
import successHandler from '../../../request/successHandler'
import errorHandler from '../../../request/errorHandler'

const checkBooking = async ({ startTime, endTime, pitch }) => {
    const token = getCookie(ACCESS_TOKEN_NAME)
    setHeaderToken(token)
    //console.log(`token: `, token)

    try {
        const res = await axios.post(`${API_BASE_URL}/booking/checkout`, {
            startTime,
            endTime,
            pitch,
        })
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const confirmBooking = async ({
    startTime,
    endTime,
    status = 'ST1',
    isPaid = true,
    customer,
    pitch,
    name,
    phone,
}) => {
    const token = getCookie(ACCESS_TOKEN_NAME)
    setHeaderToken(token)
    //console.log(`token: `, token)

    try {
        const res = await axios.post(`${API_BASE_URL}/booking/confirm`, {
            startTime,
            endTime,
            status,
            isPaid,
            customer,
            pitch,
            name,
            phone,
        })
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

export { checkBooking, confirmBooking }
