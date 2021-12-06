import React from 'react'
import AuthLayout from '../layout/AuthLayout'
import DefaultLayout from '../layout/DefaultLayout'

function Login() {
    return (
        <DefaultLayout>
            <AuthLayout authRoute="login" />
        </DefaultLayout>
    )
}

export default Login
