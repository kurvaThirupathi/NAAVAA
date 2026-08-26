import React,{useState,useEffect} from "react";
import eventsData from "../data/events.json";
import eventsBg from "../../assets/images/events-bg.jpg";

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
    setEvents(eventsData);
  }, []);
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
        <div className="mb-10 flex items-center gap-4 text-white">

          <h2 className="text-2xl font-semibold md:text-3xl">Events</h2>


        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

          {events.map((event) => (
            <div
              key={event.id}
              className="flex  bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >

              {/* Date */}
              <div className="mr-7 flex h-[102px] w-[102px] shrink-0 flex-col items-center justify-center border-2 border-red-700 gap-3">

                {/* Top Calendar Lines */}
                <div className="relative">

                  <span className="absolute -top-[20px] left-[18px] h-4 w-[2px] bg-red-700" />

                  <span className="absolute -top-[20px] right-[18px] h-4 w-[2px] bg-red-700" />

                </div>

                <span className=" text-[30px] leading-none text-[#002b55] font-medium">
                  {event.day}
                </span>

                <span className="text-[15px] text-gray-500">
                  {event.month} | {event.year}
                </span>

              </div>

              {/* Event Content */}
              <div className="flex-1">

                {/* Meta */}
                <div className="mb-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-500">

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
                <h3 className="text-[14px] leading-[1.35] text-gray-800 md:text-[16px]">
                  {event.title}
                </h3>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Events;
