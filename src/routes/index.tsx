import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import WebPerformance from "../pages/WebPerformanceCourse";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/web-performance",
    element: <WebPerformance />,
  },
]);
