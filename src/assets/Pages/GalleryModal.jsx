import React, { useEffect } from "react";

const GalleryModal = ({image,onClose,onNext, onPrevious}) => {


  // =====================================================
  // KEYBOARD EVENTS
  // =====================================================

  useEffect(() => {

    const handleKeyDown = (event) => {

      // ESC
      if (
        event.key === "Escape"
      ) {
        onClose();
      }


      // RIGHT ARROW
      if (
        event.key === "ArrowRight"
      ) {
        onNext();
      }


      // LEFT ARROW
      if (
        event.key === "ArrowLeft"
      ) {
        onPrevious();
      }

    };


    document.addEventListener(
      "keydown",
      handleKeyDown
    );


    // Prevent background scrolling

    document.body.style.overflow =
      "hidden";


    return () => {

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow =
        "auto";

    };

  }, [onClose,onNext,onPrevious]);


  // =====================================================
  // FULLSCREEN
  // =====================================================

  const handleFullscreen = () => {

    const imageElement =
      document.getElementById(
        "gallery-modal-image"
      );


    if (
      imageElement &&
      imageElement.requestFullscreen
    ) {

      imageElement.requestFullscreen();

    }

  };


  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center" onClick={onClose}>


      {/* =================================================
          TOP RIGHT BUTTONS
      ================================================= */}

      <div
        className="
          absolute
          top-5
          right-5
          z-30
          flex
          items-center
          gap-6
        "
        onClick={(event) =>
          event.stopPropagation()
        }
      >


        {/* FULLSCREEN */}

        <button
          type="button"
          onClick={
            handleFullscreen
          }
          title="Fullscreen"
          className="
            text-white
            hover:text-emerald-400
            transition
          "
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >

            <path d="M8 3H5a2 2 0 0 0-2 2v3" />

            <path d="M16 3h3a2 2 0 0 1 2 2v3" />

            <path d="M8 21H5a2 2 0 0 1-2-2v-3" />

            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />

          </svg>

        </button>


        {/* CLOSE */}

        <button
          type="button"
          onClick={onClose}
          title="Close"
          className="
            text-white
            hover:text-red-400
            transition
          "
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >

            <path d="M18 6 6 18" />

            <path d="m6 6 12 12" />

          </svg>

        </button>

      </div>


      {/* =================================================
          PREVIOUS BUTTON
      ================================================= */}

      <button
        type="button"
        onClick={(event) => {

          event.stopPropagation();

          onPrevious();

        }}
        className="
          absolute
          left-3
          md:left-8
          top-1/2
          -translate-y-1/2
          z-20
          w-10
          h-10
          rounded-full
          bg-black/40
          text-white
          text-3xl
          flex
          items-center
          justify-center
          hover:bg-emerald-500
          transition
        "
        aria-label="Previous image"
      >
        ‹
      </button>


      {/* =================================================
          IMAGE
      ================================================= */}

      <div
        className="
          relative
          max-w-[90vw]
          max-h-[90vh]
          flex
          items-center
          justify-center
        "
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        <img
          id="gallery-modal-image"
          src={image.image}
          alt={
            image.title ||
            "Gallery image"
          }
          className="
            max-w-[90vw]
            max-h-[90vh]
            w-auto
            h-auto
            object-contain
            shadow-2xl
            select-none
          "
        />

      </div>


      {/* =================================================
          NEXT BUTTON
      ================================================= */}

      <button
        type="button"
        onClick={(event) => {

          event.stopPropagation();

          onNext();

        }}
        className="
          absolute
          right-3
          md:right-8
          top-1/2
          -translate-y-1/2
          z-20
          w-10
          h-10
          rounded-full
          bg-black/40
          text-white
          text-3xl
          flex
          items-center
          justify-center
          hover:bg-emerald-500
          transition
        "
        aria-label="Next image"
      >
        ›
      </button>

    </div>
  );
};

export default GalleryModal;