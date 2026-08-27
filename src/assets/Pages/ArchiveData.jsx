import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import archiveDataView from "../Data/archive.json"
import carousel4 from "../../assets/images/carouse_4.jpg";
const ITEMS_PER_PAGE = 3;
function ArchiveData(){
    const [currentPage, setCurrentPage] = useState(1);
     const allStories = Object.entries(archiveDataView).flatMap(
  ([year, items]) =>
    items.map((item) => ({
      ...item,
      year,
    }))
);
     const totalPages = Math.ceil(allStories.length / ITEMS_PER_PAGE);
     const navigate = useNavigate();
    const viewDetails = (id) => {
       // alert("");
    navigate(`/stories/${id}`);
    };
   
     // Starting index
  const startIndex =(currentPage - 1) * ITEMS_PER_PAGE;

  // Current page data
  const currentStories = allStories.slice(startIndex,startIndex + ITEMS_PER_PAGE);

  // Page change
  const handlePageChange = (page) => {setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
    return(
        <>
            <section>
                <div className="relative h-[150px] md:h-[200px] bg-cover bg-center flex items-center justify-center"
                                            style={{ backgroundImage:
                                            `url(${carousel4})`,
                                            }}>
                    <div className="absolute inset-0 bg-[#062c4b]/80" />
                    <div className=" relative z-10 px-7 py-4 text-center" >
                        <h1 className="text-white text-2xl md:text-3xl font-semibold lg:mt-5">Archive Stories</h1>
                         {/* <p className="text-white text-base font-normal">{items.year}</p> */}
                    </div>
                </div>
                <div className="w-[98%] mx-auto">
                    <div className="bg-[#f5f5f5] pt-10 relative bg-repeat bg-center bg-[url('https://themesflat.co/html/wizym/image/footer.jpg')]">
                                            {/* {Object.entries(data).map(([year, items]) => (
                                                <div key={year}>
                                                    

                                                    {items.map((item) => (
                                                    <div key={item.id}>
                                                        <h3>{item.title}</h3>
                                                        <p>{item.description}</p>
                                                        <span>{item.date}</span>
                                                    </div>
                                                    ))}
                                                </div>
                                                ))} */}
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                            {
                                 currentStories.map((items) => {
                                // currentStories.map((stories)=>{
                                    return(
                                       <div key={items.id} id={items.id} className="group/view flex flex-col gap-5 px-3 py-2 border-[1.5px] border-[#f5a712] border-dashed rounded-md shadow bg-white [transition:all_0.5s_ease] hover:cursor-pointer" onClick={() =>
                                    viewDetails(items.id)
                                }>

                            <div className="relative w-full h-[150px] flex-shrink-0 group-hover/view:scale-[1.04] [transition:all_0.5s_ease]">

                                <img src={items.image} alt={items.title} loading="lazy" className="w-full h-full object-fill rounded-md" />

                                

                            </div>


                            <div className="flex-1">
                                <h2 className="text-gray-800 text-lg font-medium leading-6 mb-2">{items.title}</h2>



                                <div className="flex items-start gap-1 text-gray-500 text-[12px] mb-3">

                                {/* Location icon */}

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
                                </svg>


                                <span>
                                    {items.title}
                                </span>

                                </div>


                                

                                <p className="text-gray-600 text-[13px] leading-5 max-w-4xl mb-3 line-clamp-5" title={items.description}>
                                {items.description}
                                </p>


                               

                                <button type="button" onClick={(e) => {e.stopPropagation();viewDetails(items.id);}}
                                className="inline-block
    relative overflow-hidden z-0 px-2.5 py-2 border border-[#4f4f4f] rounded text-[14px] text-gray-800 cursor-pointer transition-all duration-200 ease-in before:content-[''] before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:scale-x-[1.25] before:scale-y-100 before:w-[140%] before:h-[180%] before:bg-[rgba(0,0,0,0.05)] before:rounded-[50%] before:block before:-z-10 before:transition-all before:duration-500 before:delay-100 before:ease-[cubic-bezier(0.55,0,0.1,1)] after:content-[''] after:absolute after:left-[55%] after:top-[180%] after:-translate-x-1/2 after:scale-x-[1.45] after:scale-y-100 after:w-[160%] after:h-[190%] after:bg-[#5f5c9e] after:rounded-[50%] after:block after:-z-10 after:transition-all after:duration-500 after:delay-100 after:ease-[cubic-bezier(0.55,0,0.1,1)] group-hover/view:text-white group-hover/view:border-[#5f5c9e] group-hover/view:before:top-[-35%] group-hover/view:before:bg-[#5f5c9e] group-hover/view:before:scale-x-[0.8] group-hover/view:before:scale-y-[1.3] group-hover/view:after:top-[-45%] group-hover/view:after:bg-[#5f5c9e] group-hover/view:after:scale-x-[0.8] group-hover/view:after:scale-y-[1.3]">
                                View Details</button>

                            </div>

                            </div> 
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Pagination className="mb-3" currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
                </div>
            </section>

        </>
    )
}
export default ArchiveData