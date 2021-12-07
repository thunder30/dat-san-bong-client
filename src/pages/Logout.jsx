import React, { useContext, useLayoutEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'

function Logout() {
    const { logout } = useContext(AuthContext)
    useLayoutEffect(() => {
        async function logoutUser() {
            await logout()
        }
        logoutUser()
    }, [logout])
    return <Navigate to="/" replace />
}

export default Logout
