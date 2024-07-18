import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import About from "../../../Componant2/About/About";
import Contact from "../../../Componant2/Contact/Contact";
import WhyChoose from "../../../Componant2/WhyChoose/WhyChoose";

const AboutInner2 = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"About Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"About Us"}
      />
      <About />
      <Contact />
      <WhyChoose />
    </>
  );
};

export default AboutInner2;
