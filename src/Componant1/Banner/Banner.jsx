import { Link } from "react-router-dom";
import bannerImg from "/images/hero-thumb.png";
import { BiRightTopArrowCircle } from "react-icons/bi";

const Banner = () => {
  return (
    <section className="bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat h-[1000px] sm:h-[680px] lg:h-[660px] xl:h-[800px] flex items-center relative z-10 overflow-hidden">
      <div className="Container">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0">
          <div className="relative">
            <h5 className="font-Rajdhani text-white text-[19px] font-medium flex items-center gap-2 mb-4">
              IT SOLUTION AGENCY IN USA
            </h5>
            <h1 className="font-Rajdhani font-extrabold text-white text-[30px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[68x] lg:text-[50px] xl:text-[58px] xl:leading-[68px] 2xl:text-[69px] 2xl:leading-[79px]">
              BUSINESS INNOVATION<br />
              WITH IT EXPERT
            </h1>
            <p className="font-Nunito sm:text-lg text-TextColor-0 mb-[46px] mt-1">
              Professionally optimize interdependent intellectual interoperable
              connect <br className="hidden 2xl:block"/> best practices. Progressively fabricate done
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to={"/contact"}>
                <button className="primary-btn">
                  {`Let's Talk`}
                  <BiRightTopArrowCircle size={"20"} />
                </button>
              </Link>
              <Link to={"/about"}>
                <button className="primary-btn">
                  {`Read More`}
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-end -mb-[132px] lg:-mb-12">
            <img
              src={bannerImg}
              draggable="false"
              className="w-[inherit]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
