import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function HeaderAuth() {
  return (
    <header>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">

                    <div className="logo">
                        <Link to="/" className='brand'>HKRY</Link>
                    </div>

                    <nav className="nav nav-pills">
                        <NavLink to="login"
                            className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>Login</NavLink>
                        <NavLink to="register"
                            className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>Register</NavLink>
                    </nav>
                </div>
            </div>
        </header>
  )
}

export default HeaderAuth