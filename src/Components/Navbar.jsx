import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <> 
      {/* Navigation Bar */}
      <div className="flex flex-col md:flex-row justify-around items-center bg-black px-4 py-3"> 
        {/* Website Name */}
        <div className="mb-2 md:mb-0">
          <h1 className="text-2xl md:text-4xl text-white font-[Montserrat]">TechTales</h1>
        </div>

        {/* Navigation Links */}
        <div className="font-[Montserrat] text-white flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-3 font-semibold text-base md:text-lg text-center">
          <Link to="/">Home</Link>
          <Link to="/Categories">Categories</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
