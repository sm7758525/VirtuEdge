import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import Feature from './components/Feature'
import Workflow from './components/Workflow'
import Price from './components/Price'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
   <div >
    <Navbar />
    <Hero />
    <Feature />
    <Workflow />
    <Price />
    <Testimonials />
    <Footer />
   </div>
  )
}

export default App
// for icons use lucide react