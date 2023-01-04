import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header({basket, setLoggedIn}) {
    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">

                    <div className="logo">
                        <Link to="/" className='brand'>HKRY</Link>
                    </div>

                    <nav className="nav nav-pills">
                        <NavLink to="home"
                            className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                        <NavLink to="about"
                            className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>About</NavLink>
                        <NavLink to="products"
                            className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>Products</NavLink>
                        <NavLink to="posts"
                            className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>Posts</NavLink>
                        <NavLink to="basket"
                            className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>
                            <i class="fa-solid fa-cart-shopping"></i> <span>({basket.length})</span>   
                        </NavLink> &nbsp;
                        <button className='btn btn-danger btn-sm' onClick={() => setLoggedIn(false)}>
                            <a href="/login" style={{color: "white"}} >Logout</a>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header