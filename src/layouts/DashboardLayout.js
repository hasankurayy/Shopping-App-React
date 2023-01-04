import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from "../components/Footer"

function DashboardLayout({basket}) {
  return (
    <>
        <Header basket={basket} />
        <Outlet />
        <Footer />
    </>
  )
}

export default DashboardLayout