"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

function Header() {
  return (
    <div className=' bg-transparent  flex flex-col md:flex-row md:justify-between md:px-20 md:py-5 px-5'>
      <div className='flex flex-col justify-center flex-1 py-30'>
        <h1 className='text-5xl font-bold text-[#053D57] '>Hi, I am Kah Jospen!</h1>
        <h2 className='text-4xl font-bold text-[#006884]'>Software Engineer</h2>
        <div className='flex py-2 '>
          <Link href="/contact" className='flex   bg-[#053D57] text-white px-5 py-2 rounded-3xl mt-5'>Contact Me</Link>
          <div className='flex flex-1 px-3  items-center pt-5 gap-1'>
            <Link href=''><FaGithub size={30} /></Link>
            <Link href=''> <FaLinkedin size={30} /></Link>

          </div>
        </div>
      </div>
      <div className="flex-1">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            fill="#97BCC7"
            d="M50.2,-73.5C61.8,-60.6,65.7,-41.6,68.5,-24.3C71.3,-7,73,8.6,70.8,25.4C68.7,42.2,62.7,60.1,50.2,70.7C37.8,81.3,18.9,84.6,3.2,80.3C-12.5,75.9,-25.1,63.8,-35.1,52.4C-45.1,41,-52.7,30.3,-59.6,17.4C-66.5,4.5,-72.8,-10.6,-70.6,-24.7C-68.4,-38.7,-57.7,-51.8,-44.6,-64.1C-31.4,-76.5,-15.7,-88.2,1.8,-90.7C19.3,-93.2,38.6,-86.4,50.2,-73.5Z"
            transform="translate(100 100)"
          />
          <image
            href="/images/jospen.png"
            x="55" y="30"
            width="100" height="100"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      </div>

    </div>
  )
}

export default Header
