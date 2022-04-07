import { notification } from 'antd'
import codeMessage from './codeMessage'

const successHandler = (response) => {
    const { data } = response
    if (!data.success) {
        const message = data && data.message
        let errorText = message || codeMessage[response.status]
        //console.log(`success handler: `, response)
        if (response.status === 401 || response.status === 403) {
            errorText = 'Đã có lỗi xảy ra, vui lòng tải lại trang!'
        }
        notification.error({
            duration: 10,
            description: errorText,
        })
    }
    return data
}

export default successHandler
