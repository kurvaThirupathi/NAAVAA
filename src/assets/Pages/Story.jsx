import React from "react";
import { useNavigate } from "react-router-dom";
import newsData from "../data/StoriesDataDetails.json";
import Archive from "./archive";

const Story = () => {
  const navigate = useNavigate();
    const monthMap = {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Sept: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11,
    };
    const sortedStories = [...newsData].sort((a, b) => {
        const dateA = new Date(
            Number(a.date1.year),
            monthMap[a.date1.month],
            Number(a.date1.day)
        );

        const dateB = new Date(
            Number(b.date1.year),
            monthMap[b.date1.month],
            Number(b.date1.day)
        );

        return dateB - dateA;
    });

  // Create URL slug
  const createSlug = (title) => {
    return title
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  // Navigate to story details
  const viewDetails = (story) => {
    const slug = createSlug(story.title);

    navigate(`/stories/${story.id}-${slug}`);
  };

  // Featured story
  const featuredNews = sortedStories.find(
    (item) => item.featured
  );

  // Other stories
  const smallNews = sortedStories.filter(
    (item) => !item.featured
  );

  return (
    <section
      className="
        bg-[#f5f5f5]
        py-20
        relative
        bg-repeat
        bg-center
        bg-[url('https://themesflat.co/html/wizym/image/footer.jpg')]
      "
    >
      <div className="mx-auto w-[98%] px-5">

        <div className="flex md:flex-row flex-col gap-4">

          {/* =========================
              LEFT SIDE - LATEST NEWS
          ========================== */}
          <div className="md:w-[70%] w-full">

            {/* Heading */}
            <div className="mb-6">
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">
                  Latest News
                </h2>

                <div className="w-28 h-0.5 bg-[#002147]">
                  &nbsp;
                </div>
              </div>
            </div>

            {/* News Section */}
            <div className="grid grid-cols-2 gap-8">

              {/* =========================
                  FEATURED NEWS
              ========================== */}
              {featuredNews && (
                <div
                  className="
                    cursor-pointer
                    bg-white
                    shadow-lg
                    rounded-sm
                  "
                  onClick={() =>
                    viewDetails(featuredNews)
                  }
                >

                  {/* Image */}
                  <div className="h-[180px] overflow-hidden">

                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="
                        h-full
                        w-full
                        object-fill
                        transition-transform
                        duration-500
                        hover:scale-105
                        rounded-md
                      "
                    />

                  </div>

                  {/* Content */}
                  <div className="px-6 py-5 flex flex-col gap-3">

                    <h3
                      className="
                        text-[18px]
                        leading-[1.35]
                        text-gray-800
                        line-clamp-2
                      "
                    >
                      {featuredNews.title}
                    </h3>

                    <p className="text-[14px] text-gray-500">
                      {featuredNews.date}
                    </p>

                  </div>

                </div>
              )}

              {/* =========================
                  SMALL NEWS
              ========================== */}
              <div
                className="
                  flex
                  flex-col
                  max-h-[310px]
                  min-h-[310px]
                  overflow-y-auto
                  overflow-x-hidden
                "
              >

                {smallNews
                  .slice(0, 2)
                  .map((news, index) => (

                    <div
                      key={news.id}
                      onClick={() =>
                        viewDetails(news)
                      }
                      className={`
                        cursor-pointer
                        bg-white
                        p-2
                        rounded-sm
                        shadow-lg
                        mb-2
                        flex
                        gap-5
                        py-3
                        
                        ${
                          index !== smallNews.length - 1
                            ? "border-b border-gray-300"
                            : ""
                        }
                      `}
                    >

                      {/* Image */}
                      <div
                        className="
                          h-[120px]
                          w-[120px]
                          shrink-0
                          overflow-hidden
                        "
                      >

                        <img
                          src={news.image}
                          alt={news.title}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-300
                            hover:scale-105
                            rounded-md
                          "
                        />

                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-3">

                        <h3
                          className="
                            text-[15px]
                            leading-[1.25]
                            text-[#111]
                            line-clamp-2
                          "
                        >
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

            {/* =========================
                VIEW MORE
            ========================== */}
            <div className="mt-3 text-right">

              <button
                type="button"
                onClick={() =>
                  navigate("/stories")
                }
                className="
                  inline-block
                  relative
                  overflow-hidden
                  z-0
                  px-2.5
                  py-2
                  border
                  border-[#4f4f4f]
                  bg-white
                  rounded
                  text-[14px]
                  text-gray-800
                  cursor-pointer
                  transition-all
                  duration-200
                  ease-in

                  before:content-['']
                  before:absolute
                  before:left-1/2
                  before:top-full
                  before:-translate-x-1/2
                  before:scale-x-[1.25]
                  before:scale-y-100
                  before:w-[140%]
                  before:h-[180%]
                  before:bg-[rgba(0,0,0,0.05)]
                  before:rounded-[50%]
                  before:block
                  before:-z-10
                  before:transition-all
                  before:duration-500
                  before:delay-100
                  before:ease-[cubic-bezier(0.55,0,0.1,1)]

                  after:content-['']
                  after:absolute
                  after:left-[55%]
                  after:top-[180%]
                  after:-translate-x-1/2
                  after:scale-x-[1.45]
                  after:scale-y-100
                  after:w-[160%]
                  after:h-[190%]
                  after:bg-[#5f5c9e]
                  after:rounded-[50%]
                  after:block
                  after:-z-10
                  after:transition-all
                  after:duration-500
                  after:delay-100
                  after:ease-[cubic-bezier(0.55,0,0.1,1)]

                  hover:text-white
                  hover:border-[#5f5c9e]

                  hover:before:top-[-35%]
                  hover:before:bg-[#5f5c9e]
                  hover:before:scale-x-[0.8]
                  hover:before:scale-y-[1.3]

                  hover:after:top-[-45%]
                  hover:after:bg-[#5f5c9e]
                  hover:after:scale-x-[0.8]
                  hover:after:scale-y-[1.3]
                "
              >
                View More
              </button>

            </div>

          </div>


          {/* =========================
              RIGHT SIDE - ARCHIVE
          ========================== */}
          <div className="md:w-[30%] w-full">

            <div className="mb-6">

              <h2
                className="
                  text-gray-600
                  text-xl
                  md:text-2xl
                  font-semibold
                  leading-10
                "
              >
                Archive
              </h2>

              <div className="w-14 h-0.5 bg-[#002147]">
                &nbsp;
              </div>

            </div>

            <Archive />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Story;