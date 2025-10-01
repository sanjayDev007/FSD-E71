import React, {useState, useEffect} from 'react'
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
    useEffect(()=>{
      changeColor();
    }, [count]);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  function changeColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let newColor = "#" + randomColor;
    setColor(newColor);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4" style={{color: color}}>Counter App</h1>
      
      <Counter count={count} color={color} increment={increment} decrement={decrement} reset={reset}/>
      <div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Products</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} className='border p-2 rounded mb-4' placeholder='Product Name'/>
      <input type="number" onChange={(e) => setPrice(e.target.value)} className='border p-2 rounded mb-4' placeholder='Product Price'/>
      <button onClick={() => setProducts((prev)=> [...prev, {id: new Date().getTime(), name, price}])} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 mb-4">
        Add Product
      </button>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price} <button onClick={() => setProducts(products.filter((p) => p.id !== product.id))} className="text-red-500 hover:text-red-700">Remove</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default App