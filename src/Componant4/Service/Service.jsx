/* eslint-disable no-unused-vars */
import { FaArrowRightLong } from "react-icons/fa6";
import serviceIcon from "/images/service1.png";
import serviceIcon2 from "/images/service2.png";
import serviceIcon3 from "/images/service3.png";
import serviceIcon4 from "/images/service4.png";
import serviceIcon5 from "/images/service5.png";
import serviceIcon6 from "/images/service6.png";
import ServiceCard from "./ServiceCard";
import { PiStarFourFill } from "react-icons/pi";

const serviceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceTitle: `Strategic marketing`,
    serviceDesc:
      "Profesionaly optimize developer team infomediaries main issue don.",
    serviceUrl: "/service_details",
    serviceBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceTitle: `Investment Planning`,
    serviceDesc:
      "Profesionaly optimize developer team infomediaries main issue don.",
    serviceUrl: "/service_details",
    serviceBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceTitle: `Insights & analytics`,
    serviceDesc:
      "Profesionaly optimize developer team infomediaries main issue don.",
    serviceUrl: "/service_details",
    serviceBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 4,
    serviceIcon: serviceIcon4,
    serviceTitle: `Business consulting`,
    serviceDesc:
      "Profesionaly optimize developer team infomediaries main issue don.",
    serviceUrl: "/service_details",
    serviceBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 5,
    serviceIcon: serviceIcon4,
    serviceTitle: `Finance & Restructuring`,
    serviceDesc:
      "Profesionaly optimize developer team infomediaries main issue don.",
    serviceUrl: "/service_details",
    serviceBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 6,
    serviceIcon: serviceIcon4,
    serviceTitle: `Audit and Evaluation`,
    serviceDesc:
      "Profesionaly optimize developer team infomediaries main issue don.",
    serviceUrl: "/service_details",
    serviceBtnIcon: <FaArrowRightLong />,
  },
];

const Service = () => {
  return (
    <section className="pt-28 pb-[120px] relative bg-BodyBg-0">
      <div className="Container">
        <div className="grid grid-cols-1 lg:items-center lg:grid-cols-2 gap-1 mb-6">
          <div>
            <h5 className="font-Rajdhani text-lg font-medium text-PrimaryColor-0 flex items-center gap-2">
              <PiStarFourFill size={"14"} />
              SERVICE FEATURES
            </h5>
            <h1 className="font-Rajdhani font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[46px] xl:leading-[55px] text-HeadingColor-0 mt-4 mb-6">
              Let’s Discover Our Service
              <br /> Features Charter.
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:items-center lg:grid-cols-3 gap-x-[72px] gap-y-7">
          {serviceData.map(
            ({
              id,
              serviceThumb,
              serviceIcon,
              serviceTitle,
              serviceDesc,
              serviceUrl,
              serviceBtn,
              serviceBtnIcon,
            }) => {
              return (
                <div key={id}>
                  <ServiceCard
                    serviceThumb={serviceThumb}
                    serviceIcon={serviceIcon}
                    serviceTitle={serviceTitle}
                    serviceDesc={serviceDesc}
                    serviceUrl={serviceUrl}
                    serviceBtn={serviceBtn}
                    serviceBtnIcon={serviceBtnIcon}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;
