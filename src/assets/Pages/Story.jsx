import React from "react";

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
  const featuredNews = newsData.find((item) => item.featured);

  const smallNews = newsData.filter(
    (item) => !item.featured
  );

  return (
    <section className="bg-[#f5f5f5] py-20 relative bg-repeat bg-center bg-[url('https://themesflat.co/html/wizym/image/footer.jpg')]">
        {/* <div class="absolute bottom-0 right-0 -z-10">
            <img alt="" src="https://demo2.themelexus.com/liquory/wp-content/uploads/2022/07/h4_bg.png" />
        </div> */}

      <div className="mx-auto max-w-[1200px] px-5">

        {/* ================= HEADER ================= */}
        <div className="mb-8">

          <h2 className="text-2xl font-semibold md:text-3xl">Latest News</h2>
            <div class="w-28 h-0.5 bg-[#002147]">&nbsp;</div>
        </div>
        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-2 gap-8">


          {/* ================= FEATURED NEWS ================= */}
          <div className="bg-white shadow-lg rounded-sm">

            <div className="h-[200px] overflow-hidden">

              <img src={imageMap[featuredNews.image]} alt={featuredNews.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />

            </div>

            <div className="px-6 py-5">
              <h3 className=" text-[18px] leading-[1.35] text-gray9800">{featuredNews.title}</h3>

              <p className="mt-3 text-[14px] text-gray-500">{featuredNews.date}</p>

            </div>

          </div>


          {/* ================= SMALL NEWS ================= */}
          <div className="flex flex-col">

            {smallNews.map((news, index) => (

              <div
                key={news.id}
                className={`
                  flex gap-5 py-3 items-center
                  ${index !== smallNews.length - 1? "border-b border-gray-300": ""}
                `}
              >

                {/* Image */}
                <div className="h-[120px] w-[120px] shrink-0 overflow-hidden">

                  <img
                    src={imageMap[news.image]}
                    alt={news.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />

                </div>


                {/* Content */}
                <div className="flex flex-col gap-3">

                  

                  <h3 className=" text-[15px] leading-[1.25] text-[#111]">
                    {news.title}
                  </h3>

                  <p className="text-[13px] text-gray-500">
                    {news.date}
                  </p>

                </div>

              </div>

            ))}

          </div>


          {/* ================= NEWSLETTER ================= */}
          

        </div>

      </div>

    </section>
  );
};

export default Story;
