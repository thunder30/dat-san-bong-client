import React from 'react'
import AuthLayout from '../layout/AuthLayout'
import DefaultLayout from '../layout/DefaultLayout'

function Register() {
    return (
        <DefaultLayout>
            <AuthLayout authRoute="register" />
        </DefaultLayout>
    )
}

export default Register
