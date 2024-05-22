import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import Loader from "./Pages/Loader";
import Intro from "./Pages/Intro";
import About from "./Pages/About";
import Info from "./Pages/Info";
import Project from "./Pages/Project";
import Resume from "./Pages/Resume";
import Skills from "./Pages/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loader />,
  },
  {
    path: "/home",
    element: <AppLayout />,
    children: [
      {
        index: "/home",
        element: <Navigate replace to="/home/intro" />,
      },
      {
        path: "/home/intro",
        element: <Intro />,
      },
      {
        path: "/home/about",
        element: <About />,
      },
      {
        path: "/home/info",
        element: <Info />,
      },
      {
        path: "/home/project",
        element: <Project />,
      },
      {
        path: "/home/skills",
        element: <Skills />,
      },
    ],
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
