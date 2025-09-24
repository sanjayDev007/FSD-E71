import React from 'react'

function MainSection() {
  return (
    <>        <main className='w-full flex items-start justify-center flex-grow gap-5'>
          <div className='max-w-2xl text-center flex flex-col items-center mt-24 p-6'>
          <h2 className='text-2xl font-bold text-gray-800'>Welcome to our website!</h2>
          <p className='mt-4 text-gray-600'>This is a simple example of a React app with Tailwind CSS.</p>
          </div>
          <div style={{background: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'}} className='max-w-full h-100'>

          </div>
        </main></>
  )
}

export default MainSection