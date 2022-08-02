import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import weatherA from '../public/assets/weatherA.jpg'
import { BiRadioCircleMarked } from 'react-icons/bi'

function weather() {
  return (
    <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/40 z-10'></div>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={weatherA} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Weather API App</h2>
                    <h3>React Js / CSS </h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p> 
                    WeatherApp shows demonstrate knowledge working in React JS and
                        accessing API endpoints. This app was built using React JS. 
                        Users can choose every city around the world and get the current Weather and another weather data. This application was built using the Open weather map API.</p>
                    <Link href='https://weather-react-dvir.netlify.app/' >
                        <button className='px-8 py-2 mt-4 mr-8 text-white font-bold '>Demo</button>
                    </Link>
                    <Link href='https://github.com/ddvirco/Weather_api'>
                        <button className='px-8 py-2 mt-4  text-white font-bold '>Code</button>
                    </Link>
                    
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='flex items-center py-2 text-gray-600'>
                                <BiRadioCircleMarked /> Javascript
                            </p>
                            <p className='flex items-center py-2 text-gray-600'>
                                <BiRadioCircleMarked /> React
                            </p>
                            <p className='flex items-center py-2 text-gray-600'>
                                <BiRadioCircleMarked /> CSS
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='font-bold underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
  )
}

export default weather