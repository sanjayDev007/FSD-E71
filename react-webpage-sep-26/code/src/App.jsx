import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'

function App() {
  return (
    <>
      <div className="App relative w-full h-[100vh]">
        <Navbar />
        <Hero />
        <Clients />
        <Services />
      </div>
    </>
  )
}

export default App