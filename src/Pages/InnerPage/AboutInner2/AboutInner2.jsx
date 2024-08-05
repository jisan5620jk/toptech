import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Contact from "../../../Componant2/Contact/Contact";
import WhyChoose from "../../../Componant2/WhyChoose/WhyChoose";
import About from "./About";
import Counter from "../../../Componant2/Counter/Counter";

const AboutInner2 = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"About Us 02"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"About Us 02"}
      />
      <About />
      <Contact />
      <Counter />
      <WhyChoose />
    </>
  );
};

export default AboutInner2;
