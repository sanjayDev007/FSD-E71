import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

function Layout() {
  return (
    <>
        <Navbar />
        <main className="w-full min-h-screen bg-gray-900 text-white px-4 py-8">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout