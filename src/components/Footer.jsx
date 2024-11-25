import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../constants'

function Footer() {
  return (
   <footer className='mt-20 border-t py-10 border-neutral-700'>
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='flex flex-col px-10' >
            <h2 className='text-md font-semibold mb-4 '>Resources</h2>
            <ul className='text-sm space-y-2'>
                {resourcesLinks.map((link, index) => (
                    <li className='gap-5 text-neutral-300 hover:text-white' key={index} >
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className='flex flex-col px-10' >
            <h2 className='text-md font-semibold mb-4 '>Platform</h2>
            <ul className='text-sm space-y-2'>
                {platformLinks.map((link, index) => (
                    <li className='gap-5 text-neutral-300 hover:text-white' key={index} >
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className='flex flex-col px-10' >
            <h2 className='text-md font-semibold mb-4 '>Community</h2>
            <ul className='text-sm space-y-2'>
                {communityLinks.map((link, index) => (
                    <li className='gap-5 text-neutral-300 hover:text-white' key={index} >
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>

    </div>
   </footer>
  )
}

export default Footer
