import React from 'react'
import { Link } from 'react-router-dom'

const CardDetail = () => {
  return (
    <div className="min-h-screen text-white bg-webBg flex flex-col gap-6 items-center px-4 md:px-8 lg:px-16">
      <img src='../images/Maintenance.svg' alt='maintainance' className='w-[500px] pt-28'/>
      <h1 className='text-[80px] text-center name -mt-10'>503</h1>
      <span className='text-[30px] desc -mt-10 opacity-50'>(service unavailable)</span>
      <h1 className='desc text-2xl text-center sm:text-4xl'>Sorry! We Are Under Maintenance</h1>
      <p className='desc text-[16px] sm:text-[20px] tracking-wide text-center'>We apologize for the inconvenience, but our platform is currently undergoing maintenance. Please check back soon.</p>
      <p className='desc text-[16px] sm:text-[20px] tracking-wide text-center'>If you need to reach us, feel free to contact us anytime at <a href="mailto:support@fincust.com">support@fincust.com</a></p>
      <Link to="/" className="border border-sageGreen rounded-lg mt-4 bg-pineGreen text-navText name text-[15px] sm:text-[17px] tracking-wider px-10 py-3 hover:cursor-pointer hover:bg-buttonHover hover:text-black hover:border-buySellBorder hover:transition-all hover:scale-105 mb-16"><button>Back to Home Page</button></Link>
    </div>
  )
}

export default CardDetail