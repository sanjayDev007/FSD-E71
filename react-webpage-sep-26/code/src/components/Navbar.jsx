import React from 'react'

function Navbar() {
  return (
    <>
        <nav className='sticky w-full flex items-center justify-around p-4 pt-14'>
            <div className="logo">
                <h1 className='text-black font-bold text-3xl'>MyLogo</h1>
            </div>
            <ul className="nav-links flex space-x-10">
                <li><a className='text-black' href="#home">Home</a></li>
                <li><a className='text-black' href="#about">About</a></li>
                <li><a className='text-black' href="#services">Services</a></li>
                <li><a className='text-black p-4 border-1 rounded-xl' href="#contact">Contact</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar