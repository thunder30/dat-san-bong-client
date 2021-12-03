import React from 'react'
import { Outlet, Navigate } from 'react-router'

function PrivateRoute() {
    const isAuthenticated = true
    const accessToken = 'token'
    return isAuthenticated && accessToken ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    )
}

export default PrivateRoute
