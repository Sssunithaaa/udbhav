import React,{useState} from 'react'
import { Cardd } from './Card'
import ArticleCardSkeleton from '../Components/ArticleCardSkeleton'
import Header from '../Components/Header'
import { images } from '../constants'
import { singing } from '../constants'

import { dance,fashion,literary,miscellaneous,theatre } from '../constants'
const Events = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [displayedCards, setDisplayedCards] = useState(2);
    const [selectedDay, setSelectedDay] = useState(""); 
    const [selectedCategory, setSelectedCategory] = useState(""); // State to hold selected event category
      const handleChangeCategory = (event) => {
        setSelectedCategory(event.target.value);
    };
     const filterEventsByCategory = (category) => {
        switch (category) {
            case 'Dance':
                return dance;
            case 'Fashion':
                return fashion;
            case 'Literary':
                return literary;
            case 'Miscellaneous':
                return miscellaneous;
            case 'Theatre':
                return theatre;
            default:
                // If no category is selected, return all events
                return [...dance, ...fashion, ...literary, ...miscellaneous, ...theatre];
        }
    };
    const eventsToDisplay = selectedCategory ? filterEventsByCategory(selectedCategory) : [...dance, ...fashion, ...literary, ...miscellaneous, ...theatre];

  return (
    <section className='w-full text-black mx-auto h-full mb-5  flex flex-col'>
     <Header/>  
     <div className='px-5'>
<div className='flex flex-row justify-between pt-5 lg:pl-16 pl-8 h-full'>
                    <div className='flex justify-start'>
                        <h1 className='text-[40px] font-bold text-[#3f4161]'>Events</h1>
                    </div>
                    <div className='flex justify-end mr-5'>
                        <select className="px-4 py-2 my-4 bg-gray-100 text-gray-900 rounded-md" value={selectedCategory} onChange={handleChangeCategory}>
                            <option value="">All Categories</option>
                            <option value="Dance">Dance</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Literary">Literary</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                            <option value="Theatre">Theatre</option>
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