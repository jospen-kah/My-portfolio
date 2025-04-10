import React from 'react'
import Navbar from '../components/Navbar'
import { FaGithub} from 'react-icons/fa'
import { MdOutlineMail } from "react-icons/md";
import { TiSocialLinkedinCircular } from "react-icons/ti";


const page = () => {
    return (
        <div>
            <Navbar />
            <div className='flex-1 flex-col md:flex-row  md:px-15 pt-10'>
                <h1 className='px-2 text-7xl font-bold'>Contact Me</h1>
                <div className='flex flex-col md:flex-row p-2 gap-10 md:gap-0 '>
                    <div className='flex flex-1 flex-col gap-4 pt-15'>
                        <div className='bg-[#006884] md:w-1/2    flex gap-2 rounded-3xl  items-center'>
                            <MdOutlineMail className="bg-[#053D57] rounded-full p-1  text-white " size={30} />
                            <a
                                href="mailto:example@example.com"
                                className=" text-white" >
                                ngumkahjospen@gmail.com

                            </a>
                        </div>

                        <div className='bg-[#006884] md:w-1/2   flex gap-2 rounded-3xl  items-center'>
                            <FaGithub className="bg-[#053D57] rounded-full p-1  text-white " size={30} />
                            <a
                                href="https://github.com/jospen-kah"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-white" >
                                /jospen-kah/

                            </a>
                        </div>

                        <div className='bg-[#006884] md:w-1/2  flex gap-2 rounded-3xl  items-center'>
                            <TiSocialLinkedinCircular className="bg-[#053D57] rounded-full p-1  text-white " size={30} />
                            <a
                                href="https://www.linkedin.com/in/kah-jospen-ngum/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-white" >
                                /kah-jospen-ngum/

                            </a>
                        </div>


                    </div>
                    <div className='flex-1 py-4 flex flex-col gap-4 '>
                        <div className='flex  justify-center items-center'>
                            <p className='text-center text-[#006884] w-1/3'>Do you have a job offer send me a message</p>
                        </div>


                        <form className='flex flex-col gap-8 px-2 py-2  items-center justify-center'>
                            <input type='text' name='name' placeholder=' Your Name...' className='w-full bg-[#97BCC7] p-1 rounded-full placeholder-white placeholder-px-2' />
                            <input type='email' name='email' placeholder='Your Email...' className='w-full bg-[#97BCC7] p-1 rounded-full placeholder-white' />
                            <textarea
                                placeholder="Type your message here..." className='w-full bg-[#97BCC7] p-1 rounded-md placeholder-white border-none text-white h-50'>

                            </textarea>
                            <button type='submit' className='px-2 bg-[#053D57] rounded-full text-white cursor-pointer '>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
