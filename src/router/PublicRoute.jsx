import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PublicRoute() {
    const isAuthenticated = false
    const accessToken = 'token'
    return isAuthenticated && accessToken ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoute
