import React from 'react'
import techtales_bgimg from '../Images/techtales_bgimg.jpg'
import { Link } from 'react-router'

import { useState } from 'react'

function Home() {
    // Button State Management
    let [state_change,handle_state_change] = useState('false')
  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen w-full"
        style={{ backgroundImage: `url(${techtales_bgimg})` }}
      >
        {/* Hero Section */}
        <div className="flex flex-col justify-center text-white min-h-[calc(100vh-100px)] px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center sm:text-left">
            
            {/* Tagline */}
            <div className="font-[Roboto, sans-serif] text-lg sm:text-xl font-medium text-gray-200 tracking-wider">
              <p>Your daily spark for smarter living</p>
            </div>

            {/* Heading */}
            <div className="text-2xl sm:text-4xl mt-4 mb-2 font-bold bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent leading-snug">
              <p>5 Game-Changing Tech Trends to Watch in 2025</p>
            </div>

            {/* Description */}
            <div className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 max-w-xl">
              <p>
                From AI breakthroughs to next-gen wearables, explore the innovations that will shape the way we live, work, and connect this year
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-x-2 justify-center sm:justify-start">

              <button
                className="px-5 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full
                  hover:from-teal-400 hover:to-blue-400 hover:scale-105 transition-transform duration-200"
                onClick={() => {
                  const change_style = document.getElementById("Extended_Articles")
                  state_change  = true;
                  handle_state_change(state_change);
                  change_style.classList.remove('hidden')
                  change_style.classList.add('block')
                }}
              >
                Read More!
              </button>

              <button
                className="px-5 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full
                  hover:from-teal-400 hover:to-blue-400 hover:scale-105 transition-transform duration-200"
                onClick={() => {
                  const change_style = document.getElementById("Extended_Articles")
                   state_change  = false;
                  handle_state_change(state_change);
                  change_style.classList.remove('block')
                  change_style.classList.add('hidden')
                }}
              >
                Close!
              </button>
            </div>

          </div>
        </div>
       

      </div>
       <div class="bg-black hidden py-10 px-6" id='Extended_Articles'>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wide mb-6">
                Technology Trends in 2025
                </h2>
                <p className="text-lg leading-relaxed text-gray-300 mb-8">
                In 2025, technology is moving faster than ever — and these trends will be at the forefront:
                </p>
                <div className="space-y-6 text-gray-200">
                <div>
                <h3 className="text-xl font-semibold text-teal-400">Artificial Intelligence Everywhere</h3>
                <p className="mt-2">
                    From personalized health assistants to AI-powered home automation, expect AI to become seamlessly integrated into daily life.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-blue-400">Next-Gen Wearables</h3>
                <p className="mt-2">
                    Wearables won’t just track steps; they’ll monitor stress, hydration, and even mental well-being in real-time.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-green-400">Sustainable Tech</h3>
                <p className="mt-2">
                    Companies are shifting toward green computing, energy-efficient data centers, and recyclable electronics.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-purple-400">Immersive Realities</h3>
                <p className="mt-2">
                    Augmented and virtual reality will merge, creating ultra-realistic experiences for shopping, learning, and work collaboration.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-pink-400">Autonomous Everything</h3>
                <p className="mt-2">
                    Self-driving cars, delivery drones, and AI-managed public transport will redefine mobility.
                </p>
            </div>

            </div>
                <p className="mt-8 text-lg leading-relaxed text-gray-300">
                Whether you’re a tech enthusiast or just curious about the future, these innovations will touch every aspect of our lives. The future isn’t coming — it’s already here.
                </p>
            </div>
        </div>
    </>
  )
}

export default Home
