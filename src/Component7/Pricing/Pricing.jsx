import PricingCard from "./PricingCard";
import pricingIcon from "/images/mobile-app-price-icon.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const pricingData = [
  {
    id: 1,
    pricingMark: "Best Sales",
    pricingIcon: pricingIcon,
    pricingFeature: "Features",
    offerPrice: 120,
    pricingDateLine: "/ Per month",
    pricingTitle: "Basic Plan",
    pricingSubTitle: "Best Plan for Basic Plan",
    pricingCheck: <IoIosCheckmarkCircleOutline />,
    pricingContent1: "Easy to Downloads",
    pricingContent2: "Simple signup system",
    pricingContent3: "Customizations all information",
    pricingContent4: "Widget Generator",
    pricingUrl: "/pricing_inner",
    pricingBtn: "30 dAYS FREE TRIAL",
    pricingBtnIcon: <HiOutlineArrowRight />,
  },  {
    id: 2,
    pricingMark: "Best Sales",
    pricingIcon: pricingIcon,
    pricingFeature: "Features",
    offerPrice: 250,
    pricingDateLine: "/ Per month",
    pricingTitle: "Business Plan",
    pricingSubTitle: "Best Plan for Business Plan",
    pricingCheck: <IoIosCheckmarkCircleOutline />,
    pricingContent1: "Easy to Downloads",
    pricingContent2: "Simple signup system",
    pricingContent3: "Customizations all information",
    pricingContent4: "Widget Generator",
    pricingUrl: "/pricing_inner",
    pricingBtn: "30 dAYS FREE TRIAL",
    pricingBtnIcon: <HiOutlineArrowRight />,
  }, 
];


const Pricing = () => {
  return (
    <section className="py-28 bg-BodyBg-0 relative z-10">
      <div className="Container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="text-center">
            <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
              Pricing Plan
            </h5>
            <h1 className="font-Rajdhani font-bold text-xl sm:text-[34px] sm:leading-[42px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[42px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-4">
              Quickly interoperable
              <br />
              Colaborating Cheaf
              <br />
              Pricing Plans
            </h1>
            <div className="relative flex items-center gap-5 border-t border-BorderColor2-0 sm:mr-10 pt-8">
              <div className="border-r border-BorderColor2-0 pr-5">
                <CountUp
                  start={-11}
                  end={98}
                  suffix={"%"}
                  className="font-FiraSans text-4xl leading-[26px] md:text-[56px] md:leading-[40px] text-white font-medium"
                />
              </div>
              <div>
                <p className="font-FiraSans text-TextColor-0">
                  Conveniently provide access <br/> interfaces network
                </p>
              </div>
            </div>
            <Link to={"/contact"}>
              <button className="primary-btn5 !bg-BodyBg-0 !text-HeadingColor-0 hover:!text-white">
                {`Contact Us`}
                <HiOutlineArrowRight size={"20"} />
              </button>
            </Link>
          </div>
          <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-7">
            {pricingData.map(
              ({
                id,
                pricingMark,
                pricingIcon,
                pricingFeature,
                offerPrice,
                pricingDateLine,
                pricingTitle,
                pricingSubTitle,
                pricingCheck,
                pricingContent1,
                pricingContent2,
                pricingContent3,
                pricingContent4,
                pricingUrl,
                pricingBtn,
                pricingBtnIcon,
              }) => {
                return (
                  <div key={id}>
                    <PricingCard
                      pricingIcon={pricingIcon}
                      pricingFeature={pricingFeature}
                      pricingMark={pricingMark}
                      offerPrice={offerPrice}
                      pricingDateLine={pricingDateLine}
                      pricingTitle={pricingTitle}
                      pricingCheck={pricingCheck}
                      pricingSubTitle={pricingSubTitle}
                      pricingContent1={pricingContent1}
                      pricingContent2={pricingContent2}
                      pricingContent3={pricingContent3}
                      pricingContent4={pricingContent4}
                      pricingUrl={pricingUrl}
                      pricingBtn={pricingBtn}
                      pricingBtnIcon={pricingBtnIcon}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
