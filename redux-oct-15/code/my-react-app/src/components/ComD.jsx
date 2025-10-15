import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useContext } from 'react'
import { CountContext } from '../store'

function ComD() {
  const { count, setCount, color, setColor } = useContext(CountContext)
  function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
   <>
   Component D
   Count: {count}
   <p style={{ color }}>Color</p>
   <button onClick={() => setColor(randomColor())} style={{ margin: '5px', padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px' }}>Change Color</button>
   <br />
   <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>Increment</button>
   <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>Decrement</button>
   </>
  )
}

export default ComD