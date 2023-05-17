import { motion, useAnimationControls } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavOverlay, OverlayType } from "../Shared/NavOverlay";
import MotionWrapper from "../../Animated/MotionWrapper";
import { MotionFrom } from "../../Animated/types";
import { NavModeContext } from "../../../NavModeProvider";
import SlideInLine from "../../Animated/SlideInLine";
import { ReactComponent as Diamond } from "../../../assets/icons/diamond.svg";

const Nav: React.FC = () => {
  const { isDark } = useContext(NavModeContext);
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";

  return (
    <NavOverlay type={OverlayType.Nav} hideOnScroll={isHome}>
      <SlideInLine
        direction={MotionFrom.Left}
        delay={1}
        className={`mb-4 mt-0 `}
        isDark={isDark}
      />
      <div className={`flex flex-row justify-between text-sm md:text-base `}>
        <MotionWrapper
          direction={MotionFrom.Above}
          delay={1.2}
          isDark={isDark}
          toggleColor={isHome ? undefined : "#ffffff0"}
        >
          <p>Jarrod van den Heuvel</p>
          <p>Software Engineer</p>
        </MotionWrapper>
        <div className="flex flex-row gap-4">
          <Link
            to="/"
            className={isHome ? "pointer-events-none" : "pointer-events-auto"}
          >
            <MotionWrapper
              direction={MotionFrom.Above}
              delay={1.7}
              isDark={isDark}
              toggleColor={isHome ? undefined : "#898989"}
            >
              <p>Home</p>
            </MotionWrapper>
          </Link>
          <Link
            to="/about"
            className={isAbout ? "pointer-events-none" : "pointer-events-auto"}
          >
            <MotionWrapper
              direction={MotionFrom.Above}
              delay={1.8}
              isDark={isDark}
              toggleColor={isAbout ? undefined : "#898989"}
            >
              <p>About</p>
            </MotionWrapper>
          </Link>
        </div>
      </div>
    </NavOverlay>
  );
};

export default Nav;
