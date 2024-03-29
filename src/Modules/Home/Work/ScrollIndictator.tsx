import React from "react";
import { ReactComponent as Chevron } from "../../../assets/icons/chevron-double-down.svg";
import { AnimatePresence, motion } from "framer-motion";

const ScrollIndictator: React.FC<{
  isVisible: boolean;
  isGoingBack: boolean;
}> = ({ isVisible, isGoingBack }) => {
  const scrollDown = () => {
    const height = window.innerHeight;
    window.scrollTo({ top: height, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && !isGoingBack && (
        <motion.button
          onClick={scrollDown}
          className=" w-14 h-14 absolute z-[9999]   left-[calc(50vw-1.75rem)] top-[calc(100vh-100px)]"
          animate={{
            opacity: [0, 1, 0],
            y: [-20, 0],
            transition: { duration: 2, repeat: Infinity },
          }} // Set the opacity values to animate between
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          initial={{ opacity: 1 }}
        >
          <Chevron className=" stroke-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndictator;
