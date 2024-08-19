/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiIcon,
  testiTitle,
  testiImg,
  testiRatingIcon,
  testiName,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className="relative group rounded-md z-10 overflow-hidden">
      <div className="mt-7 bg-BodyBg-0 px-4 sm:px-10 lg:px-5 xl:px-10 pt-8 pb-9">
        <div className="size-[56px] rounded-full border border-BorderColor5-0 flex items-center justify-center text-3xl text-PrimaryColor-0 transition-all duration-500 group-hover:bg-BodyBg-0">{testiIcon}</div>
        <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-2xl">{testiTitle}</h5>
        <p className="font-Nunito text-TextColor2-0 pt-8">
          {testiDesc}
        </p>
        <ul className="flex items-center gap-[6px]">
          <li className="text-orange-400">
            {testiRatingIcon}
          </li>
          <li className="text-orange-400">
            {testiRatingIcon}
          </li>
          <li className="text-orange-400">
            {testiRatingIcon}
          </li>
          <li className="text-orange-400">
            {testiRatingIcon}
          </li>
          <li className="text-orange-400">
            {testiRatingIcon}
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:items-center md:flex-row gap-5 md:gap-4 xl:gap-5">
        <div>
          <img src={testiImg} draggable="false" />
        </div>
        <div className="flex-1">
          <h5 className="font-Rajdhani font-semibold text-HeadingColor-0 text-[22px]">
            {testiName}
          </h5>
          <p className="font-Nunito text-TextColor2-0">{testiDesignation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
