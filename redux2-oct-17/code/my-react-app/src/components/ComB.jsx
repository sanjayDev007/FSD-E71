import React from 'react'
import ComC from './ComC'
import { useDispatch } from 'react-redux'

function ComB() {
  const dispatch = useDispatch()
  return (
 <>
    Component B
    <br />
   <button onClick={() => dispatch({type: "RESET"})} style={{ margin: '5px', padding: '10px 20px', backgroundColor: 'gray', color: 'white', border: 'none', borderRadius: '5px' }}>Reset</button>
    <ComC />
    </>
  )
}

export default ComB