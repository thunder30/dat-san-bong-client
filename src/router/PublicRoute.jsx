import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getCookie } from '../core/services/auth/cookie'

function PublicRoute() {
    const isAuthenticated = false
    const accessToken = getCookie()
    return isAuthenticated && accessToken ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoute
