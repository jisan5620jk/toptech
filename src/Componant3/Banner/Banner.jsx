import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./banner.css";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";
import BannerNavigation from "./BannerNavigation";

const Banner = () => {
  const settings = {
    loop: true,
    speed: 2000,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    duration: 3000,
  };
  return (
    <div className="relative">
      <Swiper {...settings}>
        <SwiperSlide>
          <section className="bg-[url('/images/hero2-bg.png')] bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[800px] lg:h-[960px] xl:h-[952px] flex items-center">
            <div className="Container">
              <div className="relative banner-content text-center pt-[47px]">
                <h5 className="font-AlbertSans text-white font-medium mb-8">
                  SOLUTIONS FOR ENVIROMENTAL PROTECTION
                </h5>
                <h1 className="font-AlbertSans font-extrabold text-white text-xl sm:text-[38px] sm:leading-[56px] md:text-[46px] md:leading-[54px] xl:text-[76px] xl:leading-[90px]">
                  YOUR JOURNEY TO SOLAR
                </h1>
                <h1 className="font-AlbertSans font-extrabold text-white text-xl sm:text-[38px] sm:leading-[56px] md:text-[46px] md:leading-[54px] xl:text-[76px] xl:leading-[90px] -mt-0 sm:-mt-3 md:mt-2 lg:mt-2">
                  EMPOWERMENT
                </h1>
                <div className="flex justify-center m-auto mt-9">
                  <Link to={"/about"}>
                    <button className="primary-btn2">
                      {`Find Out More`}
                      <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-[url('/images/hero2-bg.png')] bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[800px] lg:h-[960px] xl:h-[952px] flex items-center">
            <div className="Container">
              <div className="relative banner-content text-center pt-[47px]">
                <h5 className="font-AlbertSans text-white font-medium mb-8">
                  SOLUTIONS FOR ENVIROMENTAL PROTECTION
                </h5>
                <h1 className="font-AlbertSans font-extrabold text-white text-xl sm:text-[38px] sm:leading-[56px] md:text-[46px] md:leading-[54px] xl:text-[76px] xl:leading-[90px]">
                  YOUR JOURNEY TO SOLAR
                </h1>
                <h1 className="font-AlbertSans font-extrabold text-white text-xl sm:text-[38px] sm:leading-[56px] md:text-[46px] md:leading-[54px] xl:text-[76px] xl:leading-[90px] -mt-0 sm:-mt-3 md:mt-2 lg:mt-2">
                  EMPOWERMENT
                </h1>
                <div className="flex justify-center m-auto mt-9">
                  <Link to={"/about"}>
                    <button className="primary-btn2">
                      {`Find Out More`}
                      <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <BannerNavigation />
      </Swiper>
    </div>
  );
};

export default Banner;
