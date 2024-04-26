import React from 'react'
import Header from '../Components/Header'
import Hero from './Hero'

import About from './About'

const HomePage = () => {
  return (
   <div className='relative z-0 w-[100vw] max-w-screen overflow-x-hidden'>
    

     <div class="absolute   -inset-x-1 inset-y-0 md:-inset-x-2 md:-inset-y-6">
                 <div
                  class="w-full h-[100vh] lg:h-[115vh] bg-hero-pattern bg-cover bg-no-repeat max-w-9xl mx-auto  blur-xs filter"
                  style={{
                  opacity:1
                  }}
                ></div> 
              </div>
          <Header />
        <div className='w-screen max-w-screen bg-white'>
            <Hero/>
        </div>
          <div className='w-screen  bg-white'>
            <About/>
        </div>
          {/* <div className='w-screen bg-white'>
            <Events/>
          </div>
         
          <div className='w-screen bg-white'>
            <Volunteers/>
          </div> */}
          
      
   </div>
  )
}

export default HomePage
