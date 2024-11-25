import React from 'react'
import { features } from '../constants'
import './Feature.css'

function Feature() {
  return (
    <div className='my-16 '>
      <h1 className='text-3xl sm:text-xl lg:text-2xl mt-30 text-center bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text shadow-orange-400/40 ' >Features</h1>
      <h2 className='text-3xl sm:text-xl lg:text-5xl mt-10 text-center'>Easily build 
        <span  className='text-center bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text' >
          {" "}
          your code
        </span>
      </h2>
      <div className='flex flex-wrap mt-10  lg:mt-20 px-20' >
        {features.map((feature, index) =>{
          return (
            <div key={index} className=' md:w-1/2 sm:w-full lg:w-1/3 lg:px-10 py-5'>
              <div className='flex flex-col items-center sm:p-4 w-full h-auto relative z-0 rounded-lg transition-all duration-500 hover:scale-125 hover:ease-in hover:border-2 border-orange-500/40 text-center' >
                <div className='flex justify-center gap-5 items-center text-center '>
                  <div className='w-10 h-10 rounded-full bg-gray-200 bg-opacity-10 text-orange-400 flex justify-center items-center' >{feature.icon}</div>  
                  <h3 className='text-lg sm:text-sm lg:text-xl text-center ' >{feature.text}</h3>
                </div>
                <p className='text-sm sm:text-xs lg:text-sm mt-5' >{feature.description}</p>
              </div>
            </div>    
          )
        } )}

      </div>
    </div>
  )
}

export default Feature
