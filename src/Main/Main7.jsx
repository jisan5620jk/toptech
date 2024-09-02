import { Outlet } from "react-router-dom";
import Footer6 from "../Shared/Footer/Footer6";
import Navbar7 from "../Shared/Navbar/Navbar7";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";

const Main7 = () => {
  return (
    <>
      <Navbar7 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer6 />
    </>
  );
};
export default Main7;
