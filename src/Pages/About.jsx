import React from 'react'
import ReactPlayer from 'react-player'
import { msrit, video } from '../assets'

const About = () => {
  return (
    <section className='w-full flex flex-col mt-8 lg:py-5 lg:px-[120px] px-10 h-full text-black'>
      <div className='mb-5 flex lg:flex-row flex-col w-full gap-x-10 gap-y-10 lg:py-20 justify-start items-start'>
        <div className=' lg:w-[50%] h-auto flex flex-col justify-start items-start'>
        <h1 className='text-[40px] mb-5 font-bold text-[#3f4161]'>About <span className='text-pink-500'>RIT</span></h1>
       
                    <p className='lg:text-[18px] font-medium text-justify'>
Established in 1962 by the visionary Dr. M.S.
Ramaiah, Ramaiah Institute of Technology has only grown over the years and is one of the most prestigious engineering institutions in India. Offering a variety of courses at UG, PG and Doctorate level, RIT has established itself as a centre of excellence for high quality education. Industry orientated teaching programs and high placement records, guarantee aspiring students a bright future in whichever field they choose to pursue. It stands strong as a bastion of knowledge and free thinking.
</p>
        </div>
        <div className="lg:w-[50%] mx-auto rounded-full flex justify-center items-center ">
          <img src={msrit} alt="" srcset=""  />
        </div> 
      </div>
     <div className='my-5'>
       <div>
<h1 className='text-[40px] mb-1 font-bold text-[#3f4161]'>About <span className='text-pink-500'>Udbhav</span></h1>      </div>
      <div className='flex flex-col lg:flex-row w-full'>
        <div className='w-full lg:w-1/2 h-full lg:my-auto my-5 lg:m-5 '>
          <ReactPlayer url={video} width="100%" height="100%" playing={false} controls={true} />
        </div>
        <div className='w-full lg:w-1/2 lg:m-5'>
          <p className='lg:text-[18px] font-medium lg:mx-5 text-justify'>
Come summer, Bangalore stands witness to a host of college festivals. UDBHAV, the cultural festival of RIT has secured a place in the hall of fame by being among the best college fests of South India. It offers a platform for showcasing the limitless talent of students from all across the state and country. By conducting a plethora of events, UDBHAV attracts crowds in thousands. The who's who of modern and contemporary music find a stage to perform here. Ergo UDBHAV invariably stands a class apart and remains the cultural hotspot this festive season.          </p>
        </div>
      </div>
     </div>
      <div className='my-5'>
      <div>
<h1 className='text-[40px] mb-5 font-bold text-[#3f4161]'>Voyage through <span className='text-pink-500'>TIME</span></h1>      </div>
      <div className='w-full'>
        
        
          <p className='lg:text-[18px] font-medium lg:mx-5 text-justify'>
We the M.S.Ramaiah institute of technology present before you a beautiful journey of life which is binded with lots of memories sailing down through the voyage of time. As we move through time, we experience an ongoing voyage that takes us through a range of emotions and experiences. Time moves forward without interruption, and as we journey through it, we are forced to confront the past, live in the present, and anticipate the future.
Although time is often considered a linear progression, our perception of it is constantly shifting. Sometimes, it seems to speed up, causing us to feel like we're being pulled along on the current of life. Other times, it slows down, and we feel stuck in a moment, unable to move forward. As we move through time, we are constantly learning and growing. We accumulate knowledge and experience, which help us make better decisions in the future. Time makes us realise that nothing is permanent on earth but what matters is the time we spent, memories we make and the trust we bind. Lets together enjoy this beautiful journey of UDBHAV 2024 and add colours to this amazing student life.      </p>  </div>
      
     </div>
    </section>
  )
}

export default About
