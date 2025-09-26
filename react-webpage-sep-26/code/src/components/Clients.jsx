import React from 'react'

function Clients() {
  return (
    <>
        <section className='w-full flex flex-col items-center justify-center mt-20 space-y-10 py-20 bg-gray-100'>
            <h1 className='text-4xl font-bold'>Our Clients</h1>
            <p className='text-md font-normal w-[500px] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis tenetur nihil ipsa ratione autem iure alias reiciendis vitae asperiores laudantium.</p>
            <div className="w-full client-logos flex space-x-10 justify-evenly">
                <h1 className='text-3xl font-normal'>Amazon</h1>
                <h1 className='text-3xl font-normal'>Google</h1>
                <h1 className='text-3xl font-normal'>Microsoft</h1>
                <h1 className='text-3xl font-normal'>Meta</h1>
            </div>
        </section>
    </>
  )
}

export default Clients