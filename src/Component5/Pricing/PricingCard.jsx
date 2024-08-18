/* eslint-disable react/prop-types */
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const PricingCard = ({
  pricingMark,
  pricingIcon,
  currency,
  mainPrice,
  pricingDateLine,
  pricingTitle,
  pricingFeature,
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
    <div className="bg-white px-10 pt-10 pb-8 relative z-10 overflow-hidden group border border-BorderColor5-0 rounded-2xl before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[#edf3ff] before:transition-all before:duration-500 before:-z-10 hover:before:top-0 hover:before:h-full">
      <h6 className="px-[22px] py-1 rounded-full bg-white border absolute font-Nunito text-sm text-HeadingColor-0 top-8 -right-32 transition-all duration-500 group-hover:right-8">
        {pricingMark}
      </h6>
      <div className="size-[72px] rounded-lg shadow-cases bg-white border border-BorderColor5-0 flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 group-hover:before:scale-100">
        <img src={pricingIcon} draggable="false" />
      </div>
      <h4 className="font-Rajdhani font-bold text-[32px] text-HeadingColor-0 inline-block transition-all duration-500 mt-6">
        {pricingTitle}
      </h4>
      <p className="font-Nunito text-TextColor2-0 pb-8">{pricingSubTitle}</p>
      <div className="font-Nunito flex items-baseline gap-3 mt-5">
        <div className="flex items-center gap-1">
          <h6 className="font-Rajdhani font-bold text-[55px] text-HeadingColor-0">
            {currency}
          </h6>
          <CountUp
            start={-11}
            end={offerPrice}
            suffix=""
            className="text-[55px] font-bold font-Rajdhani text-HeadingColor-0"
          />
        </div>
        <div className="line-through text-PrimaryColor-0 flex">
          <h6 className="font-Rajdhani font-semibold text-[22px] text-PrimaryColor-0 pr-1">
            {mainPrice}
          </h6>
          <p className="font-Rajdhani font-semibold text-[22px] text-PrimaryColor-0">
            {pricingDateLine}
          </p>
        </div>
      </div>
      <div className="pb-12">
        <Link to={pricingUrl}>
          <button className="primary-btn2 !py-4 mt-9">{pricingBtn}</button>
        </Link>
      </div>
      <h5 className="font-Rajdhani font-semibold text-2xl text-HeadingColor-0">{pricingFeature}</h5>
      <ul className="mt-4">
        <li className="flex gap-2 items-center font-Nunito text-TextColor2-0 mb-5">
          {pricingContent1}
        </li>
        <li className="flex gap-2 items-center font-Nunito text-TextColor2-0 mb-5">
          {pricingContent2}
        </li>
        <li className="flex gap-2 items-center font-Nunito text-TextColor2-0 mb-5">
          {pricingContent3}
        </li>
        <li className="flex gap-2 items-center font-Nunito text-TextColor2-0 mb-5">
          {pricingContent4}
        </li>
        <li className="flex gap-2 items-center font-Nunito text-TextColor2-0 mb-5">
          {pricingContent4}
        </li>
        <li className="flex gap-2 items-center font-Nunito text-TextColor-0 line-through">
          {pricingContent5}
        </li>
      </ul>
    </div>
  );
};

export default PricingCard;
