import { motion } from "framer-motion";
import React, { useContext } from "react";
import { NavOverlay, OverlayType } from "../Shared/NavOverlay";
import { MotionFrom } from "../../Animated/types";
import MotionWrapper from "../../Animated/MotionWrapper";
import { NavModeContext } from "../../../NavModeProvider";
import SlideInLine from "../../Animated/SlideInLine";

const Footer: React.FC = () => {
  const { isDark } = useContext(NavModeContext);
  return (
    <NavOverlay type={OverlayType.Footer}>
      <motion.div
        className={`flex flex-col justify-between  text-sm md:text-base `}
      >
        <MotionWrapper direction={MotionFrom.Below} delay={1.6} isDark={isDark}>
          <p>myfakeemail@gmail.com</p>
        </MotionWrapper>
        <SlideInLine
          direction={MotionFrom.Right}
          delay={1}
          className={`mt-4 mb-0 `}
          isDark={isDark}
        />
      </motion.div>
    </NavOverlay>
  );
};

export default Footer;
