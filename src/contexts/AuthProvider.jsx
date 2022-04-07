import React, { createContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import * as authServices from '../core/services/auth'
import * as userServices from '../core/services/user'
import * as types from '../reducers/authReducer/constants'
import reducer, { initialState } from '../reducers/authReducer/reducer'

export const AuthContext = createContext()

function AuthProvider({ children }) {
    const [authState, dispatch] = useReducer(reducer, initialState)

    let navigate = useNavigate()

    //console.log(`Auth provider`)
    console.log(`Authenticated: `, authState.isAuthenticated)
    // call api loadUser
    const getAuth = async () => {
        const data = await authServices.getAuth()
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

    const updateUser = async (user, _id) => {
        const data = await userServices.updateUser(user, _id)
        if (data.success) getAuth()
        return data
    }

    useEffect(() => {
        //console.log(`useEffect Auth`)
        getAuth()
    }, [])

    const login = async ({ email, password }) => {
        dispatch({
            type: types.AUTH_LOADING,
        })
        const data = await authServices.login({ email, password })
        if (data.success) {
            getAuth()
            navigate('/', { replace: true })
        } else {
            dispatch({ type: types.AUTH_FAILED })
        }
    }

    const register = async ({ email, password }) => {
        const data = await authServices.register({ email, password })
        return data
    }

    const logout = async () => {
        dispatch({
            type: types.AUTH_LOADING,
        })
        await authServices.logout()
        dispatch({
            type: types.AUTH_RESET,
        })
    }

    const value = { login, register, logout, updateUser, authState }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
