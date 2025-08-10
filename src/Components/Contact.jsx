import React from 'react'
import { useState } from 'react'
function Contact() {
    // for button
    let [state_change,statehandler] = useState(false);
    // for Data Storage
    let [user_data , handle_user_data] = useState({
            "Name":"",
            "Email":"",
            "Review":""
        }
    ) 
    return (
        <>
            <div className='bg-black flex flex-col py-10 px-6 text-white'>
                {/* Heading and Content */}
                <div className='container mx-auto mb-4'>
                    <h1 className='text-2xl font-bold font-[Montserrat] mb-2'>Get in Touch</h1>
                    <p className='leading-relaxed text-md '>We’d love to hear from you! Whether you have a question, feedback, or collaboration idea, feel free to reach out</p>
                </div>
                 
                {/* Input Fields */}
                <div className='flex flex-col container mx-auto mb-4'>
                    <input type="text" name="" id="user_name" className='p-3 mb-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='Enter Your Name'/>
                    <input type="email" name="" id="user_email" className='p-3 mb-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='Enter Your Email' />
                    <textarea name="" id="user_review" className='p-3 mb-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='Enter Your Review About Us'>
                    </textarea>
                    <button className="px-5 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full
                        hover:from-teal-400 hover:to-blue-400 hover:scale-105 transition-transform duration-200 w-50" onClick={()=>{
                            const username = document.getElementById("user_name").value;
                            console.log(username);
                    
                            const useremail = document.getElementById("user_email").value;
                            console.log(useremail);

                            const review = document.getElementById("user_review").value;
                            console.log(review);
                            
                            user_data.Name = username;
                            user_data.Email = useremail;
                            user_data.Review = review;
                            handle_user_data(user_data);
                            // Convert the JSON Object into String
                            const json_string = JSON.stringify(user_data);

                            console.log(json_string);
                            
                            // Storing Data in Local Storage
                            localStorage.setItem("user_info",json_string)

                            // Retrieving Data 
                            const data = localStorage.getItem("user_info");
                            // Convert data into JSON Object
                            const parsed_data = JSON.parse(data);
                            console.log(parsed_data);
                            
                            state_change = true;
                            statehandler(state_change)
                            console.log(state_change);
                            
                        }}>
                        Send Message
                    </button>
                </div>
               
            </div>
        </>
    )
}

export default Contact
