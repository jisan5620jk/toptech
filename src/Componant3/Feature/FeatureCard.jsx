/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureDesc,
  featureBtnLink,
  featureBtnContent,
  featureBtnIcon,
}) => {
  return (
    <div className="border border-BorderColor2-0 transition-all duration-500 hover:border-SecondaryColor-0 overflow-hidden group px-8 lg:px-4 xl:px-8 pt-8 pb-7 rounded-md bg-white relative z-10 before:absolute before:left-1/2 before:top-0 before:h-full before:w-0 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:w-full hover:before:left-0">
      <div className="relativ z-10">
        <img
          src={featureIcon}
          draggable="false"
          className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
        />
      </div>
      <h4 className="font-Rajdhani font-semibold text-2xl sm:text-[22px] lg:text-[22px] 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-6 mb-2">
        {featureTitle}
      </h4>
      <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-6">
        {featureDesc}
      </p>
      <Link to={featureBtnLink}>
        <button className="flex items-center gap-2 text-HeadingColor-0 font-Rajdhani text-lg font-semibold transition-all duration-500 group-hover:text-white">
          {featureBtnContent}
          <span className="text-xs">{featureBtnIcon}</span>
        </button>
      </Link>
    </div>
  );
};

export default FeatureCard;
