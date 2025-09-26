import React from 'react'
import ServicesCard from './ServicesCard'

function Services() {
  return (
    <>
        <div className='w-full flex flex-col items-center justify-center mt-20 space-y-10 py-20 bg-white'>
            <section className='w-full flex items-center justify-self-start pl-24 space-x-12'>
                <h1 className='text-4xl font-bold p-2 bg-lime-300 rounded-lg'>Our Services</h1>
                <p className='text-md font-normal w-[500px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis tenetur nihil ipsa ratione autem iure.</p>
            </section>
            <section>
               <ServicesCard     />
            </section>
        </div>
    </>
  )
}

export default Services