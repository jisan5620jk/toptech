import { Link } from "react-router-dom";
import footerLogo from "/images/logo.png";
import {
  FaArrowRightLong,
  FaChevronRight,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[url('/images/footer-bg.jpg')] bg-no-repeat bg-center bg-cover relative z-10 pt-28 overflow-hidden">
      <div className="Container">
        <div className="relative">
          <div className="relative rounded-md ">
            <div className="flex flex-col gap-7 lg:gap-0 lg:flex-row lg:items-center lg:justify-between p-10 mb-[90px]">
              <div>
                <h2 className="font-Nunito font-bold text-white text-[30px] sm:text-[40px]">
                  Stay With Us On Social
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <h5 className="font-Nunito font-semibold text-white text-lg uppercase">
                  Follow Us :
                </h5>
                <ul className="flex gap-3">
                  <li>
                    <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                      <FaFacebookF />
                    </button>
                  </li>
                  <li>
                    <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                      <FaXTwitter />
                    </button>
                  </li>
                  <li>
                    <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                      <FaLinkedinIn />
                    </button>
                  </li>
                  <li>
                    <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                      <FaPinterestP />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <Link to={"/"}>
              <img src={footerLogo} draggable={false} />
            </Link>
            <p className="font-Nunito text-white mt-7 mb-5">
              Proactively restore timely alignments after client environmentals
            </p>
            <div>
              <h6 className="font-Nunito font-medium text-white text-lg pl-8 relative before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:w-[22px] before:h-[2px]">
                Contact
              </h6>
              <Link to={"/"} className="mt-[18px] block">
                <button className="flex items-center gap-3 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0">
                  <FaPhone className="text-PrimaryColor-0" />
                  +123 (4567) 890
                </button>
              </Link>
              <Link to={"/"} className="mt-[18px] block">
                <button className="flex items-center gap-3 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0">
                  <MdEmail size={"18"} className="text-PrimaryColor-0" />
                  example@gmail.com
                </button>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-Nunito text-2xl text-white font-semibold mb-[30px]">
              Company
            </h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Our Services
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Meet Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Latest Blog
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-Nunito text-2xl text-white font-semibold mb-[30px]">
              Quick Links
            </h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Testimonials
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Contact Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Donations
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Faq
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Nunito text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Careers
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-Nunito text-2xl text-white font-semibold mb-8">
              Newsletter
            </h4>
            <p className="font-Nunito text-TextColor-0 font-medium mb-[22px]">
              Subscribe Our Newsletter
            </p>
            <form action="#" method="post">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your E-Mail*"
                required
                className="w-full h-[60px] rounded-full font-Nunito border border-PrimaryColor-0 border-opacity-50 bg-transparent px-6 py-2 text-white placeholder:text-white mb-4"
              />
              <button
                type="submit"
                className="w-full h-[58px] rounded-full border border-PrimaryColor-0 bg-PrimaryColor-0 gap-2 px-6 py-2 text-white font-Nunito uppercase flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-[#041e15] before:-z-10 before:scale-0 before:transition-all before:duration-500 hover:before:scale-100"
              >
                Subscribe <FaArrowRightLong />
              </button>
            </form>
          </div>
        </div>
        <div className="text-left sm:text-center pb-6 mt-[108px]">
          <p className="font-Nunito text-white">
            © Copyrights 2024 Echofy All rights reserved by
            <span className="text-PrimaryColor-0"> Dream IT</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
