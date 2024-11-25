import React from 'react'
import { testimonials } from '../constants'

function Testimonials() {
  return (
    <div className=' /*border-2 */ sm:mt-20 mt-0' >
         <h2 className='text-3xl sm:text-3xl lg:text-5xl mt-10 sm:mt-20 text-center'>What People Are Saying</h2>
     <div className='flex flex-wrap mt-10 lg:mt-20 px-20' >
        {testimonials.map((testimonial, index) =>{
          return (
            <div key={index} className=' md:w-1/2 sm:w-full lg:w-1/3 lg:px-10 py-5'>
              <div className='flex h-full flex-col items-center sm:p-4 w-full relative z-0 rounded-lg transition-all duration-300 hover:scale-105 hover:ease-in border-2 border-neutral-700 hover:border-2 hover:border-orange-500/40 text-center' >
                <div className='flex justify-center gap-5 items-center text-center '>
                <p className='text-sm sm:text-xs lg:text-sm font-thin' >{testimonial.text}</p>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5 text-center '>        
                  <img src={testimonial.image} alt="" className='w-10 h-10 rounded-full bg-gray-200 bg-opacity-10 text-orange-400 flex justify-center items-center' />  
                  <h3 className='text-lg sm:text-sm lg:text-xl text-center' >{testimonial.user}</h3>
                </div>
              </div>
            </div>    
          )
        } )}

      </div>
    </div>
  )
}

export default Testimonials
