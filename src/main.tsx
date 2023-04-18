import React, { useEffect, useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./routes/Home/Home";
import { BASE, WORK_1, WORK_2 } from "./routes";
import Noise from "./components/Overlay/Noise/Noise";
import Nav from "./components/Overlay/Nav/Nav";
import { motion } from "framer-motion";
import About from "./components/Home/About/About";
import Footer from "./components/Overlay/Footer/Footer";
import NavWrapper from "./components/Overlay/NavWrapper/NavWrapper";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config";

const router = createBrowserRouter([
  {
    path: BASE,
    element: (
      <>
        <Nav />
        <Home />
      </>
    ),
  },
  {
    path: `${BASE}${WORK_1}`,
    element: (
      <>
        <Nav />
        <>work</>
      </>
    ),
  },
  {
    path: `${BASE}${WORK_2}`,
    element: (
      <>
        <Nav />
        <>work</>
      </>
    ),
  },
]);

function Content() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage} h-full`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
/*
<NavWrapper />
        <Content />
*/
export const twConfig = resolveConfig(tailwindConfig);

export default function App() {
  return (
    <>
      <Noise />
      <motion.div className="h-full">
        <BrowserRouter>
          <Nav />
          <Content />
          <Footer />
        </BrowserRouter>
      </motion.div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
