import React from 'react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-serif tracking-tight">Discover Timeless Luxury</h1>
          <p className="mt-6 text-gray-600">A curated selection of artisanal watches, leather goods and jewellery — designed to be treasured.</p>
          <div className="mt-8">
            <Link to="/products" className="inline-block bg-black text-white px-6 py-3">Shop the Collection</Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b7c0b7a" alt="luxury" className="w-full h-80 object-cover" />
        </div>
      </div>
    </section>
  )
}