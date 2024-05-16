import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import WebPerformance from "../pages/WebPerformanceCourse";
import FrontendArchitecture from "../pages/FrontendArchitectureCourse";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/web-performance",
    element: <WebPerformance />,
  },
  {
    path: "/frontend-architecture",
    element: <FrontendArchitecture />,
  },
]);
