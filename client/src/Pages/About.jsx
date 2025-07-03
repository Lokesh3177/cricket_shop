import react from 'react'
import Title from "../Components/Title"
import { assets } from "../assets/assets"

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='mt-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about} className='w-100 h-100 md:max-w-[450px] ' alt="" />
        <div className='flex flex-col justify-center gap-6 md:2/4 text-gray-600'>
          <p>SS Cricket Accessories is your one-stop destination for premium cricket gear trusted by players across India. We are committed to providing high-quality cricket bats, gloves, pads, helmets, and kits that meet the needs of both beginners and professionals. With a focus on performance, durability, and affordability, our mission is to help every cricketer play with confidence. </p>
          <p>We source products from top brands like SS, SG, MRF, and Shrey to ensure the best on-field experience. Whether you're preparing for a local match or aiming for the big leagues, SS Cricket Accessories is here to support your journey.</p>
          <b className='text-gray-800'>Our Mission </b>
          <p>At Forever Cricket Accessories, we are driven by one simple belief — that every cricketer deserves access to the best equipment, no matter their level or background.

            Our mission is to empower players by providing top-quality cricket gear that enhances performance, encourages confidence, and supports personal growth in the sport.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We deliver cricket gear that's tested for quality, performance, and durability — trusted by players at every level.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Easy shopping, fast delivery, and reliable service — everything you need for cricket, right at your fingertips.</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Friendly support, quick responses, and customer-first care — we're here to help every step of your cricket journey.</p>
        </div>


      </div>
     
    </div>
  )
}

export default About;
