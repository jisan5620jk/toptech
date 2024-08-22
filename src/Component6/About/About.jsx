import aboutThumb from "/images/about6-thumb.png";
import { Link } from "react-router-dom";
import { FaSquareFull } from "react-icons/fa6";

const About = () => {
  return (
    <section className="pt-[80px] pb-[120px] bg-no-repeat bg-center bg-cover relative">
      <div className="Container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
          <div className="relative">
            <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
              About Saas
            </h5>
            <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[34px] sm:leading-[43px] md:text-[40px] md:leading-[49px] lg:text-[34px] lg:leading-[40px] xl:text-[40px] xl:leading-[49px] 2xl:text-[40px] 2xl:leading-[49px] text-HeadingColor-0 mb-4">
              Get Realtime Visibility Digital
              <br /> Saas Software{`'`}s
            </h1>
            <p className="font-Nunito text-TextColor2-0 text-lg pb-6">
              Conviently optimize interdependent intellectual interoperable
              visuali design infoediaries main issue state icreative planing
              main best practices.
            </p>
            <div className="flex gap-5 mt-7 mb-6">
              <div className="text-[#fdb900]">
                <FaSquareFull />
              </div>
              <div className="flex-1">
                <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl">
                  Super Fast Speed
                </h5>
                <p className="font-Nunito text-TextColor2-0 pt-2">
                  Conveniently provide access to leading-edge{" "}
                  <br className="hidden md:block" /> interfaces. Uniquely
                  network
                </p>
              </div>
            </div>
            <Link to={"/about"}>
              <button className="primary-btn6">{`Discover More`}</button>
            </Link>
          </div>
          <div className="relative z-10">
            <img
              src={aboutThumb}
              draggable="false"
              className="2xl:max-w-[inherit] animate-wiggle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
