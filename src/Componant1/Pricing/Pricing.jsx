import { Link } from "react-router-dom";
import PricingAccordion from "./Accordion/PricingAccordion";
import { FaCheck } from "react-icons/fa6";
import CountUp from "react-countup";

const Pricing = () => {
  //  All Faqs and  answers.
  const Faqs = [
    {
      title: "How to increase products sales 2024?",
      text: "Credibly conceptualize multifunctional human capital after that awesome revenue superior scenarios. Collaboratively myocardinate flexible social marketing working technologies and robust services available",
      active: true,
    },
    {
      title: "What kinds of web traffics?",
      text: "Credibly conceptualize multifunctional human capital after that awesome revenue superior scenarios. Collaboratively myocardinate flexible social marketing working technologies and robust services available",
      active: false,
    },
    {
      title: "How to generate organic audience?",
      text: "Credibly conceptualize multifunctional human capital after that awesome revenue superior scenarios. Collaboratively myocardinate flexible social marketing working technologies and robust services available",
      active: false,
    },
    {
      title: "Do you have any custom services?",
      text: "Credibly conceptualize multifunctional human capital after that awesome revenue superior scenarios. Collaboratively myocardinate flexible social marketing working technologies and robust services available",
      active: false,
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-28 bg-[url('/images/pricing-bg.jpg')] bg-cover bg-no-repeat
     bg-center"
    >
      <div className="Container">
        <div className="grid grid-cols-1 gap-10 lg:gap-24 2xl:gap-[150px] lg:grid-cols-2 items-center">
          <div className="w-full mx-auto">
            <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
              Pricing Plan
            </h5>
            <h1 className="font-Rahdhani font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[34px] xl:leading-[44px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px] mb-12">
              Our Best Affordable Pricing Plan <br />
              Choose Your Plans
            </h1>
            <div>
              {Faqs.map((faq, index) => (
                <PricingAccordion
                  key={index}
                  faqIcon={faq.faqIcon}
                  title={faq.title}
                  id={`faqs-${index}`}
                  active={faq.active}
                >
                  {faq.text}
                </PricingAccordion>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white rounded-md px-[30px] py-10 relative">
              <h6 className="px-[22px] py-[5px] text-lg bg-PrimaryColor-0 rounded font-Rajdhani text-white font-medium absolute -top-[19px] right-7">
                Business
              </h6>
              <div className="absolute top-10 right-7 flex items-baseline gap-1">
                <CountUp
                  start={-9}
                  end={49}
                  prefix="$"
                  suffix="."
                  className="text-[40px] font-Rajdhani font-semibold text-HeadingColor-0 transition-all duration-500 group-hover:text-white"
                />
                <h6 className="font-Rajdhani font-semibold text-lg transition-all duration-500 group-hover:text-white">
                  99
                </h6>
              </div>
              <h6 className="font-Rajdhani font-semibold text-lg transition-all duration-500 group-hover:text-white">
                FOR 1 YEARS
              </h6>
              <div className="flex gap-5">
                <div className="w-[42px] h-[42px] rounded bg-PrimaryColor-0 text-white flex justify-center items-center relative z-10 overflow-hidden transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100 group-hover:text-PrimaryColor-0 mt-3">
                  <FaCheck size={"20"} />
                </div>
                <div className="flex-1">
                  <h5 className="font-Rajdhani font-semibold text-[28px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
                    19 Days For Free
                  </h5>
                  <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white">
                    Multifunctional human capital after awesome <br className="hidden 2xl:block"/> superior
                    scenarios my coordinate
                  </p>
                  <Link to={"/"}>
                    <button className="font-Rajdhani font-medium text-lg text-HeadingColor-0 border border-PrimaryColor-0 rounded px-7 py-2">Purchaces</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
