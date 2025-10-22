import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Aurum</div>
        <div className="flex items-center gap-4">
          <Link to="/about" className="text-gray-600 text-sm">About</Link>
          <Link to="/contact" className="text-gray-600 text-sm">Contact</Link>
        </div>
      </div>
    </footer>
  )
}