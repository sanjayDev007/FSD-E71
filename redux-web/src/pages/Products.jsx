import React from 'react'
import { addToCart } from '../store/cartReducer'
import { useDispatch } from "react-redux";


const SAMPLE_PRODUCTS = [
  { id: 'p1', name: 'Noir Timepiece', price: 12950, desc: 'Swiss automatic movement with black onyx dial.', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7b0f2b0a0b4b3a9b' },
  { id: 'p2', name: 'Sable Handbag', price: 8450, desc: 'Hand-stitched leather made by master artisans.', img: 'https://images.unsplash.com/photo-1515548218659-9f6f8ef7f6d4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3e2ab4c8dfd8d5b4' },
  { id: 'p3', name: 'Gilded Cuff', price: 3950, desc: 'Solid gold cuff with silk inlay.', img: 'https://images.unsplash.com/photo-1519741491618-237b3a6a2b24?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8f7f0957d2b6c5d4' },
  { id: 'p4', name: 'Aurum Fragrance', price: 650, desc: 'Limited-edition extrait de parfum.', img: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5c68e06d4c4a7f2b' },
]

export default function Products() {
    const dispatch = useDispatch();
  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-serif tracking-tight">The Collection</h1>
          <p className="mt-2 text-gray-500">Every piece is curated and crafted for the discerning few.</p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SAMPLE_PRODUCTS.map(p => (
            <article key={p.id} className="relative rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${p.img})` }} />
              <div className="p-6">
                <h3 className="font-medium text-lg">{p.name}</h3>
                <p className="text-sm text-gray-500 mt-2">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xl font-semibold">${p.price.toLocaleString()}</div>
                  <button
                    className="inline-flex items-center gap-2 px-3 py-2 bg-black text-white rounded-sm text-sm transition hover:opacity-90"
                    onClick={() => dispatch(addToCart(p))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}