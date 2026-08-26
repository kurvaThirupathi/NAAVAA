import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/naavaa_logo.png";
const Footer = () => {
    return (
        <>
        <footer>
            <div>
                <div class="overflow-hidden  border-0 border-solid border-[#fff] bg-[#182a3e]">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 border-b border-solid border-0 border-[#ca9c5e]">
                        <div class="w-full col-span-3 md:col-span-1 py-3 bg-[#ca9c5e] flex flex-col items-start pl-8 md:rounded-tr-[100px]">
                            <div class=" text-[#fff]  text-left w-full  flex item-center gap-3 "> 
                                <div><img src={logo} width={60} height={60} alt="naavaa" /></div>
                                <h1 className="flex justify-center items-center font-semibold md:text-2xl text-base">NAAVAA</h1>
                            </div>
                        </div>
                        
                    </div>
                    <div class="p-6 md:px-4">
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 items-start md:place-content-center place-content-left">

                            <div>
                                <div>
                                    <h3 class="md:text-base text-xs font-medium text-[#fff] mb-2   uppercase ">
                                        Contact Us
                                        <div class="w-14 h-0.5 bg-[#fff] mt-1">&nbsp;</div>
                                    </h3>
                                    <ul class="space-y-3 text-[#fff] py-2">
                                        <li class="flex gap-x-2 items-start">
                                            <div class="inline-block md:w-[36px] md:h-[36px] w-[38px] h-[38px] text-[18px] text-center flex items-center justify-center rounded-[100px] bg-[linear-gradient(53.52deg,_#ca9d60_24.13%,_#856a45_78.74%)] my-[0]">
                                                <img src="https://venus-scocu-assets.s3.amazonaws.com/3880899888423970" class="md:w-4 md:h-4 w-5 h-5" />
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <a href="https://maps.app.goo.gl/ymDpq6z2A8pfbWQM9" target="_blank" class="hover:underline md:text-sm text-xs text-[#fff] text-wrap text-font font-medium">
                                                    2-51 Indranagar<br/>Near Indian Bank, Gachibowli<br />Hdyerabad - 500032
                                                </a>
                                            </div>
                                        </li>
                                        <li class="flex gap-x-2 items-center">
                                            <div class="inline-block md:w-[36px] md:h-[36px] w-[38px] h-[38px] text-[18px] text-center flex items-center justify-center rounded-[100px] bg-[linear-gradient(53.52deg,_#ca9d60_24.13%,_#856a45_78.74%)] my-[0]">
                                                <img src="https://venus-scocu-assets.s3.amazonaws.com/3880897977527347" class="md:w-4 md:h-4 w-5 h-5" />
                                            </div>
                                            <div class="flex-1 min-w-0"><a href="tel:+91 9505060683" class="hover:underline md:text-sm text-xs text-[#fff] text-wrap text-font font-medium">+91 95050 60683</a>
                                            </div>
                                        </li>

                                        <li class="flex gap-x-2 items-center">
                                            <div class="inline-block md:w-[36px] md:h-[36px] w-[38px] h-[38px] text-[18px] text-center flex items-center justify-center rounded-[100px] bg-[linear-gradient(53.52deg,_#ca9d60_24.13%,_#856a45_78.74%)] my-[0]">
                                                <img src="https://venus-scocu-assets.s3.amazonaws.com/3880899596668136" class="md:w-4 md:h-4 w-5 h-5" />
                                            </div>
                                            <div class="flex-1 min-w-0"><a href="mailto:contact@naavaa.org" class="hover:underline md:text-sm text-xs text-[#fff] text-wrap text-font font-medium">contact@naavaa.org</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        
                    <div>
                    <p class="md:text-base text-xs font-medium text-[#fff] mb-2  uppercase ">
                    Quick Links
                    <div class="w-14 h-0.5 bg-[#fff] mt-1">&nbsp;</div>
                    </p>
                    <div class="flex md:flex-col sm:flex-row flex-col space-y-1 py-2">
                        <div class="flex items-center gap-x-2 group">
                            <NavLink to="/events" className='flex gap-2'>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="w-4 h-4 group-hover:text-[#fff] text-[#fff]">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778">
                                    </path>
                                </svg><a href="" target="_blank" class="mr-6 hover:underline md:mr-6 md:text-sm text-xs text-[#fff] text-font font-normal text-nowrap">Events</a>
                            </NavLink>
                        </div>
                        <div class="flex items-center gap-x-2 group">
                            <NavLink to="/stories" className='flex gap-2'>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="w-4 h-4 group-hover:text-[#fff] text-[#fff]">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778">
                                    </path>
                                </svg><a href="" target="_blank" class="mr-6 hover:underline md:mr-6 md:text-sm text-xs text-[#fff] text-font font-normal text-nowrap">Stories</a>
                            </NavLink>
                        </div>
                        <div class="flex items-center gap-x-2 group">
                            <NavLink to="/gallery" className="flex gap-2">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="w-4 h-4 group-hover:text-[#fff] text-[#fff]">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778">
                                    </path>
                                </svg>
                                <a href="" target="_blank" class="mr-6 hover:underline md:mr-6 md:text-sm text-xs text-[#fff] text-font font-normal text-nowrap">Gallery</a>
                            </NavLink>
                        </div>
                        <div class="flex items-center gap-x-2 group">
                            <NavLink to="/notice-board" className='flex gap-2'>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="w-4 h-4 group-hover:text-[#fff] text-[#fff]">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778">
                                    </path>
                                </svg><a href="" target="_blank" class="mr-6 hover:underline md:mr-6 md:text-sm text-xs text-[#fff] text-font font-normal">Notice Board</a>
                            </NavLink>
                        </div>
                        <div class="flex items-center gap-x-2 group">
                            <NavLink to="/contact" className='flex gap-2'>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="w-4 h-4 group-hover:text-[#fff] text-[#fff]">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778">
                                    </path>
                                </svg><a href="" target="_blank" class="mr-6 hover:underline md:mr-6 md:text-sm text-xs text-[#fff] text-font font-medium">Contact Us</a>
                                </NavLink>
                        </div>
                        
                        
                    </div>
                    </div>

                    <div>
                    <p class="md:text-base text-xs font-medium text-[#fff] mb-2   uppercase">
                    About Us
                    <div class="w-14 h-0.5 bg-[#fff] mt-1">&nbsp;</div>
                    </p>
                    <div class="py-2">
                        <div class="mr-6 md:text-sm text-xs text-[#fff] text-font font-normal ">
                            We are a small organization called NAAVAA (Nāgarjuna Vidhyashramamu Alumni Association) formed by a group of students graduated from Telangana Residential School for BC’s located at Hill Colony, NagarjunaSagar, TG
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class="p-4 flex items-center justify-center bg-[#ca9c5e]">
                    <div class="flex items-center justify-center">
                    <a class="mr-6 cursor-default md:mr-6 md:text-sm text-xs text-white flex text-font font-medium">&copy;
                    <p id="demo" class="mx-1">2026</p> navaa.org
                    </a>
                    <a href="https://straunt.ai/" target="_blank" class="hover:underline md:text-sm text-xs text-white text-font font-medium">
                    Powered By NAAVAA</a>
                    </div>
                    </div>
                </div>
            </div> 
    
        </footer>

        </>
    )
}
export default Footer