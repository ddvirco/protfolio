import React from 'react'
import Link from 'next/link'
import Typed from 'react-typed'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'


function Main() {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h4 className='uppercase text-sm tracking-widest text-gray-600'>
                    <Typed 
                        strings={["Let's build something great together"]}
                        typeSpeed={100}
                        backSpeed={80}
                        loop
                    />    
                    </h4>
                    <h1 className='py-4 text-gray-700'>Hey, I Am <span className='text-[#5651e5]'> Dvir</span></h1>
                    <h1 className='py-2 text-gray-700'>A Frontend and Fullstack Developer</h1>
                    <p className='max-w-[70%] py-4 m-auto  text-gray-600'>Full stack developer, curious, motivated, able to take ownership of projects,
                        responsible, independent and a team player
                        Self-starter fast learner, and passionate about solving a code challenges.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <Link href='https://www.linkedin.com/in/dvir-cohen-155b94172/' >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100'>
                                <FaLinkedinIn />
                            </div>
                        </Link>
                        <Link href='https://github.com/ddvirco'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100'>
                                <FaGithub />
                            </div>
                        </Link>
                        <Link href='/#contact'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100'>
                                <AiOutlineMail />
                            </div>
                        </Link>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main