import React, { createContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import * as authService from '../core/services/auth'
import * as types from '../reducers/authReducer/constants'
import reducer, { initialState } from '../reducers/authReducer/reducer'

export const AuthContext = createContext()

function AuthProvider({ children }) {
    const [authState, dispatch] = useReducer(reducer, initialState)

    let navigate = useNavigate()

    console.log(`Auth provider`)
    console.log(`Authenticated: `, authState.isAuthenticated)
    // call api loadUser
    const getAuth = async () => {
        const data = await authService.getAuth()
        if (data.success) {
            dispatch({
                type: types.AUTH_SUCCESS,
                payload: data.user,
            })
        } else {
            dispatch({
                type: types.AUTH_FAILED,
            })
        }
    }

    useEffect(() => {
        console.log(`useEffect Auth`)
        getAuth()
    }, [])

    const login = async ({ email, password }) => {
        dispatch({
            type: types.AUTH_LOADING,
        })
        const data = await authService.login({ email, password })
        if (data.success) {
            getAuth()
            navigate('/', { replace: true })
        } else {
            dispatch({ type: types.AUTH_FAILED })
        }
    }

    const register = async ({ email, password }) => {
        const data = await authService.register({ email, password })
        return data
    }

    const logout = async () => {
        dispatch({
            type: types.AUTH_LOADING,
        })
        await authService.logout()
        dispatch({
            type: types.AUTH_RESET,
        })
    }

    const value = { login, register, logout, authState }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
