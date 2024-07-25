import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Contact from "../../../Componant2/Contact/Contact";
import WhyChoose from "../../../Componant2/WhyChoose/WhyChoose";
import Feature from "./Feature/Feature";
import About from "./About/About";

const AboutInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"About Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"About Us"}
      />
      <Feature />
      <About />
      <Contact />
      <WhyChoose />
    </>
  );
};

export default AboutInner;
