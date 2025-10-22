import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router'

export default function Navbar() {
  const { cart } = useSelector(state => state);
  const count = cart.reduce((s, i) => s + i.quantity, 0)

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-serif">Aurum</Link>
          <div className="flex items-center gap-6">
            <Link to="/products" className="text-gray-600 hover:text-black">Products</Link>
            <Link to="/about" className="text-gray-600 hover:text-black">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link>
            <Link to="/cart" className="relative inline-flex items-center gap-2 text-gray-600 hover:text-black">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" /></svg>
              <span>Cart</span>
              {count > 0 && (
                <span className="absolute -top-2 -right-3 bg-black text-white rounded-full text-xs px-2">{count}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}