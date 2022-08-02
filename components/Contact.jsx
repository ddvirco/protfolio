import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {BsChevronDoubleUp} from 'react-icons/bs'


function Contact() {

    const [messageData, setMessageData] = useState({name: '', phone: '',
                                email: '', subject: '', message: '' })

    const displayData = (e) => {
        e.preventDefault()
        console.log(messageData)
    }
    
    const clearForm = () => {
        setMessageData({name: '', phone: '',
      email: '', subject: '', message: '' })
    }
    
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                <h2 className='py-4'>Get in touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://media.istockphoto.com/photos/woman-clerk-in-the-office-holding-paper-sticker-with-the-word-call-me-picture-id1143215637?b=1&k=20&m=1143215637&s=170667a&w=0&h=QDweV-n9rnQXIKXALngsfpDopFlRIErv6FlfjPCU9wc=' alt='' />
                            </div>
                            <div>
                                <h2 className='py-2'>Dvir Cohen</h2>
                                <p>Frontend developer</p>
                                <p>I am available for freelance or full-time positions. Contact me and let's talk.</p>
                                <p className='font-bold text-3xl'>ddvirco@gmail.com</p>
                                <p className='font-bold text-3xl'>054-4553208</p>
                            </div>
                            <div>
                                <p className=' uppercase pt-8'>Connect with me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100'>
                                        <Link href='https://www.linkedin.com/in/dvir-cohen-155b94172/'>
                                            <FaLinkedinIn />
                                        </Link>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100'>
                                        <Link href='https://github.com/ddvirco'>
                                            <FaGithub />
                                        </Link>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100'>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className='col-span-3  w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4' >
                        <div className='p-4'>
                            <form onSubmit={clearForm} 
                                action='https://getform.io/f/11f04dfe-4f96-4320-bfa2-287bdae83a25'
                                method="POST">
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input type='text' value={messageData.name} name='name' onChange={(e) => {setMessageData({...messageData, name: e.target.value})}}
                                        className='border-2 rounded-lg p-3 flex border-gray-300' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone</label>
                                        <input type='phone' value={messageData.phone} name='phone' onChange={(e) => setMessageData({...messageData, phone: e.target.value})}
                                        className='border-2 rounded-lg p-3 flex border-gray-300' />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                        <label className='uppercase text-sm py-2'>Email</label>
                                        <input type='email' value={messageData.email} name='email' onChange={(e) => {setMessageData({...messageData, email: e.target.value})}}
                                         className='border-2 rounded-lg p-3 flex border-gray-300' />
                                </div>
                                <div className='flex flex-col py-2'>
                                        <label className='uppercase text-sm py-2'>Subject</label>
                                        <input type='text' value={messageData.subject} name='subject' onChange={(e) => {setMessageData({...messageData, subject: e.target.value})}}
                                        className='border-2 rounded-lg p-3 flex border-gray-300' />
                                </div>
                                <div className='flex flex-col py-2'>
                                        <label className='uppercase text-sm py-2'>Message</label>
                                        <textarea rows='10' value={messageData.message} name='message' onChange={(e) => {setMessageData({...messageData, message: e.target.value})}}
                                        className='border-2 rounded-lg p-3 border-gray-300' />
                                </div>
                                <button className='w-full text-gray-100 p-4 border-lg mt-4'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer ease-in duration-300 hover:scale-110'>
                        <BsChevronDoubleUp size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact