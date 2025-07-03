import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import Testimonial from '../Components/Testimonial'

const Home = () => {
  return (
    <div>
     <Hero/>
     <LatestCollection/>
     <BestSeller/>
     <Testimonial/>
    </div>
  )
}

export default Home
