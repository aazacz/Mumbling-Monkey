import React from 'react'
import monkey from "/monkey.svg"
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col bg-[#154e46]'>
      <div className='w-1/2  flex flex-col justify-center items-center'>
        <h1 className='font-extrabold text-white text-5xl'>404 ERROR</h1>
        <img src={monkey} className='w-2/3 drop-shadow-xl' alt="" />
        <h1 className='font-extrabold text-white text-5xl'> Oops! PAGE NOT FOUND</h1>
        <Link to={"/"}>
        <button className='font-bold text-white text-xl px-5 mt-4 rounded-lg py-2 hover:bg-violet-500 bg-violet-800'> Homepage</button>
        </Link>

      </div>





    </div>
  )
}

export default ErrorPage