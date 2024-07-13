/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceIcon,
  serviceTitle,
  serviceUrl,
  serviceDesc,
  serviceBtnIcon,
}) => {
  return (
    <div className="rounded-md bg-white pl-[80px]  group relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:rounded-md hover:before:w-full hover:before:left-0 mb-6 lg:mb-0">
      <div className="absolute -left-[43px] top-1/2 -translate-y-1/2">
        <div className="size-[86px] rounded-full bg-PrimaryColor-0 relative flex justify-center items-center z-10 overflow-hidden before:absolute before:top-[12px] before:left-[12px] before:size-[62px] before:border before:border-dashed before:border-white before:rounded-full before:animate-rotational">
          <img src={serviceIcon} draggable="false" />
        </div>
      </div>
      <div className="overflow-hidden relative">
        <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-xl sm:text-[22px] lg:text-lg xl:text-[22px] transition-all duration-500 group-hover:text-white pt-9 pb-3">
          {serviceTitle}
        </h5>
        <p className="font-Nunito text-TextColor2-0 mb-8 transition-all duration-500 group-hover:text-TextColor-0">
          {serviceDesc}
        </p>
        <Link
          to={serviceUrl}
          className="absolute -bottom-14 -right-14 transition-all duration-500 group-hover:bottom-0 group-hover:right-0"
        >
          <button className="font-Nunito rounded-ss-md font-medium bg-PrimaryColor-0 text-white flex items-center justify-center transition-all duration-500 size-10 gap-2 overflow-hidden">
            <span>{serviceBtnIcon}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
