"use client"
import React from 'react'
import Navbar from '../components/Navbar';



function page() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-col md:flex-row gap-2 px-2 '>
        <div className='flex-1 flex-col md:flex-row  md:px-15'>
          <h1 className='px-2 text-5xl font-bold'>Skills</h1> 
        </div>
        <div className="flex flex-1 container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Resume</h1>
      
    </div>
      </div>
    </div>
  )
}

export default page
