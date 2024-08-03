/* eslint-disable no-unused-vars */

import { FaCircle, FaStarOfLife } from "react-icons/fa6";
import PricingCard from "./PricingCard";

const pricingData = [
  {
    id: 1,
    currency: "$",
    offerPrice: 39,
    pricingDateLine: "Month",
    pricingDesc:
      "Fast project turnaround time, substantial cost savings & quality standards.",
    pricingTitle: "Starter Plans",
    pricingIcon: <FaCircle />,
    pricingContent1: "Repair & Replacement",
    pricingContent2: "Reliability And Performance",
    pricingContent3: "Real Solar PV Systems",
    pricingContent4: "Just-In-Time Manufacturing",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Choose Plan",
    
  },
  {
    id: 2,
    currency: "$",
    offerPrice: 59,
    pricingDateLine: "Month",
    pricingDesc:
      "Fast project turnaround time, substantial cost savings & quality standards.",
    pricingTitle: "Standard Plans",
    pricingIcon: <FaCircle />,
    pricingContent1: "Repair & Replacement",
    pricingContent2: "Reliability And Performance",
    pricingContent3: "Real Solar PV Systems",
    pricingContent4: "Just-In-Time Manufacturing",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Choose Plan",
  },
  {
    id: 3,
    currency: "$",
    offerPrice: 89,
    pricingDateLine: "Month",
    pricingDesc:
      "Fast project turnaround time, substantial cost savings & quality standards.",
    pricingTitle: "Premium Plans",
    pricingIcon: <FaCircle />,
    pricingContent1: "Repair & Replacement",
    pricingContent2: "Reliability And Performance",
    pricingContent3: "Real Solar PV Systems",
    pricingContent4: "Just-In-Time Manufacturing",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Choose Plan",
  },
];

const Pricing = () => {
  return (
    <section className="py-28 bg-BodyBg-0">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Nunito font-medium text-PrimaryColor-0 flex items-center justify-center gap-2">
            <FaStarOfLife />
            PRICING PLAN <FaStarOfLife />
          </h5>
          <h1 className="font-Nunito font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-2 mb-6">
            A Customizable Approach
            <br /> for Your Business
          </h1>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {pricingData.map(
              ({
                id,
                currency,
                offerPrice,
                pricingDateLine,
                pricingDesc,
                pricingTitle,
                pricingIcon,
                pricingContent1,
                pricingContent2,
                pricingContent3,
                pricingContent4,
                pricingUrl,
                pricingBtn,
              }) => {
                return (
                  <div key={id}>
                    <PricingCard
                      currency={currency}
                      offerPrice={offerPrice}
                      pricingDateLine={pricingDateLine}
                      pricingDesc={pricingDesc}
                      pricingTitle={pricingTitle}
                      pricingIcon={pricingIcon}
                      pricingContent1={pricingContent1}
                      pricingContent2={pricingContent2}
                      pricingContent3={pricingContent3}
                      pricingContent4={pricingContent4}
                      pricingUrl={pricingUrl}
                      pricingBtn={pricingBtn}
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
