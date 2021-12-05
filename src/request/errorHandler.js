import { notification } from 'antd'
import codeMessage from './codeMessage'

const errorHandler = (error) => {
    const { response } = error

    notification.config({
        duration: 5,
    })

    if (!response) {
        notification.error({
            message: 'Request Error',
            description:
                'Không kết nối được server. Có thể server bị lỗi hoặc vui lòng kiểm tra lại đường truyền mạng.',
        })
        return {
            success: false,
            message:
                'Không kết nối được server. Có thể server bị lỗi hoặc vui lòng kiểm tra lại đường truyền mạng.',
        }
    } else if (response && response.status) {
        const status = response.status
        const message = response.data && response.data.message
        const errorText = message || codeMessage[status]

        notification.error({
            message: `Request error ${status}`,
            description: errorText,
        })
        return response.data
    } else {
        notification.error({
            message: 'Unknown Error',
            description:
                'An unknown error occurred in the app, please try again. ',
        })
        return {
            success: false,
            message: 'An unknown error occurred in the app, please try again. ',
        }
    }
}

export default errorHandler
