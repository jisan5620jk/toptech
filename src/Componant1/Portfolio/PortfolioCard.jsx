/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PortfolioCard = ({
  portfolioThumb,
  portfolioIcon,
  portfolioTitle,
  portfolioUrl,
  portfolioBtn,
}) => {
  return (
    <div>
      <div className="portfolio-box relative z-10 overflow-hidden group">
        <div className="rounded-lg relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:h-full group-hover:before:top-0 before:z-10 group-hover:before:opacity-20">
          <img src={portfolioThumb} draggable={false} />
        </div>
        <div className="rounded-lg 2xl:rounded-none relative bg-white 2xl:w-8/12 border-l-[7px] pl-7 border-PrimaryColor-0">
          <div className="flex items-center gap-6">
            <h1 className="portfolio-icon font-Rajdhani font-bold text-[76px] text-transparent transition-all duration-500">
              {portfolioIcon}
            </h1>
            <Link to={portfolioUrl}>
              <button className="portfolio-title font-Rajdhani font-semibold text-xl lg:text-lg xl:text-2xl text-HeadingColor-0 text-left transition-all duration-500 group-hover:text-PrimaryColor-0">
                {portfolioTitle}
              </button>
            </Link>
          </div>
          <Link
            to={portfolioUrl}
            className="portfolio-btn -rotate-90 transition-all duration-500 absolute -top-0 opacity-0 right-0 group-hover:-top-[50px] group-hover:opacity-100"
          >
            <button className="w-[50px] h-[50px] rounded-r-full rounded-t-full flex items-center justify-center text-white bg-PrimaryColor-0">
              {portfolioBtn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
