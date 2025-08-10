import React from 'react'

function About() {
    return (
        <>
        {/* Parent */}
            <div className='bg-black flex flex-col py-10 px-6 '>
                {/* Heading with Content */}
                <div className='container mx-auto mb-4'>
                    <h1 className='text-2xl font-bold text-white font-[Montserrat] mb-2'>About Us</h1>
                    <p className='text-white leading-relaxed text-md '>
                        We are passionate about creating content that inspires, informs, and connects. Our mission is to share stories, tips, and insights that empower our readers to explore new ideas, improve their lifestyles, and stay ahead in an ever-changing world. Whether it’s tech trends, travel inspiration, or lifestyle hacks, we bring you fresh and reliable content — straight from our hearts to your screen
                    </p>
                </div>
                {/* Key Points */}
                <div className='container mx-auto'>
                    <h1 className='text-2xl font-bold text-white font-[Montserrat] mb-2'>Key Points</h1>
                    <div className='ml-5 text-white leading-relaxed text-md'>
                        <ul className='list-disc'>
                            <li>Trusted by thousands of readers monthly</li>
                            <li>Committed to quality and authenticity</li>
                            <li>Bringing global ideas to your fingertips</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
