import React, { useState } from "react";

import galleryData from "../data/galleryData.json";

import GalleryModal from "./GalleryModal";
import Pagination from "./Pagination";
import carousel4 from "../../assets/images/carouse_4.jpg";
const ITEMS_PER_PAGE = 6;

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedImage, setSelectedImage] =useState(null);

  // Total number of pages
  const totalPages = Math.ceil(
    galleryData.length / ITEMS_PER_PAGE
  );

  // Starting index
  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  // Get only 9 images for current page
  const currentImages = galleryData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );


  // =========================
  // OPEN MODAL
  // =========================

  const openModal = (image) => {setSelectedImage(image);};


  // =========================
  // CLOSE MODAL
  // =========================

  const closeModal = () => {setSelectedImage(null);};


  // =========================
  // NEXT IMAGE
  // =========================

  const nextImage = () => {

    if (!selectedImage) return;

    const currentIndex =
      galleryData.findIndex(
        (item) =>
          item.id === selectedImage.id
      );

    const nextIndex =
      (currentIndex + 1) %
      galleryData.length;

    setSelectedImage(
      galleryData[nextIndex]
    );
  };


  // =========================
  // PREVIOUS IMAGE
  // =========================

  const previousImage = () => {

    if (!selectedImage) return;

    const currentIndex =
      galleryData.findIndex(
        (item) =>
          item.id === selectedImage.id
      );

    const previousIndex =
      (currentIndex -
        1 +
        galleryData.length) %
      galleryData.length;

    setSelectedImage(
      galleryData[previousIndex]
    );
  };


  // =========================
  // PAGE CHANGE
  // =========================

  const handlePageChange = (page) => {

    setCurrentPage(page);

    // Scroll gallery to top
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  };


  return (
    <section className=" bg-white">
      <div className="relative h-[150px] md:h-[200px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage:
            `url(${carousel4})`,
        }}>
        <div className="absolute inset-0 bg-[#062c4b]/80" />

        <div className=" relative z-10 px-7 py-4 text-center" >

          <h1 className="text-white text-2xl md:text-3xl font-semibold lg:mt-5">Gallery</h1>


          {/* <div
            className="
              mt-1
              text-[10px]
              text-white
            "
          >

            <span className="text-emerald-400">
              Home
            </span>

            <span className="mx-1">
              /
            </span>

            Gallery

          </div> */}

        </div>

      </div>


      {/* =====================================================
          GALLERY
      ====================================================== */}

      <div className="w-full mx-auto px-4 py-5">

        {/* Gallery Grid */}

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">

          {currentImages.map((item) => (

            <button key={item.id} type="button" onClick={() =>openModal(item)}
              className="group relative overflow-hidden rounded-sm aspect-square cursor-pointer focus:outline-none">

              <img src={item.image} alt={item.title ||"Gallery image"}
                loading="lazy" className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>


              {/* Hover Overlay */}

              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"/>

            </button>

          ))}

        </div>


        {/* Pagination */}

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}
        />

      </div>


      {/* =====================================================
          MODAL
      ====================================================== */}

      {selectedImage && (

        <GalleryModal image={selectedImage} onClose={closeModal} onNext={nextImage} onPrevious={previousImage}
        />

      )}

    </section>
  );
};

export default Gallery;