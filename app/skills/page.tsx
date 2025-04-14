"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar';



function Page() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-col md:flex-row gap-2 px-2 '>
        <div className='flex-1 flex-col md:flex-row  md:px-15'>
          <h1 className='px-2 text-7xl pt-10 font-bold'>Skills</h1>
        </div>
        <div className="flex flex-col md:pr-17 flex-1 container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-8">My Resume</h1>
          <main className="container mx-auto py-10 px-4">



            {isLoading && (
              <div className="flex justify-center items-center h-[500px] border rounded">
                <p>Loading resume...</p>
              </div>
            )}

            <iframe
               src={`/resume.pdf#toolbar=0&navpanes=0`}
              typeof="application/pdf"
              className="w-full h-[800px] border rounded shadow-md"
              onLoad={() => setIsLoading(false)}
              style={{ display: isLoading ? "none" : "block" }}
            />

            <div className="flex justify-end mb-4 pt-2 ">
              <a
                href="/resume.pdf"
                download="resume.pdf"
                className="px-4 py-2  bg-[#053D57] text-white rounded hover:bg-blue-700"
              >
                Download Resume
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Page
