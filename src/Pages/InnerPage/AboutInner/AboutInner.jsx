import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import About from "../../../Componant2/About/About";
import Counter from "../../../Componant1/Counter/Counter";
import Process from "../../../Componant1/Process/Process";
import Brand from "./Brand/Brand";
import TeamMember from "../../../Componant1/TeamMember/TeamMember";
import Testimonial from "../../../Componant1/Testimonial/Testimonial";
import ContentSlider2 from "../../../Componant2/ContentSlider2/ContentSlider2";
import Contact from "../../../Componant2/Contact/Contact";

const AboutInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"About Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"About Us"}
      />
      <About />
      <Contact />
      <Counter />
      <Process />
      <TeamMember />
      <ContentSlider2 />
      <Testimonial />
      <Brand />
    </>
  );
};

export default AboutInner;
