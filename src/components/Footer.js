import React from 'react'

import { Link, NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer' >
            <div className="container">

                <nav className="d-flex justify-content-center">
                    <NavLink to="/dash/home"
                        className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                    <NavLink to="/dash/about"
                        className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>About</NavLink>
                    <NavLink to="/dash/products"
                        className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>Products</NavLink>
                    <NavLink to="/dash/posts"
                        className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>Posts</NavLink>
                </nav>

                <div className="copyrights">
                    &copy; 2022 <Link to="/"> HKRY</Link> - All Rights Reserved.
                </div>

            </div>
        </footer>
    )
}

export default Footer