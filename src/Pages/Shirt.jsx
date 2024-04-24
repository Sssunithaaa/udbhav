import React from 'react'
import { shirt } from '../assets'
const Shirt = () => {
  return (
    <div className="container my-24 mx-auto px-10 md:px-6 h-fit">
                <div className='text-[45px] orange-text-gradient font-bold'><h1>Tshirts</h1></div>

      <section className="mb-32 text-center my-5 ">
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img src={shirt} className="w-full rounded-t-lg" alt="tshirt" />
          <a href="#!">
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
          </a>
          <svg className="absolute text-white dark:text-neutral-700 right-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="currentColor" d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,190,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>

        </div>
        <div className="p-6">
          {/* <h5 className="mb-4 text-lg font-bold">Grab your tshirts</h5> */}
          <p className="mb-4 text-neutral-500 dark:text-neutral-300">Time travel just got stylish! Show off your love for hostory with our trendy Voyage Through Time T-shirts, designed exclusively for the Udbhav'24</p>
          <p className='text-lg font-semibold'>Grad yours now and join us on an epic journey through the ages</p>
          <button className='px-5 py-3 bg-blue-700 hover:bg-blue-900 rounded-md font-semibold text-white my-5'>Click here</button>
        </div>
        </div>
        </section>
    </div>
  )
}

export default Shirt