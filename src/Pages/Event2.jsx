import React,{useState} from 'react'
import { Cardd } from './Card'
import Header from '../Components/Header'
import { dance,fashion,literary,miscellaneous,theatre,fineArts,singing } from '../constants'
import { Carddd } from './Card2'



const AllEvents = () => {
   
    const [selectedCategory, setSelectedCategory] = useState(""); 
      const handleChangeCategory = (event) => {
        setSelectedCategory(event.target.value);
    };
const eventsToDisplay =  [...dance, ...fashion, ...literary,...singing, ...miscellaneous, ...theatre, ...fineArts]

return (
    <section className='w-full text-black mx-auto h-full mb-5  flex flex-col'>
     <Header/>  
     <div className='px-5'>
<div className='flex flex-row justify-between pt-5 lg:pl-16 pl-2 h-full'>
                    <div className='flex justify-start'>
                        <h1 className='text-[40px] font-bold text-[#3f4161]'>Events</h1>
                    </div>
                    <div className='flex justify-end mr-3'>
                        <select className="px-4 py-2 my-2 bg-gray-100 text-gray-900 rounded-md" value={selectedCategory} onChange={handleChangeCategory}>
                            <option value="">All Categories</option>
                            <option value="Dance">Intra</option>
                            <option value="Fashion">Inter</option>
                            <option value="Literary">Pure Intra</option>
                            
                        </select>
                    </div>
                </div>
      
            <div className="flex flex-wrap gap-y-5 md:gap-x-5" style={{ justifyContent: 'flex-start' }}>
                    {eventsToDisplay.map((event, index) => (
                        <Carddd
                            key={index}
                            event={event}
                            index={index + 1}
                            className="h-auto justify-start w-full mx-3 sm:w-[calc(50%)] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"
                        />
                    ))}
                </div>
      
       
            </div>
    </section>
  )
}

export default AllEvents