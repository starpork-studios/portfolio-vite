import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Modules/Home";
import Noise from "./components/Overlay/Noise/Noise";
import Nav from "./components/Overlay/Nav/Nav";
import { motion } from "framer-motion";
import Footer from "./components/Overlay/Footer/Footer";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config";
import { NavModeProvider } from "./NavModeProvider";
import About from "./Modules/About";

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

export const twConfig = resolveConfig(tailwindConfig);

export default function App() {
  return (
    <NavModeProvider>
      <Noise />
      <motion.div className="h-full">
        <BrowserRouter>
          <Nav />
          <Content />
          <Footer />
        </BrowserRouter>
      </motion.div>
    </NavModeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
