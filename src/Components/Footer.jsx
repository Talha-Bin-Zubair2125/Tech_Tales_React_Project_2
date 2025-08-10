import React from 'react'
import { Link } from "react-router-dom"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
    return (
        <>
            {/* Parent */}
            <div className='bg-black flex flex-col md:flex-row justify-around gap-10 py-10 px-6 h-100vh '>

                {/* Site Name */}
                <div className='w-full md:w-auto'>
                    <h1 className='text-2xl font-bold text-white font-[Montserrat]'>TechTales</h1>
                    <p className='text-sm text-gray-400 tracking-wide bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text'>
                        Innovating the Future, Today
                    </p>
                </div>

                {/* Quick Links */}
                <div className='flex flex-col gap-y-3 text-white text-sm w-full md:w-auto'>
                    <h1 className='text-2xl font-bold text-white font-[Montserrat]'>Links</h1>
                    <Link to="/">Home</Link>
                    <Link to="/Categories">Categories</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                    <Link to="/Termsofservice">Terms Of Service</Link>
                </div>

                {/* Social Links */}
                <div className="flex flex-col gap-y-3 w-full md:w-auto">
                    <h1 className='text-2xl font-bold text-white font-[Montserrat]'>Social Links</h1>
                    <ul className='flex gap-4'>
                        <li>
                            <a href="https://www.linkedin.com/in/talha-bin-zubair-8a45a92a0/?trk=PROFILE_DROP_DOWN"
                                target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-500 hover:text-blue-700 text-2xl md:text-3xl" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Talha-Bin-Zubair2125"
                                target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-white hover:text-gray-400 text-2xl md:text-3xl" />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className='flex flex-col gap-y-3 text-white w-full md:w-auto'>
                    <h1 className='text-2xl font-bold text-white font-[Montserrat]'>Contact Us</h1>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center gap-2'>
                            <FaEnvelope className="text-blue-500 hover:text-blue-700 text-xl md:text-2xl" />
                            <span className='text-sm sm:text-base'>talhazubair2125@gmail.com</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaPhoneAlt className="text-white hover:text-gray-400 text-xl md:text-2xl" />
                            <span className='text-sm sm:text-base'>+92-3340979437</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaMapMarkerAlt className="text-white hover:text-gray-400 text-xl md:text-2xl" />
                            <span className='text-sm sm:text-base'>Karachi, Pakistan</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Developed By */}
            <div className='bg-black text-white'>
                <p className="text-center text-xs md:text-sm py-3 text-gray-400">
                    &copy; 2025 Developed by Talha Bin Zubair. All rights reserved.
                </p>
            </div>
        </>
    )
}

export default Footer
