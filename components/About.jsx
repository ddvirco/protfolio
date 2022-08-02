import React from 'react'
import Image from 'next/image'
import codeScreen from '../public/assets/codescreen.jpg';

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest'>About</p>
                <h2 className='py-4 text-[#5651e5]'>Who I am</h2>
                <p className='py-2  text-gray-600'>During my several years in the pension and insurance industries, my roles ranged from customer success manager to project manager. In 2021, I started learning web development as I entered the Hi-Tech industry. </p>
                <p className='py-2 text-gray-600'>My journey included many courses, hundreds of practice hours, and thousands of code lines written. I began by learning the client side as Frontend, after which I learned Backend and Database, and how to best connect them all. Today, my journey continues, as I am now spending my time studying new technologies and new work methods. </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check my projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={codeScreen} alt='/' />
            </div>
        </div>
    </div>
       
  )
}

export default About