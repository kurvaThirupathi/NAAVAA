
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import archiveData from "../Data/archive.json";
import carousel4 from "../../assets/images/carouse_4.jpg";

function ArchiveData() {

  const navigate = useNavigate();

  const { type, id } = useParams();


 
  let selectedData = null;

  Object.entries(archiveData).forEach(([year, months]) => {

    Object.entries(months).forEach(([month, days]) => {

      Object.entries(days).forEach(([day, dayData]) => {

        
        if (type === "story") {

          const stories = dayData.stories || [];

          const story = stories.find(
            (item) => String(item.id) === String(id)
          );

          if (story) {

            selectedData = {
              ...story,
              year,
              month,
              day,
              type: "story"
            };

          }

        }


       
        if (type === "event") {

          const events = dayData.events || [];

          const event = events.find(
            (item) => String(item.id) === String(id)
          );

          if (event) {

            selectedData = {
              ...event,
              year,
              month,
              day,
              type: "event"
            };

          }

        }

      });

    });

  });


  
  const handleBack = () => {

    navigate(-1);

  };


  
  if (!selectedData) {

    return (

      <section className="w-full">

        
        <div className="relative h-[150px] md:h-[200px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${carousel4})`
          }}
        >

          <div className="absolute inset-0 bg-[#062c4b]/80" />

          <div className="relative z-10 px-7 py-4 text-center">

            <h1 className="text-white text-2xl md:text-3xl font-semibold">Archive Details</h1>

          </div>

        </div>


       
        <div className="text-center py-20">

          <h2 className="text-xl text-gray-500">No {type} details found</h2>

          <p className="text-sm text-gray-400 mt-2">ID: {id}</p>

          <button type="button" onClick={handleBack}
            className="mt-5 px-5 py-2 bg-[#5f5c9e] text-white rounded hover:bg-[#4d4a85] transition-all"
          >← Back to Archive</button>

        </div>

      </section>

    );

  }


  
  const imagePath = selectedData.image? selectedData.image.startsWith("/")? selectedData.image: `/${selectedData.image}`
    : "";

  const pageTitle =selectedData.type === "story"? "Archive Stories": "Archive Events";


 
  return (

    <section className="w-full">


     
      <div
        className="relative h-[150px] md:h-[200px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${carousel4})`
        }}>
        <div className="absolute inset-0 bg-[#062c4b]/80" />
        <div className="relative z-10 px-7 py-4 text-center">
          <h1 className="text-white text-2xl md:text-3xl font-semibold lg:mt-5">{pageTitle}</h1>

        </div>

      </div>
      <div className="w-[98%] mx-auto">

        <div className="bg-[#f5f5f5] pt-10 pb-10 px-2 md:px-6 relative bg-repeat bg-center bg-[url('https://themesflat.co/html/wizym/image/footer.jpg')]">

          <div className="mb-6">

            <button
              type="button"
              onClick={handleBack}
              className="
                px-4
                py-2
                border
                border-[#5f5c9e]
                rounded
                text-sm
                text-[#5f5c9e]
                hover:bg-[#5f5c9e]
                hover:text-white
                transition-all
                duration-300
              "
            >
              ← Back to Archive
            </button>

          </div>


          

          <div
            className="
              max-w-4xl
              mx-auto
              bg-white
              border-[1.5px]
              border-[#f5a712]
              border-dashed
              rounded-xl
              shadow-md
              overflow-hidden
            "
          >


          

            {imagePath && (

              <div className="relative w-full h-[200px] overflow-hidden">

                <img src={imagePath} alt={selectedData.title || "Archive"}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log(
                      "Image not found:",
                      e.target.src
                    );

                  }}
                />

              </div>

            )}


           

            <div className="p-5 md:p-8">


              
              <div className="mb-4">

                <span
                  className="
                    inline-block
                    px-3
                    py-1
                    rounded-full
                    bg-[#5f5c9e]
                    text-white
                    text-xs
                    uppercase
                  "
                >
                  {selectedData.type}
                </span>

              </div>


             

              <h1
                className="text-xl md:text-3xl font-semibold text-gray-800 leading-7 md:leading-9 mb-4">

                {selectedData.title}

              </h1>


             

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-gray-500
                  text-[13px]
                  mb-6
                "
              >

                {/* Calendar Icon */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="flex-shrink-0"
                >

                  <rect
                    width="18"
                    height="18"
                    x="3"
                    y="4"
                    rx="2"
                    ry="2"
                  />

                  <line
                    x1="16"
                    x2="16"
                    y1="2"
                    y2="6"
                  />

                  <line
                    x1="8"
                    x2="8"
                    y1="2"
                    y2="6"
                  />

                  <line
                    x1="3"
                    x2="21"
                    y1="10"
                    y2="10"
                  />

                </svg>


                <span>

                  {selectedData.month}{" "}
                  {selectedData.day},{" "}
                  {selectedData.year}

                </span>

              </div>


              

              <div>

                <p
                  className="
                    text-gray-600
                    text-[14px]
                    md:text-[15px]
                    leading-6
                    md:leading-7
                    whitespace-pre-line
                  "
                >

                  {selectedData.description}

                </p>

              </div>


            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default ArchiveData;

