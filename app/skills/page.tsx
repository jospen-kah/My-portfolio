"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';


const ResumePreview = dynamic(() => import('../components/DocumentPreview'), {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  });
function page() {
    const [mounted, setMounted] = useState(false);

    // Make sure the component only renders on the client
    useEffect(() => {
      setMounted(true);
    }, []);

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-col md:flex-row gap-2 px-2 '>
        <div className='flex-1 flex-col md:flex-row  md:px-15'>
          <h1 className='px-2 text-5xl font-bold'>Skills</h1> 
        </div>
        <div className="flex flex-1 container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Resume</h1>
      {mounted && <ResumePreview />}
    </div>
      </div>
    </div>
  )
}

export default page
