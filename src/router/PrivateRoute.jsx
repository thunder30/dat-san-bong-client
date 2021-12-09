import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { token } from '../core/services/auth'
import { AuthContext } from '../contexts/AuthProvider'

function PrivateRoute() {
    const {
        authState: { isAuthenticated },
    } = useContext(AuthContext)
    const accessToken = token.get()
    return isAuthenticated && accessToken ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    )
}

export default PrivateRoute
