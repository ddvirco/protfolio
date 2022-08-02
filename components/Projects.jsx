import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import contact from '../public/assets/contact.jpg'
import ProjectItem from './ProjectItem'
import coinsApp from '../public/assets/coinsApp.JPG'
import codescreen from '../public/assets/codescreen.jpg'
import weatherA from '../public/assets/weatherA.jpg'

function Projects() {

  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I have built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem photo={coinsApp} title='App coin' projectUrl='/coins'  />
                <ProjectItem 
                photo={weatherA} 
                title='Weather App' projectUrl='/weather'/>
                
            </div>
        </div>
    </div>
  )
}

export default Projects