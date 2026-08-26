import React from "react";

const Pagination = ({currentPage,totalPages,onPageChange}) => {

  // =====================================================
  // CREATE PAGINATION NUMBERS
  // =====================================================

  const getPages = () => {

    // If pages are small
    if (totalPages <= 6) {

      return Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );

    }


    // First pages

    if (currentPage <= 3) {

      return [
        1,
        2,
        3,
        "...",
        totalPages,
      ];

    }


    // Last pages

    if (
      currentPage >=
      totalPages - 2
    ) {

      return [
        1,
        "...",
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];

    }


    // Middle pages

    return [
      1,
      "...",
      currentPage,
      "...",
      totalPages,
    ];
  };


  const pages = getPages();


  return (
    <div
      className="flex items-center justify-center gap-2 mt-7 mb-2.5">


      <button type="button" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 text-base hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(
            currentPage - 1
          )
        }>
        ‹
      </button>


      {/* =================================================
          PAGE NUMBERS
      ================================================= */}

      {pages.map(
        (page, index) => {

          // Ellipsis

          if (
            page === "..."
          ) {

            return (
              <span key={`dots-${index}`}
                className="w-8 h-8 flex items-center justify-center text-gray-400 text-base">...</span>
            );

          }


          // Page button

          return (
            <button key={page} type="button"
              onClick={() =>
                onPageChange(page)
              }
              className={`w-8 h-8 rounded-full flex items-center justify-center text-base transition-all duration-200

                ${
                  currentPage === page
                    ? `bg-[#5e5c9d] text-white border border-[#5e5c9d]`
                    : `border border-gray-200 text-gray-500 hover:bg-[#5e5c9d] hover:text-white`
                }
              `}
            >{page}
            </button>
          );

        }
      )}


      {/* =================================================
          NEXT
      ================================================= */}

      <button
        type="button"
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          onPageChange(
            currentPage + 1
          )
        }
        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 text-base hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition">
        ›
      </button>

    </div>
  );
};

export default Pagination;