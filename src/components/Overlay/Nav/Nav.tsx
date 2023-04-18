import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { NavOverlay, OverlayType } from "../Shared/NavOverlay";
import MotionWrapper from "../Shared/MotionWrapper";
import { MotionFrom } from "../Shared/types";
import SlideInLine from "../Shared/SlideInLine";

const Nav: React.FC = () => {
  return (
    <NavOverlay type={OverlayType.Nav}>
      <SlideInLine
        direction={MotionFrom.Left}
        delay={1}
        className="mb-4 mt-0"
      />
      <div className="flex flex-row justify-between text-sm md:text-base ">
        <MotionWrapper direction={MotionFrom.Above} delay={1.2}>
          <p>Jarrod van den Heuvel</p>
          <p>Software Engineer</p>
        </MotionWrapper>
        <div className="flex flex-row gap-4">
          <Link to="/" className=" pointer-events-auto">
            <MotionWrapper direction={MotionFrom.Above} delay={1.7}>
              <p>Home</p>
            </MotionWrapper>
          </Link>
          <Link to="/about" className=" pointer-events-auto">
            <MotionWrapper direction={MotionFrom.Above} delay={1.8}>
              <p>About</p>
            </MotionWrapper>
          </Link>
        </div>
      </div>
    </NavOverlay>
  );
};

export default Nav;
