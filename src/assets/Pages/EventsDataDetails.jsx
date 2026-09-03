import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import eventsData from "../data/EventsDataDetails.json";
import carousel4 from "../../assets/images/carouse_4.jpg";
const EventDataDetails = () => {
    // const { id } = useParams();
    //  const { slug  } = useParams();
    const { storyPath   } = useParams();
    const navigate = useNavigate();

    // Find event based on URL id
    // const event = eventsData.find((item) => {
    //     const itemSlug = item.title
    //         .toLowerCase()
    //         .trim()
    //         .replace(/[^\w\s-]/g, "")
    //         .replace(/\s+/g, "-");
    
    //     return itemSlug === slug;
    // });
    const storyId = storyPath.split("-")[0];

const event = eventsData.find(
  (item) => String(item.id) === storyId
);
    // const event = eventsData.find(
    //     (item) => String(item.id) === String(id)
    // );

    // =========================
    // EVENT NOT FOUND
    // =========================
    if (!event) {
        return (
            // <section className=" bg-white flex items-center justify-center">
            //     <div className="text-center">
            //         <h1 className="text-3xl font-semibold text-gray-800">
            //             Event Not Found
            //         </h1>

            //         <p className="text-gray-500 mt-3">
            //             No event found for ID: {id}
            //         </p>

            //         <button
            //             onClick={() => navigate("/events")}
            //             className="
            //                 mt-6
            //                 px-5
            //                 py-2.5
            //                 bg-[#3d3a4e]
            //                 text-white
            //                 rounded-md
            //                 hover:bg-[#062c4b]
            //                 transition
            //             "
            //         >
            //             ← Back to Events
            //         </button>
            //     </div>
            // </section>
             <section>
                            
                            <div className="relative h-[150px] md:h-[200px] bg-cover bg-center flex items-center justify-center"
                            style={{
                                backgroundImage:
                                    `url(${carousel4})`,
                            }}>
                            <div className="absolute inset-0 bg-[#062c4b]/80" />
            
                                <div className=" relative z-10 mt-7 px-7 py-4 text-center flex flex-col gap-3" >
            
                                    <h1 className="text-white text-2xl md:text-3xl font-semibold lg:mt-5">Event Details</h1>
                                    
            
                                </div>
                                
                        </div>
                        <div className="bg-[#f5f5f5] py-5 relative bg-repeat bg-center bg-[url('https://themesflat.co/html/wizym/image/footer.jpg')]">
                            <div className="w-[95%] max-w-6xl mx-auto py-10">
                                            <h1 className="text-3xl font-semibold text-gray-800">
                                    Event Not Found
                                </h1>
            
                                <p className="text-gray-500 mt-3">
                                    No event found for ID: {slug}
                                </p>
            {/* onClick={() => navigate("/events")} */}
                                <button
                                    onClick={() => navigate(-1)}
                                    className="
                                        mt-6
                                        px-5
                                        py-2.5
                                        bg-[#3d3a4e]
                                        text-white
                                        rounded-md
                                        hover:bg-[#062c4b]
                                        transition
                                    "
                                >
                                    ← Back to Events
                                </button>
                            </div>
                        </div>
                        </section>
        );
    }

    return (
        <section className="">
            <div className="relative h-[150px] md:h-[200px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage:
                        `url(${carousel4})`,
                }}>
                <div className="absolute inset-0 bg-[#062c4b]/80" />

                    <div className=" relative z-10 mt-7 px-7 py-4 text-center flex flex-col gap-3" >

                        <h1 className="text-white text-2xl md:text-3xl font-semibold lg:mt-5">Events Details</h1>
                        <p className="text-white text-base font-normal">{event.date}</p>

                    </div>
                    <div className="absolute left-5 mt-10">
                        {/* onClick={() => navigate("/events")} */}
                    <button
                        onClick={() => navigate(-1)}
                        className="
                            text-white/80
                            hover:text-white
                            
                            transition
                        "
                    >
                        ← Back to Events
                    </button>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5 relative bg-repeat bg-center bg-[url('https://themesflat.co/html/wizym/image/footer.jpg')]">

            
                <div className="flex md:flex-row flex-col gap-2 w-[98%] justify-center mx-auto">
                    <div className="w-3/4">
                        {/* <div className="h-[100px] w-full">
                            <img src={event.image} alt={event.image} className="w-full h-full object-cover"/>

                        </div> */}
                        {/* <div className="flex flex-col gap-5">

                        
                        <div className="capitalize text-[30px] font-semibold leading-[1.2]">
                            {event.message}
                        </div>
                        <div className="flex md:flex-row flex-col gap-3 justify-between">
                            <div className="text-base font-normal text-gray-600 flex gap-2 items-center">
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="13"
                                        height="13"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="
                                        flex-shrink-0
                                        mt-[1px]
                                        "
                                    >
                                        <path
                                        d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                                        />

                                        <circle
                                        cx="12"
                                        cy="10"
                                        r="3"
                                        />
                                    </svg> {event.organizer}
                            </div>
                            <div className="text-base font-normal text-gray-600">
                            {event.date}
                            </div>
                            <div className="text-base font-normal text-gray-600">
                                {event.time}
                            </div>
                            <div>

                            </div>
                        </div>
                        </div> */}
                    </div>
                    <div className="w-1/4">

                    </div>

                </div>
            
                <div className="w-[95%] mx-auto py-10">

                    
                    {/* <div className="
                        border
                        border-gray-200
                        rounded-lg
                        shadow-sm
                        p-5
                        md:p-8
                    ">

                        <div className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-6
                        ">


                            <div>
                                <p className="text-sm text-gray-500">
                                    Clinic
                                </p>

                                <h2 className="
                                    text-lg
                                    font-semibold
                                    text-gray-800
                                    mt-1
                                ">
                                    {event.clinic}
                                </h2>
                            </div>


                        
                            <div>
                                <p className="text-sm text-gray-500">
                                    Organizer
                                </p>

                                <h2 className="
                                    text-lg
                                    font-semibold
                                    text-gray-800
                                    mt-1
                                ">
                                    {event.organizer}
                                </h2>
                            </div>


                        
                            <div>
                                <p className="text-sm text-gray-500">
                                    Date
                                </p>

                                <h2 className="
                                    text-lg
                                    font-semibold
                                    text-gray-800
                                    mt-1
                                ">
                                    {event.date}
                                </h2>
                            </div>


                            
                            <div>
                                <p className="text-sm text-gray-500">
                                    Time
                                </p>

                                <h2 className="
                                    text-lg
                                    font-semibold
                                    text-gray-800
                                    mt-1
                                ">
                                    {event.time}
                                </h2>
                            </div>

                        </div>

                    </div> */}

                    <div className=" bg-white border-l-4 border-[#f5a712] p-5 rounded-r-md shadow">
                        <div className="flex gap-3 items-center">
                            <div className="flex flex-col gap-5 flex-1 w-3/4">
                                <h1 className="text-gray-900 text-lg md:text-xl font-normal lg:mt-5">{event.clinic}</h1>
                                <p className="
                                    text-gray-900
                                    text-[32px]
                                    
                                ">
                                    "{event.title}"
                                </p>

                                <div className="flex flex-wrap gap-2">

                                    {event.hashtags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="
                                                text-sm
                                                text-[#062c4b]
                                                bg-white
                                                border
                                                border-gray-200
                                                px-3
                                                py-1
                                                rounded-full
                                            "
                                        >
                                            #{tag}
                                        </span>
                                    ))}

                                </div>
                                <div className="flex md:flex-row flex-col gap-5">
                                    <div className="text-base font-normal text-gray-600 flex gap-2 items-center">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="13"
                                                height="13"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="
                                                flex-shrink-0
                                                mt-[1px]
                                                "
                                            >
                                                <path
                                                d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                                                />

                                                <circle
                                                cx="12"
                                                cy="10"
                                                r="3"
                                                />
                                            </svg> {event.organizer}
                                    </div>
                                    <div className="text-base font-normal text-gray-600 flex gap-2 items-center">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>{event.date}
                                    </div>
                                    <div className="text-base font-normal text-gray-600 flex gap-2 items-center">
                                    <svg width="13" height="13" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M9 2.025v-1.025h1.5v-1h-4v1h1.5v1.025c-3.902 0.26-7 3.508-7 7.475 0 4.136 3.364 7.5 7.5 7.5s7.5-3.364 7.5-7.5c0-3.967-3.098-7.215-7-7.475zM8.5 16c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zM9 9h4v1h-5v-4h1v3z" fill="#000000" />
    </svg> {event.time}
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div className="h-[165px] w-1/4">
                                <img src={event.image} alt={event.image} className="h-full w-full object-fill rounded-md shadow"/>
                            </div>
                        </div>

                    </div>

                    <div className="mt-10">

                        <h2 className="text-2xl font-semibold text-gray-800 mb-5">Event Details</h2>
                        <div className="flex flex-col gap-3 bg-white shadow p-4 rounded-lg">
                            <div className="text-[15px] font-normal text-gray-600 line-clamp-4" title={event.desc}>
                                {event.desc.replace(/\\n/g, "\n")}
                            </div>
                            {/* <div className="text-[15px] font-normal text-gray-600 line-clamp-4" title={event.desc_1}>
                                {event.desc_1}
                            </div>
                            <div className="text-[15px] font-normal text-gray-600 line-clamp-4" title={event.desc_2}>
                                {event.desc_2}
                            </div> */}

                        </div>


                        

                    </div>


                    
                    {/* <div className="mt-10">

                        <h2 className="
                            text-2xl
                            font-semibold
                            text-gray-800
                            mb-5
                        ">
                            Zoom Meeting
                        </h2>


                        <div className="
                            bg-[#062c4b]
                            rounded-lg
                            p-6
                            md:p-8
                            text-white
                        ">

                            <div className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                gap-5
                            ">

                                <div>
                                    <p className="text-white/60 text-sm">
                                        Meeting ID
                                    </p>

                                    <p className="
                                        text-lg
                                        font-semibold
                                        mt-1
                                    ">
                                        {event.event_details.zoom_meeting.meeting_id}
                                    </p>
                                </div>


                                <div>
                                    <p className="text-white/60 text-sm">
                                        Passcode
                                    </p>

                                    <p className="
                                        text-lg
                                        font-semibold
                                        mt-1
                                    ">
                                        {event.event_details.zoom_meeting.passcode}
                                    </p>
                                </div>


                                <div>
                                    <p className="text-white/60 text-sm">
                                        Moderator
                                    </p>

                                    <p className="
                                        text-lg
                                        font-semibold
                                        mt-1
                                    ">
                                        {event.event_details.zoom_meeting.moderator}
                                    </p>
                                </div>


                                <div>
                                    <p className="text-white/60 text-sm">
                                        Batch
                                    </p>

                                    <p className="
                                        text-lg
                                        font-semibold
                                        mt-1
                                    ">
                                        {event.event_details.zoom_meeting.batch}
                                    </p>
                                </div>

                            </div>


                            
                            <a
                                href={event.event_details.zoom_meeting.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-block
                                    mt-7
                                    px-5
                                    py-3
                                    bg-[#f5a712]
                                    text-[#062c4b]
                                    font-semibold
                                    rounded-md
                                    hover:bg-white
                                    transition
                                "
                            >
                                Join Zoom Meeting
                            </a>

                        </div>

                    </div> */}

                    {/* <div className="mt-10">

                        <h2 className="
                            text-2xl
                            font-semibold
                            text-gray-800
                            mb-5
                        ">
                            Coordinators
                        </h2>


                        <div className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-4
                        ">

                            {event.event_details.coordinators.map(
                                (coordinator, index) => (
                                    <div
                                        key={index}
                                        className="
                                            border
                                            border-gray-200
                                            rounded-md
                                            p-5
                                            shadow-sm
                                        "
                                    >

                                        <h3 className="
                                            text-lg
                                            font-semibold
                                            text-gray-800
                                        ">
                                            {coordinator.name}
                                        </h3>

                                        <p className="
                                            text-sm
                                            text-gray-500
                                            mt-2
                                        ">
                                            Batch: {coordinator.batch}
                                        </p>

                                    </div>
                                )
                            )}

                        </div>

                    </div> */}

                    {/* <div className="mt-10 text-center bg-[#f5f5f5] rounded-lg p-8">

                        <p className="
                            text-xl
                            md:text-2xl
                            font-semibold
                            text-[#062c4b]
                        ">
                            {event.closing_message}
                        </p>

                    </div> */}

                    {/* <div className="text-center mt-10">

                        <button
                            onClick={() => navigate("/eventsData")}
                            className="
                                px-6
                                py-3
                                bg-[#3d3a4e]
                                text-white
                                rounded-md
                                hover:bg-[#062c4b]
                                transition
                            "
                        >
                            ← Back to All Events
                        </button>

                    </div> */}

                </div>
            </div>
        </section>
    );
};

export default EventDataDetails;