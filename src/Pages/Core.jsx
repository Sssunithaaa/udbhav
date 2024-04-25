import React from 'react';
import { dummy1,dummy2,dummy3 } from '../assets';
// Import more volunteer images as needed

const Core = () => {
  return (
    <section className="py-10 px-5 lg:px-20">
                <div className='text-[45px] orange-text-gradient font-bold'><h1>Core</h1></div>

      <div className='flex flex-row'>
        <div className="text-center mb-10 w-[50%] h-full my-auto px-5">
       
        
        
      </div>
      <div className="w-[50%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <VolunteerCard name="John Doe" position="Event Coordinator" image={dummy1} />
        <VolunteerCard name="Jane Smith" position="Marketing Lead" image={dummy2} />
        <VolunteerCard name="Michael Johnson" position="Volunteer Manager" image={dummy3} />
      </div>
      </div>
    </section>
  );
};

const VolunteerCard = ({ name, position, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </div>
    </div>
  );
};

export default Core;
