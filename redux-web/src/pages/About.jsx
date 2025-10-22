import React from 'react'

export default function About() {
  return (
    <section className="min-h-screen py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-serif">Our Philosophy</h1>
        <p className="mt-6 text-gray-600">We collaborate with artisans and ateliers to craft small-batch objects of desire. Materials are responsibly sourced, and every detail is considered.</p>
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-medium">Craftsmanship</h3>
            <p className="mt-2 text-sm text-gray-500">Handmade techniques passed across generations.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-medium">Materials</h3>
            <p className="mt-2 text-sm text-gray-500">Only the finest leathers, metals and essences.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-medium">Limited</h3>
            <p className="mt-2 text-sm text-gray-500">Small production runs for exclusivity and quality.</p>
          </div>
        </div>
      </div>
    </section>
  )
}