/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TeamCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  teamTitle,
  teamDesc,
}) => {
  return (
    <div className="group relative">
      <div className="bg-white rounded-t-md relative rounded-b-full transition-all duration-500 text-center pt-[22px] pb-10  group-hover:bg-PrimaryColor-0">
        <h5 className="font-Rajdhani font-semibold text-[28px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white pb-[2px]">
          {teamTitle}
        </h5>
        <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white">
          {teamDesc}
        </p>
        <ul className="flex gap-3 justify-center mb-[6px] pb-[66px]  transition-all duration-500 group-hover:mb-7 group-hover:mt-[14px] group-hover:pb-[74px]">
          <li>
            <Link to={"/"}>
              <button className="size-[35px] rounded-full border border-white flex items-center justify-center text-sm text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:border-white relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full hover:before:scale-100">
                {socialIcon}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="size-[35px] rounded-full border border-white flex items-center justify-center text-sm text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:border-white relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full hover:before:scale-100">
                {socialIcon2}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="size-[35px] rounded-full border border-white flex items-center justify-center text-sm text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:border-white relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full hover:before:scale-100">
                {socialIcon3}
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative overflow-hidden -mt-28 before:absolute before:bottom-0 before:left-0 before:bg-[#f5f8ed] before:w-full before:h-1/2 before:rounded-t-md before:-z-10">
        <img src={teamThumb} className="w-full xl:w-[inherit] m-auto" />
      </div>
    </div>
  );
};

export default TeamCard;
