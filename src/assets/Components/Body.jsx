import React from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Events from "../Pages/Events";
import Story from "../Pages/Story";
import Gallery from "../Pages/Gallery";
import NoticeBoard from "../Pages/NoticeBoard";
import EventsData from "../Pages/EventsData";
import EventDataDetails from "../Pages/EventsDataDetails";
import ContactUS from "../Pages/ContactUs";
import StoriesData from "../Pages/StoriesData";
import StoriesDataDetails from "../Pages/StoriesDataDetails";

const Body = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/events" element={<EventsData />} />
                <Route path="/events/:id" element={<EventDataDetails/>}/>  
            
            <Route path="/stories" element={<StoriesData />}></Route>
            <Route path="/stories/:id" element={<StoriesDataDetails />} />
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/notice-board" element={<NoticeBoard />}></Route>
            <Route path="/contact" element={<ContactUS />}/>
        </Routes>
        </>
    )
}
export default Body