/* eslint-disable react/prop-types */
import CountUp from "react-countup";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PricingCard = ({
  currency,
  mainPrice,
  pricingDateLine,
  pricingTitle,
  pricingContent1,
  pricingContent2,
  pricingContent3,
  pricingContent4,
  pricingContent5,
  pricingUrl,
  pricingBtn,
  offerPrice,
  pricingSubTitle,
}) => {
  return (
    <div className="bg-white relative z-10 border-2 border-white">
      <div className="bg-[url(/images/pricing-head-bg.png)] bg-no-repeat bg-cover bg-center">
        <h4 className="font-Rajdhani font-bold text-[32px] text-PrimaryColor-0 inline-block transition-all duration-500 mt-10">
          {pricingTitle}
        </h4>
        <p className="font-Nunito text-TextColor2-0">{pricingSubTitle}</p>
      </div>
      <div className="font-Nunito flex items-baseline gap-3 px-[30px] mt-6 pb-4">
        <div className="flex items-center gap-1">
          <h6 className="font-Nunito font-bold text-[50px] text-HeadingColor-0">
            {currency}
          </h6>
          <CountUp
            start={-11}
            end={offerPrice}
            suffix=""
            className="text-[55px] font-bold font-Rajdhani text-HeadingColor-0"
          />
        </div>
        <div className="line-through">
          <h6 className="font-Rajdhani font-semibold text-[22px] text-PrimaryColor-0">
            {mainPrice}
          </h6>
          <p className="ont-Rajdhani font-semibold text-[22px] text-PrimaryColor-0">
            {pricingDateLine}
          </p>
        </div>
      </div>
      <ul>
        <li className="flex gap-2 items-center font-Nunito text-TextColor-0 px-[30px] mb-3 mt-9">
          {pricingContent1}
        </li>
        <li className="flex gap-2 items-center font-Nunito text-TextColor-0 px-[30px] mb-3">
          {pricingContent2}
        </li>
        <li className="flex gap-2 items-center font-Nunito text-TextColor-0 px-[30px] mb-3">
          {pricingContent3}
        </li>
        <li className="flex gap-2 items-center font-Nunito text-TextColor-0 px-[30px] mb-1">
          {pricingContent4}
        </li>
        <li className="flex gap-2 items-center font-Nunito text-TextColor-0  px-[30px] mb-1">
          {pricingContent4}
        </li>
        <li className="flex gap-2 items-center font-Nunito text-TextColor-0 px-[30px] mb-1">
          {pricingContent5}
        </li>
      </ul>
      <div className="px-[30px] pb-10 flex justify-center">
        <Link to={pricingUrl}>
          <button className="primary-btn2 mt-9">
            {pricingBtn}
            <FaArrowRightLong size={"20"} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
