import React, { useContext } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import PublicRoute from './PublicRoute'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import PitchBranch from '../pages/PitchBranch'
import PitchBranchDetail from '../pages/PitchBranchDetail'
import Profile from '../pages/Profile'
import MyBooking from '../pages/MyBooking'
import Checkout from '../pages/Checkout'
import ChangePassword from '../pages/ChangePassword'
import Logout from '../pages/Logout'

import { AuthContext } from '../contexts/AuthProvider'
import PrivateRoute from './PrivateRoute'
import PitchBranchProvider from '../contexts/PitchBranchProvider'

function Router() {
    const {
        authState: { isLoading },
    } = useContext(AuthContext)

    //  if (isLoading) return console.log(`loading`)

    return (
        <Routes>
            {/* PublicRoute -> không cần authenticated */}
            <Route path="/" element={<Home />} />
            <Route element={<PublicRoute />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
            <Route path="pitchbranch" element={<Outlet />}>
                <Route index element={<PitchBranch />} />
                <Route path=":id" element={<PitchBranchDetail />} />
            </Route>

            {/* PrivateRoute -> cần authenticated */}
            <Route element={<PrivateRoute />}>
                <Route path="checkout" element={<Checkout />} />
                <Route path="profile" element={<Profile />} />
                <Route path="mybooking" element={<MyBooking />} />
                <Route path="changepassword" element={<ChangePassword />} />
                <Route path="logout" element={<Logout />} />
            </Route>

            <Route path="notfound" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
    )
}

export default Router
