
import React, { useState } from "react";

import galleryData from "../data/galleryData.json";

import GalleryModal from "./GalleryModal";
import Pagination from "./Pagination";
import carousel4 from "../../assets/images/carouse_4.jpg";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  // =====================================================
  // GROUP GALLERY BY YEAR
  // =====================================================

  const groupedGallery = galleryData.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }

    acc[item.year].push(item);

    return acc;
  }, {});

  // =====================================================
  // YEARS - DESCENDING ORDER
  // Example: 2025, 2024, 2023, 2022...
  // =====================================================

  const years = Object.keys(groupedGallery).sort(
    (a, b) => Number(b) - Number(a)
  );

  // =====================================================
  // YEAR-WISE PAGINATION
  // One page = one year
  // =====================================================

  const totalPages = years.length;

  const currentYear = years[currentPage - 1];

  const currentYearImages = currentYear
    ? groupedGallery[currentYear]
    : [];

  // =====================================================
  // OPEN MODAL
  // =====================================================

  const openModal = (image) => {
    setSelectedImage(image);
  };

  // =====================================================
  // CLOSE MODAL
  // =====================================================

  const closeModal = () => {
    setSelectedImage(null);
  };

  // =====================================================
  // NEXT IMAGE
  // =====================================================

  const nextImage = () => {
    if (!selectedImage) return;

    const currentIndex = galleryData.findIndex(
      (item) => item.id === selectedImage.id
    );

    const nextIndex =
      (currentIndex + 1) % galleryData.length;

    setSelectedImage(galleryData[nextIndex]);
  };

  // =====================================================
  // PREVIOUS IMAGE
  // =====================================================

  const previousImage = () => {
    if (!selectedImage) return;

    const currentIndex = galleryData.findIndex(
      (item) => item.id === selectedImage.id
    );

    const previousIndex =
      (currentIndex - 1 + galleryData.length) %
      galleryData.length;

    setSelectedImage(galleryData[previousIndex]);
  };

  // =====================================================
  // PAGE CHANGE
  // =====================================================

  const handlePageChange = (page) => {
    setCurrentPage(page);

    setSelectedImage(null);

    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  };

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <section className="bg-white">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <div
        className="relative h-[150px] md:h-[200px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${carousel4})`,
        }}
      >

        {/* Overlay */}

        <div className="absolute inset-0 bg-[#062c4b]/80" />

        {/* Title */}

        <div className="relative z-10 px-7 py-4 text-center">

          <h1 className="text-white text-2xl md:text-3xl font-semibold lg:mt-5">
            Gallery
          </h1>

        </div>

      </div>


      {/* =====================================================
          GALLERY
      ====================================================== */}

      <div className="w-full mx-auto px-4 py-5">

        {currentYear && (

          <div className="mb-12">

            {/* =====================================================
                YEAR HEADING
            ====================================================== */}

            <div className="flex items-center gap-4 mb-6">

              <h2 className="text-base md:text-xl font-semibold text-[#5f5c9e] whitespace-nowrap">
                {currentYear} -{" "}
                {currentYearImages[0]?.title}
              </h2>

              <div className="flex-1 h-[1px] bg-gray-300" />

            </div>


            {/* =====================================================
                IMAGE GRID
            ====================================================== */}

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">

              {currentYearImages.map((item) => (

                <div
                  key={item.id}
                  className="w-full"
                >

                  {/* IMAGE */}

                  <button
                    type="button"
                    onClick={() => openModal(item)}
                    className="group relative overflow-hidden rounded-sm aspect-square cursor-pointer focus:outline-none w-full"
                  >

                    <img
                      src={item.image}
                      alt={
                        item.title ||
                        "Gallery image"
                      }
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Hover overlay */}

                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                  </button>


                  {/* IMAGE TITLE */}

                  {/* <h3 className="text-sm text-center text-gray-700 mt-2">
                    {item.title}
                  </h3> */}

                </div>

              ))}

            </div>

          </div>

        )}


        {/* =====================================================
            PAGINATION
        ====================================================== */}

        {totalPages > 1 && (

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

        )}

      </div>


      {/* =====================================================
          MODAL
      ====================================================== */}

      {selectedImage && (

        <GalleryModal
          image={selectedImage}
          onClose={closeModal}
          onNext={nextImage}
          onPrevious={previousImage}
        />

      )}

    </section>
  );
};

export default Gallery;
