import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Project from "../../../Componant2/Project/Project";
import Testimonial from "../../../Componant2/Testimonial/Testimonial";

const ProjectInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Our Projects"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Our Proejcts"}
      />
      <Project />
      <Testimonial />
    </>
  );
};

export default ProjectInner;