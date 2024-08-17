import { Outlet } from "react-router-dom";
import Footer5 from "../Shared/Footer/Footer5";
import Navbar5 from "../Shared/Navbar/Navbar5";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";

const Main5 = () => {
  return (
    <>
      <Navbar5 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer5 />
    </>
  );
};
export default Main5;
