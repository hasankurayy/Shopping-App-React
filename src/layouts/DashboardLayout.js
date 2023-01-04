import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from "../components/Footer"

function DashboardLayout({basket, setLoggedIn}) {
  return (
    <>
        <Header basket={basket} setLoggedIn={setLoggedIn}/>
        <Outlet />
        <Footer />
    </>
  )
}

export default DashboardLayout