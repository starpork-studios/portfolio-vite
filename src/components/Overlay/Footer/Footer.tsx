import { motion } from "framer-motion";
import React from "react";
import { NavOverlay, OverlayType } from "../Shared/NavOverlay";
import SlideInLine from "../Shared/SlideInLine";
import { MotionFrom } from "../Shared/types";
import MotionWrapper from "../Shared/MotionWrapper";

const Footer: React.FC = () => {
  return (
    <NavOverlay type={OverlayType.Footer}>
      <motion.div className="flex flex-col justify-between  text-sm md:text-base">
        <MotionWrapper direction={MotionFrom.Below} delay={1.6}>
          <p>myfakeemail@gmail.com</p>
        </MotionWrapper>
        <SlideInLine
          direction={MotionFrom.Right}
          delay={1}
          className="mt-4 mb-0"
        />
      </motion.div>
    </NavOverlay>
  );
};

export default Footer;
