import React from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'
import { Menu, X} from 'lucide-react'
import { useState } from 'react'


function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
  return (
    <div className='h-12 border-2 border-black sticky gap-52 backdrop-blur-lg top-0 border-bold border-neutral-700/80 flex justify-around items-center' >
        <div className='  flex justify-center items-center py-2 gap-2 flex-shrink-0' >
            <img className='w-8 h-8' src={logo} alt="" />
            <span className='tracking-tight text-xl' >VirtuEdge</span>
        </div>
        <ul className=' hidden lg:flex ml-14 gap-10' >
            {navItems.map((item, index) => (
                <li key={index}>
                    <a href={item.href} >{item.label}</a>
                </li>
            ))}
        </ul>
        <div className=' hidden lg:flex justify-center items-center gap-4' >
            <a href="#" className=' px-2 py-1 border-2 border-white rounded-md' >sign in</a>
            <a href="" className=' px-2 py-1  rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:shadow-orange-500/40 hover:ease-in duration-300' >Create on account </a>
        </div>
        <div className=' lg:hidden md:flex flex-col justify-end ' >
            <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
            {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:shadow-orange-500/40 hover:ease-in duration-300"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
            
        </div>

    </div>

    
  )
}

export default Navbar
