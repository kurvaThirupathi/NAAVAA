import React from "react";
import { Link } from "react-router-dom";

import eventData from "../data/EventsDataDetails.json";
import storyData from "../data/StoriesDataDetails.json";

const createSlug = (title = "") => {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const monthOrder = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};



const createArchiveData = () => {
  const archive = {};

  storyData.forEach((story) => {
    const year = String(story.date1?.year);
    const month = story.date1?.month;
    const day = String(story.date1?.day);

    if (!year || !month || !day) return;

    if (!archive[year]) {
      archive[year] = {};
    }

    if (!archive[year][month]) {
      archive[year][month] = {};
    }

    if (!archive[year][month][day]) {
      archive[year][month][day] = {
        stories: [],
        events: [],
      };
    }

    archive[year][month][day].stories.push(story);
  });

  
  eventData.forEach((event) => {
    const year = String(event.date1?.year);
    const month = event.date1?.month;
    const day = String(event.date1?.day);

    if (!year || !month || !day) return;

    if (!archive[year]) {
      archive[year] = {};
    }

    if (!archive[year][month]) {
      archive[year][month] = {};
    }

    if (!archive[year][month][day]) {
      archive[year][month][day] = {
        stories: [],
        events: [],
      };
    }

    archive[year][month][day].events.push(event);
  });

  return archive;
};

const data = createArchiveData();

function Archive() {
  return (
    <div className="w-full bg-white py-5 relative shadow-lg rounded-md max-h-[300px] min-h-[300px] overflow-y-auto overflow-x-hidden">
      <div className="px-4">

        {Object.entries(data)
          .sort(
            ([yearA], [yearB]) =>
              Number(yearB) - Number(yearA)
          )
          .map(([year, months]) => (
            <section key={year} className="mb-4">

              {/* ================= YEAR ================= */}

              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 flex items-center justify-center rounded-lg bg-orange-500 text-white font-medium text-[13px]">
                  {year}
                </div>

                <div className="h-[2px] flex-1 bg-orange-200" />
              </div>

              {/* ================= MONTH ================= */}

              {Object.entries(months)
                .sort(
                  ([monthA], [monthB]) =>
                    monthOrder[monthB.toLowerCase()] -
                    monthOrder[monthA.toLowerCase()]
                )
                .map(([month, days]) => (

                  <div key={month} className="mb-4">

                    {/* ================= DAY ================= */}

                    {Object.entries(days)
                      .sort(
                        ([dayA], [dayB]) =>
                          Number(dayB) - Number(dayA)
                      )
                      .map(([day, dayData]) => {

                        const stories =
                          dayData.stories || [];

                        const events =
                          dayData.events || [];

                        return (
                          <div
                            key={day}
                            className="mb-4"
                          >

                            {/* ================= DATE ================= */}

                            <div className="flex items-center gap-4 mb-2 relative">

                              <div className="absolute right-0 mt-[16px] flex flex-col items-center justify-center px-3 py-2 rounded-lg bg-gray-800 text-white">

                                <span className="text-[16px] font-semibold">
                                  {day}
                                </span>

                                <span className="text-[12px] uppercase">
                                  {month}
                                </span>

                              </div>

                            </div>

                          

                            {stories.length > 0 && (
                              <div className="mb-4 ml-2">

                                <div className="flex items-center gap-3 mb-2.5">

                                  <h3 className="text-[15px] font-semibold text-gray-800">
                                    Stories
                                  </h3>

                                  <div className="h-[1px] flex-1 bg-gray-300" />

                                </div>

                                <div>

                                  {stories.map((story) => (

                                    <Link
                                      key={story.id}
                                      to={`/archive_stories/story/${createSlug(
                                        story.title
                                      )}`}
                                      state={{
                                        id: story.id,
                                      }}
                                      className="block mb-2 group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                    >

                                      <div className="p-2">

                                        <h4
                                          className="text-[14px] font-base text-gray-800 group-hover:text-[#5f5c9e] transition-colors hover:underline line-clamp-2"
                                          title={story.title}
                                        >
                                          {story.title}
                                        </h4>

                                      </div>

                                    </Link>

                                  ))}

                                </div>

                              </div>
                            )}

                           

                            {events.length > 0 && (
                              <div className="ml-2">

                                <div className="flex items-center gap-3 mb-2.5">

                                  <h3 className="text-[14px] font-semibold text-gray-800">
                                    Events
                                  </h3>

                                  <div className="h-[1px] flex-1 bg-gray-300" />

                                </div>

                                <div>

                                  {events.map((event) => (

                                    <Link
                                      key={event.id}
                                      to={`/archive_stories/event/${createSlug(
                                        event.title
                                      )}`}
                                      state={{
                                        id: event.id,
                                      }}
                                      className="block mb-2 group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                    >

                                      <div className="p-2">

                                        <h4
                                          className="text-[14px] font-base text-gray-800 group-hover:text-[#5f5c9e] transition-colors hover:underline line-clamp-2"
                                          title={event.title}
                                        >
                                          {event.title}
                                        </h4>

                                      </div>

                                    </Link>

                                  ))}

                                </div>

                              </div>
                            )}

                          </div>
                        );
                      })}

                  </div>
                ))}

            </section>
          ))}

      </div>
    </div>
  );
}

export default Archive;