import React from 'react'
import Form from './Form'

function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 bg-blue-500">
        <Form />
      </div>
      <div className="hidden md:flex w-1/2 bg-green-500 flex justify-end">
      <div className="text-gray-300 mx-5 ">COMING SOON</div>
        <img className="" src="/images/sidepic.png" alt="placeholder" />
      </div>
    </div>
  )
}

export default HeroSection