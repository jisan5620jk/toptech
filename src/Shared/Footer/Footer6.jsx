import { Link } from "react-router-dom";
import {
  FaApple,
  FaBehance,
  FaFacebookF,
  FaGooglePlay,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const Footer6 = () => {
  return (
    <footer className="bg-[url(/images/footer6-bg.png)] bg-cover bg-center bg-no-repeat relative z-10 pt-28 overflow-hidden">
      <div className="Container">
        <div className="grid gap-y-7 grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <h1 className="font-Rajdhani font-bold text-[22px] leading-7 sm:text-[34px] sm:leading-[43px] md:text-[40px] md:leading-[49px] lg:text-[34px] lg:leading-[40px] xl:text-[40px] xl:leading-[49px] 2xl:text-[40px] 2xl:leading-[49px] text-white mb-3">
              Find the Ultimate App
              <br /> with Top Features
            </h1>
            <p className="font-Nunito text-white mt-6 mb-8 w-10/12">
              Metus faucibus branding metus futures phaselss{" "}
              <br className="hidden xl:block" /> magna consectetur nec faucibus.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-6">
              Company
            </h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="font-Nunito text-white transition-all duration-500 hover:text-white mb-5">
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Nunito text-white transition-all duration-500 hover:text-white mb-5">
                    Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Nunito text-white transition-all duration-500 hover:text-white mb-5">
                    Pricing Plan
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Nunito text-white transition-all duration-500 hover:text-white mb-5">
                    Latest Blog
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-6">
              Our Services
            </h4>
            <div className="flex items-center gap-3">
              <div>
                <LiaPhoneVolumeSolid className="text-xl text-white" />
              </div>
              <p className="font-Nunito text-white">
                +258 (549) 2158 3215
              </p>
            </div>
            <div className="flex items-center gap-3 my-7">
              <div>
                <HiOutlineMail className="text-2xl text-white" />
              </div>
              <p className="font-Nunito text-white">
                support@example.com
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="font-Rajdhani text-[28px] text-white font-semibold mb-[26px]">
              Newsletter
            </h4>
            <div className="flex flex-col gap-6"><Link to={"/"}>
              <button className="primary-btn6 !px-7 !py-4">
                <FaGooglePlay size={"28"} />
                {`Google Play`}
              </button>
            </Link>
            <Link to={"/"}>
              <button className="primary-btn6 !px-7 !py-4">
                <FaApple size={"28"} />
                {`App Store`}
              </button>
            </Link></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center py-6 mt-[108px] border-t border-BorderColor-0">
          <div>
            <p className="font-Nunito text-TextColor-0">
              Copyright © 2024. Designed By Dream IT Solution
            </p>
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <button className="text-TextColor-0 transition-all duration-500 hover:text-white">
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button className="text-TextColor-0 transition-all duration-500 hover:text-white">
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button className="text-TextColor-0 transition-all duration-500 hover:text-white">
                  <FaLinkedinIn />
                </button>
              </li>
              <li>
                <button className="text-TextColor-0 transition-all duration-500 hover:text-white">
                  <FaPinterestP />
                </button>
              </li>
              <li>
                <button className="text-TextColor-0 transition-all duration-500 hover:text-white">
                  <FaBehance size={"18"} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer6;
