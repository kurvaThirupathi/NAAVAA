import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import eventsData from "../data/eventsData.json";
import eventsBg from "../../assets/images/events-bg.jpg";

const Events = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
    setEvents(eventsData);
  }, []);
  const viewDetails = (id) => {
  navigate(`/events/${id}`);
};
  return (
    <section
      className="relative min-h-[400px] bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: `url(${eventsBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-5">

        {/* Section Header */}
        <div className="mb-10 flex justify-between items-center gap-4 text-white">

          <h2 className="text-2xl font-semibold md:text-3xl">Events</h2>
          <button type="button" onClick={() => navigate("/events")} className="inline-block
    relative overflow-hidden z-0 px-2.5 py-2 border border-[#4f4f4f] rounded text-[14px] text-white cursor-pointer transition-all duration-200 ease-in before:content-[''] before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:scale-x-[1.25] before:scale-y-100 before:w-[140%] before:h-[180%] before:bg-[rgba(0,0,0,0.05)] before:rounded-[50%] before:block before:-z-10 before:transition-all before:duration-500 before:delay-100 before:ease-[cubic-bezier(0.55,0,0.1,1)] after:content-[''] after:absolute after:left-[55%] after:top-[180%] after:-translate-x-1/2 after:scale-x-[1.45] after:scale-y-100 after:w-[160%] after:h-[190%] after:bg-[#5f5c9e] after:rounded-[50%] after:block after:-z-10 after:transition-all after:duration-500 after:delay-100 after:ease-[cubic-bezier(0.55,0,0.1,1)] hover:text-white hover:border-[#5f5c9e] hover:before:top-[-35%] hover:before:bg-[#5f5c9e] hover:before:scale-x-[0.8] hover:before:scale-y-[1.3] hover:after:top-[-45%] hover:after:bg-[#5f5c9e] hover:after:scale-x-[0.8] hover:after:scale-y-[1.3]">View More</button>


        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

          {events.slice(0,3).map((event) => (
            <div onClick={() =>viewDetails(event.id)}
              key={event.id}
              className="flex bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-[3px] hover:cursor-pointer"
            >

              {/* Date */}
              <div className="mr-7 flex h-[102px] w-[102px] shrink-0 flex-col items-center justify-center border-2 border-red-700 gap-3">

                {/* Top Calendar Lines */}
                <div className="relative">

                  <span className="absolute -top-[20px] left-[18px] h-4 w-[2px] bg-red-700" />

                  <span className="absolute -top-[20px] right-[18px] h-4 w-[2px] bg-red-700" />

                </div>

                <span className=" text-[30px] leading-none text-[#002b55] font-medium">
                  {event.date.day}
                </span>

                <span className="text-[15px] text-gray-500">
                  {event.date.month} | {event.date.year}
                </span>

              </div>

              {/* Event Content */}
              <div className="flex-1 flex flex-col gap-5">
                  <h3 className="text-[14px] leading-[1.35] text-gray-800 md:text-[16px]">
                  {event.title}
                </h3>
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-x-8 text-sm text-gray-500">

                  {/* Location */}
                  <div className="flex items-center gap-2">

                    <svg
                      className="h-6 w-6 text-red-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                      />

                      <circle cx="12" cy="10" r="2.5" />
                    </svg>

                    <span>{event.location}</span>

                  </div>

                </div>

                {/* Title */}
                

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Events;
