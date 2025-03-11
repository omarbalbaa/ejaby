import React from 'react'
import ContactUs from './ContactUs'

function Footer() {
  return (
    <div className='bg-[#013448] text-[#d9e0e3] py-9'>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='flex flex-col items-center py-9'>
          <img src="/images/logonavy.jpg" alt="logo" className="w-3xs px-9" />
        </div>
        <ContactUs />
        <div className='flex flex-col items-start text-xl lg:items-start justify-center pr-9'>
          <span>TAX REGISTRATION NUMBER</span>
          <span>12345678</span>
        </div>
      </div>
    </div>
  )
}

export default Footer