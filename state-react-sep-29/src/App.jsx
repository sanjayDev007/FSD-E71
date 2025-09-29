import React, { useState } from 'react'

function App() {
  const [product, setProduct] = useState({
    id: 1,
    name: 'Product 1',
    quantity: 0,
  })

  function handleInputChange(e) {
    console.log(e.target)
    const { name, value } = e.target
    // setProduct(prev => ({
    //   ...prev,
    //   [name]: name === 'quantity' ? (value === '' ? '' : Number(value)) : value,
    // }))
    function setValue(prev) {
      if (name === 'quantity') {
        if (value === '') {
          return ''
        } else {
          return Number(value)
        }
      } else {
        return value
      }
    }
    setProduct(prev => ({
      ...prev,
      [name]: setValue(prev),
    }))
  }

  function handleAdd() {
    // Do something with product (e.g., add to a list)
    console.log('Add product:', product)
    // Example: reset fields (keep id the same for now)
    setProduct(prev => ({ ...prev, name: '', quantity: 0 }))
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <label htmlFor="name">Product Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={product.name}
        onChange={handleInputChange}
        className="ml-4 px-4 py-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={product.quantity === 0 ? 0 : product.quantity}
        onChange={handleInputChange}
        className="ml-4 px-4 py-2 border border-gray-300 rounded"
      />
      <button onClick={handleAdd} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">
        Add
      </button>
      <ul className="mt-4">
        <li>{product.name}</li>
        <li>{product.quantity}</li>
      </ul>
    </div>
  )
}

export default App