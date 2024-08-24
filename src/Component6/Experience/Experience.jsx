import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import experienceThumb from "/images/call-thumb.png";
import experienceThumb2 from "/images/call-thumb2.png";
import experienceShape from "/images/ball1.png";
import experienceShape2 from "/images/ball2.png";
import experienceShape3 from "/images/call-shape1.png";
import experienceShape4 from "/images/call-shape2.png";

const Experience = () => {
  return (
    <section className="py-[140px]">
      <div className="Container">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <div className="relative">
              <img
                src={experienceThumb}
                draggable="false"
                className="animate-wiggle relative top-8"
              />
              <img
                src={experienceShape}
                draggable="false"
                className="animate-dance2 absolute top-8 left-0"
              />
              <img
                src={experienceShape2}
                draggable="false"
                className="animate-bounce absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <img
                src={experienceShape3}
                draggable="false"
                className="animate-dance3 absolute bottom-8 left-0 w-4/12"
              />
              <img
                src={experienceShape4}
                draggable="false"
                className="animate-rotational absolute top-8 right-0"
              />
            </div>
          </div>
          <div className="col-span-6 text-center">
            <h5 className="font-Rajdhani font-semibold text-PrimaryColor-0 capitalize text-lg mb-5">
              Experience On Top-Tech
            </h5>
            <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[34px] sm:leading-[43px] md:text-[40px] md:leading-[49px] lg:text-[34px] lg:leading-[40px] xl:text-[40px] xl:leading-[49px] 2xl:text-[40px] 2xl:leading-[49px] text-HeadingColor-0 mb-3">
              Innovative App Design for Your
              <br /> Unique Designes
            </h1>
            <p className="font-Nunito text-TextColor2-0 pb-5">
              Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus
              branding metus <br className="hidden 2xl:block" />
              futures phasellus magna consectetur nec faucibus
            </p>
            <div className="flex items-center gap-5 justify-center">
              <Link to={"/"}>
                <button className="primary-btn6">
                  <FaGooglePlay size={"28"} />
                  {`Google Play`}
                </button>
              </Link>
              <Link to={"/"}>
                <button className="primary-btn6">
                  <FaApple size={"28"} />
                  {`App Store`}
                </button>
              </Link>
            </div>
          </div>
          <div className="col-span-3">
            <div className="relative">
              <img
                src={experienceThumb2}
                draggable="false"
                className="animate-wiggle relative top-8"
              />
              <img
                src={experienceShape2}
                draggable="false"
                className="animate-bounce absolute top-20 right-20"
              />
              <div className="absolute top-8 -right-20 size-[100px] rounded-full bg-BodyBg-0 flex justify-center items-center">
                <img
                  src={experienceShape4}
                  draggable="false"
                  className="animate-spin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
