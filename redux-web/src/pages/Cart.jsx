import React from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { clearCart, setQuantity, removeFromCart } from '../store/cartReducer';

export default function Cart() {
 const { cart } = useSelector(state => state);
 const dispatch = useDispatch();

  const subtotal = cart.reduce((s, it) => s + it.price * it.quantity, 0)

  return (
    <section className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-serif">Your Cart</h1>
          <button className="text-sm text-gray-500 hover:underline" onClick={() => dispatch(clearCart())}>Clear cart</button>
        </div>

        {cart.length === 0 ? (
          <div className="p-12 bg-white rounded shadow text-center">
            <p className="text-gray-600">Your cart is empty. Explore our collection and add something timeless.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map(i => (
                <div key={i.id} className="flex items-center gap-4 p-4 bg-white rounded shadow">
                  <div className="w-28 h-20 bg-cover bg-center rounded" style={{ backgroundImage: `url(${i.img || ''})` }} />
                  <div className="flex-1">
                    <div className="font-medium">{i.name}</div>
                    <div className="text-sm text-gray-500">${i.price.toLocaleString()}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-2 py-1 border" onClick={() => dispatch(setQuantity(i.id, Math.max(1, i.quantity - 1)))}>
                      -
                    </button>
                    <div className="px-3">{i.quantity}</div>
                    <button className="px-2 py-1 border" onClick={() => dispatch(setQuantity(i.id, i.quantity + 1))}>+</button>
                  </div>
                  <div className="w-28 text-right">
                    <div className="font-semibold">${(i.price * i.quantity).toLocaleString()}</div>
                    <button className="text-sm text-red-600 mt-1" onClick={() => dispatch(removeFromCart(i.id))}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="bg-white p-6 rounded shadow">
              <div className="text-gray-500">Summary</div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm">Subtotal</div>
                <div className="font-semibold text-xl">${subtotal.toLocaleString()}</div>
              </div>
              <button className="mt-6 w-full bg-black text-white py-3">Proceed to Checkout</button>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}
