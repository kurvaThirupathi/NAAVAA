import React from "react"; 
import { Link } from "react-router-dom";
 import data from "../Data/archive.json";
  function Archive() { 
    return (
    <div className="w-full bg-white py-5 relative shadow-lg rounded-md max-h-[300px] min-h-[300px] overflow-y-auto overflow-x-hidden"> 
        <div className="px-4">
            {Object.entries(data) .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, months]) => (
                <section key={year} className="mb-4" >
                    {/* ===================================================== YEAR ===================================================== */}
                    <div className="flex items-center gap-4 mb-2">
                        <div className=" p-2 flex items-center justify-center rounded-lg bg-orange-500 text-white font-medium text-[13px] " > {year} </div>
                        <div className=" h-[2px] flex-1 bg-orange-200 " />
                    </div>
                    
                    {Object.entries(months).map(([month, days]) => (
                    <div key={month} className="mb-4" >
                            {Object.entries(days).map(([day, dayData]) => {
                                const stories = (dayData.stories || []).filter((story) => story.title?.trim() || story.description?.trim() || story.image?.trim());
                                const events = (dayData.events || []).filter((event) => event.title?.trim() || event.description?.trim() || event.image?.trim());
                                return (
                                    <div key={day} className="mb-4" >
                                        {/* ================================================= DATE ================================================= */}
                                        <div className=" flex items-center gap-4 mb-2 relative " >
                                            <div className=" absolute right-0 mt-[16px] flex flex-col items-center justify-center px-3 py-2 rounded-lg bg-gray-800 text-white " >
                                                <span className=" text-[16px] font-semibold " > {day} </span>
                                                <span className=" text-[12px] uppercase " > {month} </span> </div>
                                        </div>
                                        {/* ================================================= STORIES ================================================= */}
                                        {stories.length > 0 && (
                                            <div className="mb-4 ml-2">
                                                <div className=" flex items-center gap-3 mb-2.5 " >
                                                    <h3 className=" text-[15px] font-semibold text-gray-800 " > Stories </h3>
                                                    <div className=" h-[1px] flex-1 bg-gray-300 " />
                                                </div>
                                               <div> 
                                                {stories.map((story) => (
                                                    <Link key={story.id} to={`/archive_stories/story/${story.id}`} className=" block mb-2 group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 " >
                                                        <div className="p-2">
                                                            <h4 className=" text-[14px] font-base text-gray-800 group-hover:text-[#5f5c9e] transition-colors hover:underline line-clamp-2 " title={story.title} > {story.title} </h4>
                                                        </div>
                                                    </Link>
                                                    // <Link key={story.id} to={`/stories/${story.id}`} className=" block mb-2 group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 " >
                                                    //     <div className="p-2">
                                                    //         <h4 className=" text-[14px] font-base text-gray-800 group-hover:text-[#5f5c9e] transition-colors " > {story.title} </h4>
                                                    //     </div>
                                                    // </Link>
                                                    )
                                                )
                                                    }
                                                </div>
                                            </div>)} {/* ================================================= EVENTS ================================================= */}
                                                {events.length > 0 && (
                                            <div className="ml-2">
                                                <div className=" flex items-center gap-3 mb-2.5 ">
                                                    <h3 className=" text-[14px] font-semibold text-gray-800 "> Events </h3>
                                                    <div className=" h-[1px] flex-1 bg-gray-300 " /> </div>
                                                {/* EVENT LIST */}
                                                <div>
                                                    {events.map((event) => (
                                                        // <div key={event.id} className=" mb-2 group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 " >
                                                        //     <div className="p-2"> {event.title && (
                                                        //         <h4 className=" text-[14px] font-base text-gray-800 " > {event.title} </h4>)}
                                                        //     </div>
                                                        // </div>
                                                        <Link key={event.id} to={`/archive_stories/event/${event.id}`} className=" block mb-2 group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 " >
                                                            <div className="p-2">
                                                                <h4 className=" text-[14px] font-base text-gray-800 group-hover:text-[#5f5c9e] transition-colors hover:underline line-clamp-2 " title={event.title} > {event.title} </h4>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>);
                             })} 
                        </div>))}
                </section>
            ))} 
        </div> 
    </div>); } 
export default Archive;