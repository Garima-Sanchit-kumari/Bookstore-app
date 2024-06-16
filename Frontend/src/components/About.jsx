import React from 'react'
import Book from "../../public/Book.jpg"
import { Link } from "react-router-dom";
function About() {
  return (
    <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-24'>
          <div className='space-y-8'>
          <h1 className="text-2xl  md:text-4xl">About</h1>
            <p className='text-xl '>
              Lorem, ispum dolor sit amet consectetur elit. Dolor, et 
              totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
              
            </p>
            
          </div>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className='order-1 w-full md:w-1/2 '>
           <img src={Book} className='w-92 h-92' alt="" />
        </div>
      </div>
    </>
  )
}

export default About