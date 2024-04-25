import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import { TiTick } from "react-icons/ti";
const EventDescription = () => {
  const location = useLocation();
  const { state } = location;

  if (!state) {
    return <div>No state found</div>;
  }

  const event = state.desc;

  return (
    <div className="relative z-0 w-full bg-indigo-50 max-w-screen overflow-x-hidden">
      <Header />
      <article className="flex flex-col items-center mx-auto w-full">
        <img
          className="h-auto w-auto lg:w-screen lg:h-[550px] content-center mb-5"
          src={event?.image}
          alt="article"
          style={{ objectFit: 'cover' }}
        />
        
        <h1 className="text-3xl font-bold mx-3 text-center text-[#3f4161] my-3">{event?.name}-<span className='text-pink-500'>{event?.type}</span></h1>
          <div className='w-full flex flex-col justify-center items-center px-10'>
            <p className="text-lg text-left font-medium"><span className='font-semibold text-[#3f4161]'>Date:</span> {event?.date}</p>
            <p className="text-lg text-left font-medium"><span className='font-semibold text-[#3f4161]'>Registraion Fee:</span> {event?.registrationFee}</p>
          </div>
        <div className=" rounded-lg font-medium text-center px-10 py-3 mb-5">
          
          <ul>
            {Object.values(event?.description).map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
        <div className='w-full text-center  mb-5'>
          <h2 className="text-lg text-[#3f4161] font-semibold mb-1">Contact Persons:</h2>
          <ul className='mb-2'>
            {event?.contactPersons.map((person, index) => (
              <li key={index}>
                <span className='text-pink-500 font-semibold'>{person.name}</span>: {person.phone}
              </li>
            ))}
          </ul>
        </div>
        
      </article>
    </div>
  );
};

export default EventDescription;
