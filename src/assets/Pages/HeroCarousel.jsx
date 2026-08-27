import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination, EffectFade, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import carousel1 from "../../assets/images/carouse_1.jpg";
import carousel2 from "../../assets/images/carouse_2.jpg";
import carousel3 from "../../assets/images/carouse_3.jpg";
import carousel4 from "../../assets/images/carouse_4.jpg";
import carousel5 from "../../assets/images/carouse_5.jpg";
import carousel6 from "../../assets/images/carouse_6.jpg";
import carousel7 from "../../assets/images/carouse_7.jpg";
import carousel8 from "../../assets/images/carouse_8.jpg";
import carousel9 from "../../assets/images/carouse_9.jpg";
import carousel10 from "../../assets/images/carouse_10.jpg";
import carousel11 from "../../assets/images/carouse_11.jpeg";

const slides = [
  {
    id: 1,
    category: "Education",
    title: "Inspiring Young Minds Through Quality Education",
    description:
      "We provide a supportive learning environment where students develop knowledge, confidence and the skills they need to build a bright future.",
    image:carousel1,
  },

  {
    id: 2,
    category: "Campus Life",
    title: "A Vibrant Campus Where Every Student Belongs",
    description:
      "From academic activities to cultural celebrations, our campus provides students with opportunities to learn, connect, participate and grow together.",
    image:carousel2,
  },

  {
    id: 3,
    category: "Academics",
    title: "Learning That Builds Knowledge and Character",
    description:
      "Our academic programs encourage curiosity, creativity and critical thinking while helping students discover their strengths and achieve their goals.",
    image:carousel3,
  },

  {
    id: 4,
    category: "Sports",
    title: "Building Teamwork Through Sports and Activities",
    description:
      "Sports and extracurricular activities help students develop discipline, teamwork and leadership while maintaining a healthy and active lifestyle.",
    image:carousel4,
  },
  {
    id: 5,
    category: "Students",
    title: "Empowering Students to Discover Their Potential",
    description:
      "Every student is encouraged to explore new ideas, develop their talents and take part in experiences that shape their personal and academic journey.",
    image:carousel5,
  },
  {
    id: 6,
    category: "Achievements",
    title: "Celebrating Excellence and Student Achievements",
    description:
      "We celebrate the dedication and achievements of our students, encouraging them to pursue excellence both inside and outside the classroom.",
    image:carousel6,
  },
  {
    id: 7,
    category: "Events",
    title: "Creating Memorable Moments Through Campus Events",
    description:
      "Our events bring students, teachers, alumni and the wider community together to celebrate learning, creativity, culture and friendship.",
    image:carousel7,
  },
  {
    id: 8,
    category: "Innovation",
    title: "Encouraging Creativity, Innovation and New Ideas",
    description:
      "Students are inspired to think creatively, explore new possibilities and turn their ideas into meaningful learning experiences.",
    image:carousel8,
  },
  {
    id: 9,
    category: "Community",
    title: "Growing Together as a Strong Learning Community",
    description:
      "Our institution brings together students, teachers, families and alumni to create a welcoming community built on collaboration and shared values.",
    image:carousel9,
  },
  {
    id: 10,
    category: "Alumni",
    title: "Connecting Our Past, Present and Future",
    description:
      "Our alumni community continues to inspire current students through their experiences, achievements and lasting connection with the institution.",
    image:carousel10,
  },
  {
    id: 11,
    category: "Future",
    title: "Preparing Students for a Changing World",
    description:
      "With strong academic foundations and opportunities beyond the classroom, we prepare students to confidently embrace new challenges and future opportunities.",
    image:carousel11,
  }
];

const HeroCarousel = () => {
  return (
    <section className="relative h-[700px] w-full overflow-hidden lg:h-[91dvh]">

      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade, Keyboard]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          //pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev",
        }}
        pagination={{
          el: ".carousel-pagination",
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        className="h-full w-full"
      >

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>

            <div className="relative h-full w-full">

              {/* Background Image */}
              <img src={slide.image} alt={slide.title} className="carousel-image absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Main Dark Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/45
                "
              />

              {/* Colored Overlay - similar to Smarty */}
              <div className="absolute inset-0 "/>

              {/* Content */}
              <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center px-6">

                <div className="max-w-[680px] pt-10 text-white">

                  {/* Category */}
                  <div className="carousel-category mb-5 flex items-center gap-4">

                    <span className="h-[2px] w-[45px] bg-[#f2c94c]" />

                    <span className="font-serif text-sm font-semibold uppercase tracking-[3px] text-[#f2c94c] md:text-base">
                      {slide.category}
                    </span>

                  </div>

                  {/* Title */}
                  <h1
                    className="
                      carousel-title
                      font-serif
                      text-[35px]
                      font-semibold
                      leading-[1.1]
                      sm:text-[30px]
                      md:text-[35px]
                      lg:text-[40px]
                    "
                  >
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p
                    className="
                      carousel-description
                      mt-6
                      max-w-[620px]
                      text-base
                      leading-7
                      text-white/85
                      md:text-lg
                    "
                  >
                    {slide.description}
                  </p>

                  {/* Button */}
                  <div className="carousel-button mt-8">


                  </div>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

      {/* Previous Arrow */}
      <button
        className="
          carousel-prev
          absolute
          left-5
          top-1/2
          z-20
          hidden
          h-14
          w-14
          -translate-y-1/2
          items-center
          justify-center
          border
          border-white/40
          bg-black/20
          text-2xl
          text-white
          backdrop-blur-sm
          transition-all
          duration-300
          hover:bg-white
          hover:text-black
          md:flex
        "
      >
        ←
      </button>

      {/* Next Arrow */}
      <button
        className="
          carousel-next
          absolute
          right-5
          top-1/2
          z-20
          hidden
          h-14
          w-14
          -translate-y-1/2
          items-center
          justify-center
          border
          border-white/40
          bg-black/20
          text-2xl
          text-white
          backdrop-blur-sm
          transition-all
          duration-300
          hover:bg-white
          hover:text-black
          md:flex
        "
      >
        →
      </button>

      {/* Pagination */}
      <div
        className="
          carousel-pagination
          absolute
          bottom-8
          left-1/2
          z-20
          flex
          -translate-x-1/2
          items-center
          gap-3
        "
      />

    </section>
  );
};

export default HeroCarousel;