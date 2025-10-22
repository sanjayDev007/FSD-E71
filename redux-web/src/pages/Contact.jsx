import React from 'react'

export default function Contact() {
  return (
    <section className="min-h-screen py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-serif">Contact Us</h1>
        <p className="mt-4 text-gray-600">For enquiries about commissions, stockists or press.</p>

        <form className="mt-8 grid grid-cols-1 gap-4">
          <input placeholder="Name" className="p-3 border rounded" />
          <input placeholder="Email" className="p-3 border rounded" />
          <textarea placeholder="Message" className="p-3 border rounded h-36" />
          <div>
            <button className="bg-black text-white px-6 py-3">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}