import React from 'react'
import Navbar from '../components/Navbar'
import Timeline from '../components/Timeline'

function page() {
  return (
    <div className='flex flex-col'>
        <Navbar />
      <div className='flex flex-col  md:flex-row gap-2 px-2 pt-10'>
        <div className='flex-1 flex-col md:flex-row  md:px-15'>
            <h1 className='px-2 text-5xl font-bold'>About Me</h1>
            <div className='pt-5'>
                <p className='text-justify px-2 py-2'>I am a software engineer with over five years of experience in developing high-quality software that solves real-world problems. I am proficient in multiple programming languages such as Java, Python, and C++, as well as modern software development methodologies such as Agile and Scrum. `</p>
                <p className='text-justify px-2 py-2'>My technical expertise is complemented by strong communication and interpersonal skills, allowing me to work effectively with cross-functional teams to deliver software that meets the highest standards of quality.</p>
                <p className='text-justify px-2 py-2'>Overall, I am dedicated to delivering high-quality software that exceeds user expectations and makes a difference in the world.</p>
            </div>
        </div>
        <div className='flex-1 flex-col '>
            <Timeline />
        </div>
      </div>
    </div>
  )
}

export default page
