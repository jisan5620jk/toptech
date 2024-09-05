import playStore from "/images/mobil-app-banner-button-shape2.png";
import appStore from "/images/app-store.png";
import downloadThumb from "/images/mobile-app-app-img.png";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";

const Download = () => {
  return (
    <section className="pt-[60px] bg-[url(/images/mobile-app-app-bg.png)] bg-no-repeat bg-center bg-cover">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end">
          <div className="pb-[160px]">
            <h1 className="font-Rajdhani font-bold text-[60px] text-HeadingColor-0">
              Download Apps
            </h1>
            <h2 className="font-Rajdhani font-semibold text-[42px] text-HeadingColor-0">
              Easy super fast applications
            </h2>
            <div className="flex items-center gap-2 mt-7">
              <div className="text-PrimaryColor-0">
                <FaCheck size={"18"} />
              </div>
              <div className="flex-1">
                <h5 className="font-Nunito font-medium text-HeadingColor-0 text-lg">
                  {`Credibly leverage other's future`}
                </h5>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2 mb-10">
              <div className="text-PrimaryColor-0">
                <FaCheck size={"18"} />
              </div>
              <div className="flex-1">
                <h5 className="font-Nunito font-medium text-HeadingColor-0 text-lg">
                  {`Monotonectally fashion world-class`}
                </h5>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to={"/"}>
                <img src={playStore} draggable="false" />
              </Link>
              <Link to={"/"}>
                <img src={appStore} draggable="false" />
              </Link>
            </div>
          </div>
          <div>
            <img src={downloadThumb} draggable="false" className="max-w-[inherit]"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
