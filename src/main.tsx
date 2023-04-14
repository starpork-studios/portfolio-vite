import React, { useEffect, useState } from "react";
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
import Noise from "./components/Noise/Noise";
import Nav from "./components/Nav/Nav";
import { motion } from "framer-motion";
import About from "./components/Home/About/About";
import Footer from "./components/Footer/Footer";
import NavWrapper from "./components/NavWrapper/NavWrapper";

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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Noise />
    <motion.div className="h-full">
      <BrowserRouter>
        <Nav />
        <Content />
        <Footer />

        <Content />
      </BrowserRouter>
    </motion.div>
  </React.StrictMode>
);
