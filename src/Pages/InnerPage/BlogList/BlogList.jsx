import { Link } from "react-router-dom";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import blogListImg from "/images/blog-list.png";
import blogListImg2 from "/images/blog-list2.png";
import blogListImg3 from "/images/blog-list3.png";
import blogListImg4 from "/images/blog-list4.jpg";
import blogListImg5 from "/images/blog-list5.jpg";
import itemthumb from "/images/post-1.png";
import itemthumb2 from "/images/post-2.png";
import itemthumb3 from "/images/post-3.png";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import {
  FaAngleRight,
  FaArrowRightLong,
  FaRegCalendarCheck,
  FaRegFolderOpen,
} from "react-icons/fa6";
import BlogListCard from "./BlogListCard";

const blogListData = [
  {
    id: 1,
    blogListImg: blogListImg,
    thumbContent: "Cleaning",
    blogListTilte: "Newest Cleaning Equipment for House 2024",
    postByIcon: <FaUserCircle />,
    postBy: "By Author",
    postDateIcon: <FaRegCalendarCheck />,
    postDate: "03 January, 2024",
    postFileIcon: <FaRegFolderOpen />,
    postFile: "Cleaning",
    blogListDesc:
      "Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities transition mission top critical supply chains after enterprise",
    blogListUrl: "/blog_details",
    blogListBtn: "Continue Reading",
    blogListBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 2,
    blogListImg: blogListImg2,
    thumbContent: "Cleaning",
    blogListTilte: "Newest Cleaning Equipment for House 2024",
    postByIcon: <FaUserCircle />,
    postBy: "By Author",
    postDateIcon: <FaRegCalendarCheck />,
    postDate: "03 March, 2024",
    postFileIcon: <FaRegFolderOpen />,
    postFile: "Cleaning",
    blogListDesc:
      "Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities transition mission top critical supply chains after enterprise",
    blogListUrl: "/blog_details",
    blogListBtn: "Continue Reading",
    blogListBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 3,
    blogListImg: blogListImg3,
    thumbContent: "Cleaning",
    blogListTilte: "Newest Cleaning Equipment for House 2024",
    postByIcon: <FaUserCircle />,
    postBy: "By Author",
    postDateIcon: <FaRegCalendarCheck />,
    postDate: "03 May, 2024",
    postFileIcon: <FaRegFolderOpen />,
    postFile: "Cleaning",
    blogListDesc:
      "Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities transition mission top critical supply chains after enterprise",
    blogListUrl: "/blog_details",
    blogListBtn: "Continue Reading",
    blogListBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 4,
    blogListImg: blogListImg4,
    thumbContent: "Cleaning",
    blogListTilte: "Newest Cleaning Equipment for House 2024",
    postByIcon: <FaUserCircle />,
    postBy: "By Author",
    postDateIcon: <FaRegCalendarCheck />,
    postDate: "03 January, 2024",
    postFileIcon: <FaRegFolderOpen />,
    postFile: "Cleaning",
    blogListDesc:
      "Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities transition mission top critical supply chains after enterprise",
    blogListUrl: "/blog_details",
    blogListBtn: "Continue Reading",
    blogListBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 5,
    blogListImg: blogListImg5,
    thumbContent: "Cleaning",
    blogListTilte: "Newest Cleaning Equipment for House 2024",
    postByIcon: <FaUserCircle />,
    postBy: "By Author",
    postDateIcon: <FaRegCalendarCheck />,
    postDate: "03 June, 2024",
    postFileIcon: <FaRegFolderOpen />,
    postFile: "Cleaning",
    blogListDesc:
      "Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities transition mission top critical supply chains after enterprise",
    blogListUrl: "/blog_details",
    blogListBtn: "Continue Reading",
    blogListBtnIcon: <FaArrowRightLong />,
  },
];

const BlogList = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Blog With Sidebar"}
        url={"/blog"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        breadCrumbLink={"Blog"}
        breadCrumbContent={"Blog With Sidebar"}
      />
      <section className="pt-[120px]">
        <div className="Container">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="col-span-2">
              {blogListData.map(
                ({
                  id,
                  blogListImg,
                  thumbContent,
                  blogListTilte,
                  postByIcon,
                  postBy,
                  postDateIcon,
                  postDate,
                  postFileIcon,
                  postFile,
                  blogListDesc,
                  blogListUrl,
                  blogListBtn,
                  blogListBtnIcon,
                }) => {
                  return (
                    <div key={id} className="mb-7">
                      <BlogListCard
                        blogListImg={blogListImg}
                        thumbContent={thumbContent}
                        blogListTitle={blogListTilte}
                        postByIcon={postByIcon}
                        postBy={postBy}
                        postDateIcon={postDateIcon}
                        postDate={postDate}
                        postFileIcon={postFileIcon}
                        postFile={postFile}
                        blogListDesc={blogListDesc}
                        blogListUrl={blogListUrl}
                        blogListBtn={blogListBtn}
                        blogListBtnIcon={blogListBtnIcon}
                      />
                    </div>
                  );
                }
              )}
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative inline-block w-full mb-7 p-4 sm:p-8 lg:p-6 xl:p-8 rounded-md bg-[#f3f4f8]">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search here..."
                  required
                  className="w-full h-[56px] p-6 rounded font-Nunito"
                />
                <button
                  type="submit"
                  className=" text-xl text-white rounded h-[56px] w-[56px] bg-PrimaryColor-0 transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-7 top-1/2 -translate-y-1/2"
                >
                  <IoSearch />
                </button>
              </div>
              <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                <h4 className="font-Nunito font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Categories
                </h4>
                <ul className="mt-8">
                  <li>
                    <Link to={"/service_details"}>
                      <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Ocean Cleaning
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details2"}>
                      <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Dust Recycling
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details3"}>
                      <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Plant Seedlings
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details4"}>
                      <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Renewable Energy
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details5"}>
                      <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Environmental
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details6"}>
                      <button className="w-full font-Nunito text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Forest Cleaning
                        </span>
                        <FaArrowRightLong className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-4 sm:px-8 lg:px-6 xl:px-8 bg-[#f3f4f8] rounded-md pt-7 pb-4 mb-7">
                <h4 className="font-Nunito font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Popular Post
                </h4>
                <Link to={"/blog-details"}>
                  <button className="group flex gap-4 mb-6">
                    <div>
                      <img draggable="false" src={itemthumb} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Nunito font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Dramatically Architect new model before...
                      </h6>
                      <p className="font-Nunito text-PrimaryColor-0 text-sm mt-1">
                        01 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={"/blog_details"}>
                  <button className="group flex gap-4 my-6">
                    <div>
                      <img draggable="false" src={itemthumb2} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Nunito font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Progressively Syndicate Vista Seamless...
                      </h6>
                      <p className="font-Nunito text-PrimaryColor-0 text-sm mt-1">
                        16 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={"/blog_details"}>
                  <button className="group flex gap-4 my-6">
                    <div>
                      <img draggable="false" src={itemthumb3} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Nunito font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Completely Leverage Existing Customer...
                      </h6>
                      <p className="font-Nunito text-PrimaryColor-0 text-sm mt-1">
                        27 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-10 mb-7">
                <h4 className="font-Nunito font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Tags
                </h4>
                <ul className="inline-block">
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Environment
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Echology
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Seedlings
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Tree Plantation
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Recycling
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Nunito text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Cleaning
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <ul className="flex items-center gap-2 justify-center pb-[120px] pt-[50px]">
          <li>
            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              01
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              02
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              03
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Nunito rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              <FaAngleRight />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogList;