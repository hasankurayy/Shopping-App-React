import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAuth from '../components/HeaderAuth'

function AuthLayout() {
    return (
        <>
            <HeaderAuth />
            <div className="login-info">
                If you do not have a profile, please register and then login, <br />
                if you have a profile, please login to enter the site.
            </div>
            <Outlet />
        </>
    )
}

export default AuthLayout