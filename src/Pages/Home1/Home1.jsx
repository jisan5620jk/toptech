import About from "../../Componant1/About/About";
import Banner from "../../Componant1/Banner/Banner";
import Blog from "../../Componant1/Blog/Blog";
import Brand from "../../Componant1/Brand/Brand";
import Contact from "../../Componant1/Contact/Contact";
import Counter from "../../Componant1/Counter/Counter";
import Feature from "../../Componant1/Feature/Feature";
import Portfolio from "../../Componant1/Portfolio/Portfolio";
import Pricing from "../../Componant1/Pricing/Pricing";
import Process from "../../Componant1/Process/Process";
import Service from "../../Componant1/Service/Service";
import TeamMember from "../../Componant1/TeamMember/TeamMember";
import Testimonial from "../../Componant1/Testimonial/Testimonial";
import Video from "../../Componant1/Video/Video";

const Home1 = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Service />
      <TeamMember />
      <Counter />
      <Portfolio />
      <Process />
      <Testimonial />
      <Video />
      <Contact />
      <Pricing />
      <Blog />
      <Brand />
    </>
  );
};

export default Home1;
