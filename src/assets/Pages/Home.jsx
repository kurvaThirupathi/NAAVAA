import React from "react";
import heroBg from "../../assets/images/hero-bg.png";
import HeroCarousel from "./HeroCarousel";
import Events from "./Events";
import Story from "./Story";
const Home=()=>{
    return (
        <>
        <div>
            <HeroCarousel />
            <Story />
            <Events/>
            
        </div>
        
        </>
    )

}
export default Home;