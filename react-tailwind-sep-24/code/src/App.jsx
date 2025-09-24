import React from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'

function App() {
  return (
    <>
      <div className='min-h-screen flex flex-col items-center  relative bg-gray-100'>
        <Navbar />
        <MainSection  />
        <article>
          <div className='max-w-4xl text-center flex flex-col items-center mt-24 p-6'>
            <h2 className='text-2xl font-bold text-gray-800'>About Us</h2>
            <p className='mt-4 text-gray-600'>We are committed to providing the best service possible. Our team is dedicated to ensuring customer satisfaction and delivering high-quality products.</p>
          </div>
        </article>

        <footer className='w-full p-4 bg-white shadow-inner text-center'>
          <p className='text-gray-600'>&copy; 2024 My Website</p>
        </footer>
      </div>
    </>
  )
}

export default App
