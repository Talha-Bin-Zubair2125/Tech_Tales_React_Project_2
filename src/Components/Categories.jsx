import React from 'react';
import { FaRobot, FaShieldAlt, FaMicrochip, FaCode, FaCloud } from "react-icons/fa";

function Categories() {
    return (
        <div className='bg-black py-10 px-6'>
            {/* Section Title */}
            <div className='container mx-auto text-center sm:text-left mb-8'>
                <h1 className='text-2xl font-bold text-white font-[Montserrat]'>Categories</h1>
            </div>

            {/* Categories Wrapper */}
            <div className='container mx-auto flex flex-col gap-8 items-center sm:items-start'>
                {/* Category#1 */}
                <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
                    <FaRobot className="text-4xl text-blue-500 mb-2" />
                    <h1 className='text-xl sm:text-2xl font-bold text-white font-[Montserrat] mb-2'>
                        Artificial Intelligence
                    </h1>
                    <p className='text-white leading-relaxed text-sm sm:text-md'>
                        Latest trends, breakthroughs, and tools in AI
                    </p>
                </div>

                {/* Category#2 */}
                <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
                    <FaShieldAlt className="text-4xl text-blue-500 mb-2" />
                    <h1 className='text-xl sm:text-2xl font-bold text-white font-[Montserrat] mb-2'>
                        Cyber Security
                    </h1>
                    <p className='text-white leading-relaxed text-sm sm:text-md'>
                        Stay secure with expert tips on privacy and protection
                    </p>
                </div>

                {/* Category#3 */}
                <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
                    <FaCode className="text-4xl text-blue-500 mb-2" />
                    <h1 className='text-xl sm:text-2xl font-bold text-white font-[Montserrat] mb-2'>
                        Web Development
                    </h1>
                    <p className='text-white leading-relaxed text-sm sm:text-md'>
                        Tutorials, frameworks, and tips for modern web apps.
                    </p>
                </div>

                {/* Category#4 */}
                <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
                    <FaMicrochip className="text-4xl text-blue-500 mb-2" />
                    <h1 className='text-xl sm:text-2xl font-bold text-white font-[Montserrat] mb-2'>
                        Gadgets and Devices
                    </h1>
                    <p className='text-white leading-relaxed text-sm sm:text-md'>
                        Reviews and updates on the latest tech gadgets.
                    </p>
                </div>

                {/* Category#5 */}
                <div className='flex flex-col items-center sm:items-start text-center sm:text-left '>
                    <FaCloud className="text-4xl text-blue-500 mb-2" />
                    <h1 className='text-xl sm:text-2xl font-bold text-white font-[Montserrat] mb-2'>
                        Cloud Computing
                    </h1>
                    <p className='text-white leading-relaxed text-sm sm:text-md'>
                        Insights into cloud infrastructure and SaaS tools.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Categories;
