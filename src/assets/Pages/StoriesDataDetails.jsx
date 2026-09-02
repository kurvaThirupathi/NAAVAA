import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import carousel4 from "../../assets/images/carouse_4.jpg";
import storiesDataResult from "../data/StoriesDataDetails.json";
import Archive from "./archive";

function StoriesDataDetails(){
    // const { id } = useParams();
    // const { slug  } = useParams();
    const { storyPath   } = useParams(); 
    const navigate = useNavigate();
//     const storiesView = storiesDataResult.find((item) => {
//     const itemSlug = item.title
//         .toLowerCase()
//         .trim()
//         .replace(/[^\w\s-]/g, "")
//         .replace(/\s+/g, "-");

//     return itemSlug === slug;
// });
const storyId = storyPath.split("-")[0];

const storiesView = storiesDataResult.find(
  (item) => String(item.id) === storyId
);
    // const storiesView = storiesDataResult.find(
    //     (item) => String(item.id) === String(id)
    // );
    if (!storiesView) {
        return (
            <section>
                {/* <div className="text-center">
                    <h1 className="text-3xl font-semibold text-gray-800">
                        Story Not Found
                    </h1>

                    <p className="text-gray-500 mt-3">
                        No story found for ID: {id}
                    </p>

                    <button
                        onClick={() => navigate("/stories")}
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
                </div> */}
                <div className="relative h-[150px] md:h-[200px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage:
                        `url(${carousel4})`,
                }}>
                <div className="absolute inset-0 bg-[#062c4b]/80" />

                    <div className=" relative z-10 mt-7 px-7 py-4 text-center flex flex-col gap-3" >

                        <h1 className="text-white text-2xl md:text-3xl font-semibold lg:mt-5">Story Details</h1>
                        

                    </div>
                    {/* <div className="absolute left-5 mt-10">
                    <button
                        onClick={() => navigate("/stories")}
                        className="
                            text-white/80
                            hover:text-white
                            
                            transition
                        "
                    >
                        ← Back to Story
                    </button>
                </div> */}
            </div>
            <div className="bg-[#f5f5f5] py-5 relative bg-repeat bg-center bg-[url('https://themesflat.co/html/wizym/image/footer.jpg')]">
                <div className="w-[95%] max-w-6xl mx-auto py-10">
                                <h1 className="text-3xl font-semibold text-gray-800">
                        Story Not Found
                    </h1>

                    <p className="text-gray-500 mt-3">
                        No story found for ID: {slug}
                    </p>
{/* onClick={() => navigate("/stories")} */}
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
                        ← Back to Story
                    </button>
                </div>
            </div>
            </section>
        );
    }
    return(
        <>
        <section className="">
            <div className="relative h-[150px] md:h-[200px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage:
                        `url(${carousel4})`,
                }}>
                <div className="absolute inset-0 bg-[#062c4b]/80" />

                    <div className=" relative z-10 mt-7 px-7 py-4 text-center flex flex-col gap-3" >

                        <h1 className="text-white text-2xl md:text-3xl font-semibold lg:mt-5">Story Details</h1>
                        <p className="text-white text-base font-normal">{storiesView.date}</p>

                    </div>
                    <div className="absolute left-5 mt-10">
                        {/* onClick={() => navigate("/stories")} */}
                    <button
                        onClick={() => navigate(-1)}
                        className="
                            text-white/80
                            hover:text-white
                            
                            transition
                        "
                    >
                        ← Back to Story
                    </button>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5 relative bg-repeat bg-center bg-[url('https://themesflat.co/html/wizym/image/footer.jpg')]">
                <div className="w-[95%] mx-auto py-10">
                    <div className="flex md:flex-row flex-col gap-4">
                    <div className="w-full">
                        <div className="bg-white border-l-4 border-[#f5a712] p-5 rounded-r-md shadow">
                            <div className="flex gap-3">
                                <div className="flex flex-col gap-5 flex-1 w-3/4">
                                    {/* <h1 className="text-gray-900 text-lg md:text-xl font-normal lg:mt-5">{storiesView.title}</h1> */}
                                    <p className="text-gray-900 text-[28px] font-normal">"{storiesView.title}"
                                    </p>

                                    <div className="flex md:flex-row flex-col gap-5">
                                        <div className="text-base font-normal text-gray-600 flex gap-2 items-center">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#4b5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg> {storiesView.organizer}
                                        </div>
                                        
                                        <div>
                                            <div className="text-base font-normal text-gray-600 flex gap-2 items-center">
                                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#4b5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>{storiesView.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                    <div className="h-[165px] w-1/4">
                                        
                                        <img src={storiesView.image} alt={storiesView.image} className="h-full w-full object-fill rounded-md shadow"/>
                                    </div>
                                
                                        {/* <div className="absolute bottom-0 -left-32 flex h-[60px] w-[120px] shrink-0 flex-col items-center justify-center border-2 border-red-700 gap-3">
                                            <div className="flex flex-col gap-2">
                                                <div className="text-base font-normal text-gray-800">{storiesView.date1.day}</div>
                                            </div>
                                            
                                        </div> */}

                                    
                                
                            </div>

                        </div>

                        <div className="mt-10">

                            <h2 className="text-2xl font-semibold text-gray-800 mb-5">Story Details</h2>
                            <div className="flex flex-col gap-3 bg-white shadow p-4 rounded-lg">
                                <div className="text-[15px] font-normal text-gray-600 line-clamp-4" title={storiesView.description}>
                                    {storiesView.description}
                                </div>
                                <div className="text-[15px] font-normal text-gray-600 line-clamp-4" title={storiesView.description_1}>
                                    {storiesView.description_1}
                                </div>
                                <div className="text-[15px] font-normal text-gray-600 line-clamp-4" title={storiesView.description_2}>
                                    {storiesView.description_2}
                                </div>

                            </div>

                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

        </>
    )

}
export default StoriesDataDetails