import React,{useState} from 'react'
import { Cardd } from './Card'
import ArticleCardSkeleton from '../Components/ArticleCardSkeleton'
import Header from '../Components/Header'
import { images } from '../constants'
import { singing } from '../constants'
import { dance } from '../constants'
const Events = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [displayedCards, setDisplayedCards] = useState(2);
    const [selectedDay, setSelectedDay] = useState(""); 
    
    const handleLoadMore = () => {
        setDisplayedCards(prevCount => prevCount + 2); 
    };
    const handleLoadLess = () => {
        setDisplayedCards(prevCount => prevCount - 2); 
    };
    const handleChangeDay = (event) => {
        setSelectedDay(parseInt(event.target.value));
    };
    console.log(selectedDay)
    const filteredEvents = selectedDay ? images.filter(event => event.day === selectedDay) : images;
  return (
    <section className='w-full text-black mx-auto h-full mb-5  flex flex-col'>
     <Header/>  
     <div className='px-5'>
<div className='flex flex-row justify-between pt-10 lg:pl-16 pl-8 h-full'>
  <div className='flex justify-start'>
        <h1 className='text-[45px]  font-bold text-[#3f4161]'>Events</h1>
      </div>   
      {/* <div className='flex justify-end'>
                <select className="px-4 py-2 my-4 bg-gray-100 text-gray-900 rounded-md" value={selectedDay} onChange={handleChangeDay}>
                    <option value="">All Days</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                </select>
            </div> */}
</div>
      
           
      <div className="flex flex-wrap  gap-y-5 md:gap-x-5" style={{ justifyContent: 'flex-start' }}>
                {
                    dance.map((event, index) => (
                        <Cardd
                            key={index}
                            event={event}
                            index={index + 1}
                            className="h-auto justify-start w-full mx-3 sm:w-[calc(50%)] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"
                        />
                    ))
                  }
            
       {/* <div className="flex flex-wrap gap-y-5 md:gap-x-5"> */}
                {
                    singing.slice(0, displayedCards).map((event, index) => (
                        <Cardd
                            key={index}
                            event={event}
                            index={index + 1}
                            className="h-auto w-full mx-3 sm:w-[calc(50%)] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"
                        />
                    ))
                }
            {/* </div>
             */}
             </div>
       {/* {!isLoading && displayedCards < images.length && (
                <button className="px-5 py-2 my-6 bg-blue-500 font-semibold text-white hover:bg-blue-800 rounded-md w-[40%] lg:w-[20%] mx-auto" onClick={handleLoadMore}>
                    Load More
                </button>
            )}
            {!isLoading && displayedCards == images.length && (
                <button className="px-5 py-2 my-6 bg-blue-500 font-semibold text-white hover:bg-blue-800 rounded-md w-[40%] lg:w-[20%] mx-auto" onClick={handleLoadLess}>
                    Load Less
                </button>
            )} */}
            </div>
    </section>
  )
}

export default Events