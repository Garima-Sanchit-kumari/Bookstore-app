import React from 'react'
import { Link } from "react-router-dom";


function Contact() {
    
    
  return (
    <>
    <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl  md:text-4xl">Contact</h1>
        <div className="mt-4 space-y-2">
            <span className='mr-52 '>First Name</span>
            <br />
            <input
                type="text"
                placeholder="First Name"
                className="w-80 px-3 py-1 border rounded-md outline-none"  
            />         
        </div>
        <div className="mt-4 space-y-2">
            <span className='mr-52 '>Last Name</span>
            <br />
            <input
                type="text"
                placeholder="Last Name"
                className="w-80 px-3 py-1 border rounded-md outline-none"  
            />         
        </div>
        <div className="mt-4 space-y-2">
            <span className='mr-60 '>Email</span>
            <br />
            <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                
            /> 
            
               
        </div>
        <div className="mt-4 space-y-2">
            <span className='mr-44 '>Phone Number</span>
            <br />
            <input
                type="number"
                placeholder="Enter your phone number"
                className="w-80 px-3 py-1 border rounded-md outline-none"  
            />         
        </div>
        <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                Submit
            </button>
        </Link>
    </div>
   
    </>
  )
}

export default Contact