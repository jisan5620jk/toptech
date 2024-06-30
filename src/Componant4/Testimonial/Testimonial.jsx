/* eslint-disable no-unused-vars */
import testiImg from "/images/testi4-author-1.png";
import testiImg2 from "/images/testi4-author-2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import { FaCircle, FaStarOfLife } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

const testiData = [
  {
    id: 1,
    testiImg: testiImg,
    testiRatingIcon: <IoStar />,
    testiName: "Jhon D. Alexon",
    testIcon: <FaCircle />,
    testiDesignation: "Web Developer",
    testiDesc: `Sometimes goods can arrive early when clients
                being brought into the solution creative design
                need place to stored for short goods can arrive
                desig have space your needs.`,
  },
  {
    id: 2,
    testiImg: testiImg2,
    testiRatingIcon: <IoStar />,
    testiName: "Anjelina Watson",
    testIcon: <FaCircle />,
    testiDesignation: "UI/UX Designer",
    testiDesc: `Sometimes goods can arrive early when clients
                being brought into the solution creative design
                need place to stored for short goods can arrive
                desig have space your needs.`,
  },
  {
    id: 3,
    testiImg: testiImg,
    testIcon: <FaCircle />,
    testiRatingIcon: <IoStar />,
    testiName: "Al-Amin Islam",
    testiDesignation: "Web Developer",
    testiDesc: `Sometimes goods can arrive early when clients
                being brought into the solution creative design
                need place to stored for short goods can arrive
                desig have space your needs.`,
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className="py-28 bg-HeadingColor-0 relative z-10 before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-2/4 before:-z-10 before:h-2/3 before:bg-[url('/images/testi4-shape-1.png')] before:bg-center before:bg-cover before:bg-no-repeat overflow-hidden testimonial">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Nunito font-medium text-PrimaryColor-0 flex items-center gap-2 justify-center">
            <FaStarOfLife />
            TESTIMONIALS
            <FaStarOfLife />
          </h5>
          <h1 className="font-Nunito font-bold text-xl leading-7 sm:text-[36px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-5 mb-3">
            What Our Clinets Says
          </h1>
        </div>
        <div className="mt-[46px]">
          <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
            <div>
              {testiData.map(
                ({
                  id,
                  testiImg,
                  testiRatingIcon,
                  testiName,
                  testiDesignation,
                  testiDesc,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="pb-[80px] pt-3">
                        <TestimonialCard
                          testiImg={testiImg}
                          testiRatingIcon={testiRatingIcon}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiDesc={testiDesc}
                        />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;