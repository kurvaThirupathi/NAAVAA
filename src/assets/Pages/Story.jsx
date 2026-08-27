import React from "react";
import { useNavigate } from "react-router-dom";
import newsData from "../data/news.json";

import news1 from "../../assets/images/carouse_1.jpg";
import news2 from "../../assets/images/carouse_2.jpg";
import news3 from "../../assets/images/carouse_3.jpg";

const imageMap = {
  "carouse_1.jpg": news1,
  "carouse_2.jpg": news2,
  "carouse_3.jpg": news3,
};

const Story = () => {
  const navigate = useNavigate();
  const viewDetails = (id) => {
  navigate(`/stories/${id}`);
};
  const featuredNews = newsData.find((item) => item.featured);

  const smallNews = newsData.filter(
    (item) => !item.featured
  );

  return (
    <section className="bg-[#f5f5f5] py-20 relative bg-repeat bg-center bg-[url('https://themesflat.co/html/wizym/image/footer.jpg')]">
        

      <div className="mx-auto max-w-[1200px] px-5">

        
        <div className="mb-8 flex flex-row justify-between">
          <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Latest News</h2>
            <div class="w-28 h-0.5 bg-[#002147]">&nbsp;</div>
          </div>
            <div>
              <button type="button" onClick={() => navigate("/stories")} className="inline-block
    relative overflow-hidden z-0 px-2.5 py-2 border border-[#4f4f4f] bg-white rounded text-[14px] text-gray-800 cursor-pointer transition-all duration-200 ease-in before:content-[''] before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:scale-x-[1.25] before:scale-y-100 before:w-[140%] before:h-[180%] before:bg-[rgba(0,0,0,0.05)] before:rounded-[50%] before:block before:-z-10 before:transition-all before:duration-500 before:delay-100 before:ease-[cubic-bezier(0.55,0,0.1,1)] after:content-[''] after:absolute after:left-[55%] after:top-[180%] after:-translate-x-1/2 after:scale-x-[1.45] after:scale-y-100 after:w-[160%] after:h-[190%] after:bg-[#5f5c9e] after:rounded-[50%] after:block after:-z-10 after:transition-all after:duration-500 after:delay-100 after:ease-[cubic-bezier(0.55,0,0.1,1)] hover:text-white hover:border-[#5f5c9e] hover:before:top-[-35%] hover:before:bg-[#5f5c9e] hover:before:scale-x-[0.8] hover:before:scale-y-[1.3] hover:after:top-[-45%] hover:after:bg-[#5f5c9e] hover:after:scale-x-[0.8] hover:after:scale-y-[1.3]">View More</button>
            </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">

          <div className="cursor-pointer bg-white shadow-lg rounded-sm" onClick={() =>viewDetails(featuredNews.id)}>

            <div className="h-[180px] overflow-hidden">

              <img src={imageMap[featuredNews.image]} alt={featuredNews.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 rounded-md"
              />

            </div>

            <div className="px-6 py-5 flex flex-col gap-3">
              <h3 className=" text-[18px] leading-[1.35] text-gray-800 line-clamp-2">{featuredNews.title}</h3>

              <p className="text-[14px] text-gray-500">{featuredNews.date}</p>

            </div>

          </div>

          <div className="flex flex-col">

            {smallNews.map((news, index) => (

              <div onClick={() =>viewDetails(news.id)}
                key={news.id}
                className={`cursor-pointer bg-white p-2 rounded-sm shadow-lg mb-2 flex gap-5 py-3 items-center ${index !== smallNews.length - 1? "border-b border-gray-300": ""}`}>

                <div className="h-[120px] w-[120px] shrink-0 overflow-hidden">

                  <img
                    src={imageMap[news.image]}
                    alt={news.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 rounded-md"
                  />

                </div>
 
                <div className="flex flex-col gap-3">
                  <h3 className=" text-[15px] leading-[1.25] text-[#111] line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-[13px] text-gray-500">
                    {news.date}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Story;
