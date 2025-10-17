import React from 'react'
import ComB from './ComB'
import { useSelector } from 'react-redux'
function ComA() {
   
  return (
    <>
    Component A
    <br />
    <ComB />
    </>
  )
}

export default ComA