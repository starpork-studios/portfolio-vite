import { motion, useAnimation, useAnimationControls } from "framer-motion";
import React from "react";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

const ArrowButton: React.FC<{
  onClick: () => void;
  text?: string;
  className?: string;
  textColor?: string;
  underlineColor?: string;
}> = ({ onClick, className, textColor, text }) => {
  const animationControls = useAnimationControls();

  const color = textColor ? "text-" + textColor : "text-black";

  const textMotion = {
    rest: {
      x: 35,
      duration: 0.2,
    },
    hover: {
      x: 0,
      scale: 1.2,

      transition: {
        duration: 0.2,
      },
    },
    hoverLeave: {
      x: 35,
      duration: 0.2,
    },
  };

  const arrowMotion = {
    rest: {
      opacity: 0,
      x: -5,
      scale: 1,
    },
    hover: {
      opacity: 1,
      x: 0,
      scale: 1.2,

      transition: {
        duration: 0.2,
      },
    },
    hoverLeave: {
      x: 30,
      scale: 1.0,
      opacity: 0,
    },
  };
  return (
    <motion.button
      className={className}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate={animationControls}
      onHoverEnd={async () => {
        await animationControls.start("hoverLeave");
        animationControls.set("rest");
      }}
    >
      <motion.span
        className={`${color} inline-flex flew-row gap-4 items-center`}
      >
        <motion.span variants={textMotion}>{text}</motion.span>
        <motion.div variants={arrowMotion}>
          <Arrow />
        </motion.div>
      </motion.span>
    </motion.button>
  );
};

export default ArrowButton;
