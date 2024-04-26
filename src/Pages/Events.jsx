import React,{useState} from 'react'
import { Cardd } from './Card'
import ArticleCardSkeleton from '../Components/ArticleCardSkeleton'
import Header from '../Components/Header'

import { fineArts, singing } from '../constants'

import { dance,fashion,literary,miscellaneous,theatre } from '../constants'
const Events = () => {
   
    const [selectedCategory, setSelectedCategory] = useState(""); // State to hold selected event category
      const handleChangeCategory = (event) => {
        setSelectedCategory(event.target.value);
    };
    const filterEventsByCategory = (category) => {
    switch (category) {
        case 'Inter':
            // Filter events by "Inter" scope
            return [...dance, ...fashion, ...literary,...singing, ...miscellaneous, ...theatre, ...fineArts].filter(event => event.scope === 'Inter');
        case 'Intra':
            // Filter events by "Intra" scope
            return [...dance, ...fashion, ...literary,...singing, ...miscellaneous, ...theatre, ...fineArts].filter(event => event.scope === 'Intra');
        case 'Pure Intra':
            // Filter events by "Pure Intra" scope
            return [...dance, ...fashion, ...literary,...singing, ...miscellaneous, ...theatre, ...fineArts].filter(event => event.scope === 'Pure Intra');
        default:
            // If no category is selected, return all events
            return [...dance, ...fashion, ...literary,...singing, ...miscellaneous, ...theatre, ...fineArts];
    }
};

    let eventsToDisplay = selectedCategory ? filterEventsByCategory(selectedCategory) : [...dance,...singing, ...fashion, ...literary, ...miscellaneous, ...theatre, ...fineArts];
eventsToDisplay = eventsToDisplay.sort((a, b) => {
    // Split the date strings by "/"
    const [dayA, monthA, yearA] = a.date.split('/');
    const [dayB, monthB, yearB] = b.date.split('/');
    // Create new Date objects with parsed dates
    const dateA = new Date(`${monthA}/${dayA}/${yearA}`);
    const dateB = new Date(`${monthB}/${dayB}/${yearB}`);
    // Compare the dates
    return dateA - dateB;
});
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
                            <option value="Intra">Intra</option>
                            <option value="Inter">Inter</option>
                            <option value="Pure Intra">Pure Intra</option>
                            
                        </select>
                    </div>
                </div>
      
            <div className="flex flex-wrap gap-y-5 md:gap-x-5" style={{ justifyContent: 'flex-start' }}>
                    {eventsToDisplay.map((event, index) => (
                        <Cardd
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

export default Events