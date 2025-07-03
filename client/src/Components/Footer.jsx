import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-45' alt="" />
          <p>At SS Cricket Shop, we are passionate about delivering top-quality cricket gear trusted by professionals and aspiring players alike. Whether you're looking for bats, gloves, helmets, or pads, we offer authentic products from leading brands like SS, SG, MRF, and Shrey. Gear up with confidence and elevate your game with us!</p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
          </ul>

        </div>
        <div >
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-221-456-7890</li>
            <li>info@cricketshop.com</li>

          </ul>

        </div>

      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>© 2025 Cricket Shop. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
