import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Institutions from "./pages/Institutions";
import Researchers from "./pages/Researchers";
import ResearcherDetails from "./pages/ResearcherDetails";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/institutions", element: <Institutions /> },
  { path: "/researchers", element: <Researchers /> },
  { path: "/researchers/:name", element: <ResearcherDetails /> },
]);

export default router;
