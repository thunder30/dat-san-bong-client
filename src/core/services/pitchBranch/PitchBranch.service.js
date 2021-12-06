import axios from 'axios'
import { API_BASE_URL } from '../../../config/serverApiConfig'
import successHandler from '../../../request/successHandler'
import errorHandler from '../../../request/errorHandler'

const getBranch = async () => {
    try {
        const res = await axios.get(API_BASE_URL + '/pitchbranch')
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const getBranchById = async (id) => {
    try {
        const res = await axios.get(API_BASE_URL + '/pitchbranch/getDetail/' + id)
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}



export { getBranch, getBranchById}
