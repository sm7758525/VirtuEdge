import React from 'react'
// import { createIcons, icons } from 'lucide-react';
import { CiCircleCheck } from "react-icons/ci";
import codeImg from '../assets/code.jpg'
import { checklistItems } from '../constants'

function Workflow() {
  return (
    <div className='mt-10 sm:mt-5 p-10 '>
        <h1 className='text-3xl sm:text-2xl lg:text-5xl tracking-wide text-center mt-6' >
            Accelerate your 
            <span className='text-center bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text' >
              {" "}
              Coding Workflow
            </span>
        </h1>
        <div className='flex flex-wrap justify-center' >
            <div className='w-full px-20 lg:w-1/2 p-10 mt-5 flex '>
               <img src={codeImg} alt="code" />
            </div>
            <div className='pt-20 sm:pt-0 w-full lg:w-1/2'>
            {checklistItems.map((item, index) => (
                <div key={index} className='flex items-center gap-10 mt-5' >
                    <div className='w-10 h-10 rounded-full bg-gray-200 bg-opacity-10 text-orange-400 flex justify-center items-center' >
                        <CiCircleCheck className='w-6 h-6' />
                    </div>
                    <div className='flex-wrap my-5'>
                        <h3 className='text-lg sm:text-sm lg:text-xl' >{item.title}</h3>
                        <p className='text-sm sm:text-xs lg:text-md mt-5' >{item.description}</p>
                    </div>
                </div>
        
            ))}


            </div>

        </div>
    </div>
  )
}

export default Workflow
