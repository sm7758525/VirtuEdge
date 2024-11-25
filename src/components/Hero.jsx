import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

function Hero() {
  return (
    <div className=' /*border-2  border-white*/ flex flex-col item-center px-10 py-5 mt-6 ' >
      <div className='text-center' >
        <h1 className='text-4xl sm:text-6xl lg:text-7xl tracking-wide ' >
        VirtuEdge Build tools 
          {" "}
          <span className='text-center bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text' >
              for Developers
          </span> 
        </h1>
      </div>
      <div className='text-center lg:px-36'>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      </div>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className='flex items-center mt-10 gap-2.5 '>
      <video loop autoPlay muted className='rounded-md w-1/2 border border-orange-700 shadow-orange-400 my-4' >
        <source src={video1} type='video/mp4' />
        your browser does not support the video tag
      </video>
      <video loop autoPlay muted className='rounded-md w-1/2 border border-orange-700 shadow-orange-400 my-4' >
        <source src={video2} type='video/mp4' />
        your browser does not support the video tag
      </video>

      </div>
    </div>
  )
}

export default Hero
