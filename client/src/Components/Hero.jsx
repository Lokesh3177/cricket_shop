import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* Hero left side */}
            <div className='sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141] px-4 sm:px-0'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BEST SELLER</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
                        Latest Arrivals
                    </h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>

                    {/* Abhinav Mukund Quote */}
                    <div className="mt-6 p-4 bg-gray-100 border-l-4 border-gray-400 text-gray-700 italic text-sm sm:text-base max-w-md shadow-sm">
                        <p>
                            “Fair is not the only lovely or handsome guys! Stay true, stay focussed and be comfortable in your own skin.”
                        </p>
                        <p className="text-right font-semibold mt-2">— Abhinav Mukund</p>
                    </div>
                </div>
            </div>

            {/* Hero Right side */}
            <img className='w-full sm:w-1/2 object-cover' src={assets.hero} alt="" />
        </div>
    )
}

export default Hero
