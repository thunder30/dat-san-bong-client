import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PublicRoute() {
    const isAuthenticated = true
    const accessToken = 'token'
    return isAuthenticated && accessToken ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoute
