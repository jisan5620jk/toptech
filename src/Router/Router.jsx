import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Main2 from "../Main/Main2";
import Home1 from "../Pages/Home1/Home1";
import Home2 from "../Pages/Home2/Home2";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Main3 from "../Main/Main3";
import Home3 from "../Pages/Home3/Home3";
import Main4 from "../Main/Main4";
import Home4 from "../Pages/Home4/Home4";
import AboutInner from "../Pages/InnerPage/AboutInner/AboutInner";
import AboutInner2 from "../Pages/InnerPage/AboutInner2/AboutInner2";
import BlogDetails from "../Pages/InnerPage/BlogDetails/BlogDetails";
import ServiceDetails from "../Pages/InnerPage/ServiceDetails/ServiceDetails";
import ServiceDetails2 from "../Pages/InnerPage/ServiceDetails/ServiceDetails2";
import ServiceDetails3 from "../Pages/InnerPage/ServiceDetails/ServiceDetails3";
import ServiceDetails4 from "../Pages/InnerPage/ServiceDetails/ServiceDetails4";
import ServiceDetails5 from "../Pages/InnerPage/ServiceDetails/ServiceDetails5";
import ServiceDetails6 from "../Pages/InnerPage/ServiceDetails/ServiceDetails6";
import BlogGrid from "../Pages/InnerPage/BlogGrid/BlogGrid";
import BlogLeftSideBar from "../Pages/InnerPage/BlogList/BlogLeftSideBar";
import BlogRightSideBar from "../Pages/InnerPage/BlogList/BlogRightSideBar";
import ProjectDetails from "../Pages/InnerPage/ProjectDetails/ProjectDetails";
import ContactInner from "../Pages/InnerPage/ContactInner/ContactInner";
import LocationInner from "../Pages/InnerPage/LocationInner/LocationInner";
import TeamInner from "../Pages/InnerPage/TeamInner/TeamInner";
import TeamDetails from "../Pages/InnerPage/TeamDetails/TeamDetails";
import ServiceInner from "../Pages/InnerPage/ServiceInner/ServiceInner";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
    ],
  },
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main2 />,
    children: [
      {
        path: "/home2",
        element: <Home2 />,
      },
    ],
  },
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main3 />,
    children: [
      {
        path: "/home3",
        element: <Home3 />,
      },
      {
        path: "/about",
        element: <AboutInner />,
      },
      {
        path: "/about2",
        element: <AboutInner2 />,
      },
      {
        path: "/team_inner",
        element: <TeamInner />,
      },
      {
        path: "/team_details",
        element: <TeamDetails />,
      },
      {
        path: "/service",
        element: <ServiceInner />,
      },
      {
        path: "/service_details",
        element: <ServiceDetails />,
      },
      {
        path: "/service_details2",
        element: <ServiceDetails2 />,
      },
      {
        path: "/service_details3",
        element: <ServiceDetails3 />,
      },
      {
        path: "/service_details4",
        element: <ServiceDetails4 />,
      },
      {
        path: "/service_details5",
        element: <ServiceDetails5 />,
      },
      {
        path: "/service_details6",
        element: <ServiceDetails6 />,
      },
      {
        path: "/project_details",
        element: <ProjectDetails />,
      },
      {
        path: "/blog_grid",
        element: <BlogGrid />,
      },
      {
        path: "/blog_left_sidebar",
        element: <BlogLeftSideBar />,
      },
      {
        path: "/blog_right_sidebar",
        element: <BlogRightSideBar />,
      },
      {
        path: "/blog_details",
        element: <BlogDetails />,
      },
      {
        path: "/location",
        element: <LocationInner />,
      },
      {
        path: "/contact",
        element: <ContactInner />,
      },
    ],
  },
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main4 />,
    children: [
      {
        path: "/home4",
        element: <Home4 />,
      },
    ],
  },
]);

export default router;
