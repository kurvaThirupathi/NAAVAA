import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import archiveData from "../Data/archive.json"
function Archive(){
    const [selectedYear, setSelectedYear] = useState([]);
    
    useEffect(()=>{
        setSelectedYear(archiveData)
    },[])
    const navigate = useNavigate();
    // const setYear = (year) => {
    //  alert("");
    // //navigate(`/stories/${id}`);
    // };
    return (
        <>
        <div className="relative">
            {Object.entries(selectedYear).map(([year, items]) => (
            <div key={year} className="before:content-[''] before:absolute before:h-[10px] before:w-[10px] before:left-[-10px] before:bg-[#1a395a] before:rounded-[20px] before:mt-[14px] after:content-[''] after:absolute after:left-[-6px] after:mt-[-9px] after:border after:border-solid after:border-[#959295] after:h-[29px]  ">
                <h2 className="ml-[10px] pt-[9px]">
                     {/* {items.map((item) => ( */}
                    <a type="button" onClick={() => navigate(`/archive_stories/${year}`)} className="cursor-pointer text-blue-800 hover:underline">{year} </a>
                    {/* ))} */}
                </h2>
            </div>
            ))}
        </div>
        </>
    )
}
export default Archive