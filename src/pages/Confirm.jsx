import React, { useContext, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import NotFound from './NotFound'
import { AuthContext } from '../contexts/AuthProvider'

function Confirm() {
    const { token } = useParams()
    let navigate = useNavigate()
    const {
        authState: { isRegister, isEmailVerify },
        emailVerify,
    } = useContext(AuthContext)
    const [stateVerify, setStateVerify] = useState({
        success: false,
        message: '',
    })

    const hanleEmailVerify = async (token) => {
        try {
            const data = await emailVerify(token)
            setStateVerify(data)
        } catch (error) {
            console.log(error)
        }
    }

    // nếu không có đăng ký mới
    if (!isRegister) return <NotFound />

    if (token) {
        if (token.length === 24) {
            hanleEmailVerify(token)
            //return <Navigate to="/confirm" replace />
        } else {
            return <NotFound />
        }
    } else {
        return <div>Vui long xac nhan email cua ban</div>
    }

    return stateVerify.success ? (
        <div>Thanh cong: {stateVerify.message}</div>
    ) : (
        <div>That bai: {stateVerify.message}</div>
    )
}

export default Confirm
