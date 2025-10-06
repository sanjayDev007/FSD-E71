import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar';

function App() {
  const [state,setState] = useState(false);
  const [rerunUseEffect,setRerunUseEffect] = useState(false);
  const [products,setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        let sortedProducts = [...data];
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        setProducts(sortedProducts);
      });
    console.log("useEffect 3")
  }, [rerunUseEffect]);
  console.log("Component Rendered 1")
  return (
   <>
    <div className="text-3xl font-bold underline">
      {console.log("JSX Rendered 2")}
      <Navbar name="Product Listing" products={products} setProducts={setProducts} setRerunUseEffect={setRerunUseEffect} />
      <button onClick={() => setRerunUseEffect(!rerunUseEffect)}>Test</button>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 m-4">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <img src={product.image} alt={product.title} className="w-32 h-32 object-contain" />
          </div>
        ))}
      </div>
    </div>
   </>
  )
}

export default App