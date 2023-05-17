import {
  MotionProps,
  Variants,
  motion,
  useAnimationControls,
} from "framer-motion";
import React, { useEffect } from "react";
import { MotionFrom } from "./types";
import { useAnimateMode } from "./useAnimateMode";

interface MotionWrapperProps extends MotionProps {
  direction: MotionFrom;
  delay?: number;
  className?: string;
  automatic?: boolean;
  isDark?: boolean;
  toggleColor?: string;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  direction,
  delay,
  className,
  automatic,
  isDark,
  toggleColor,
}) => {
  const controls = useAnimationControls();

  useEffect(() => {
    automatic &&
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          delay: delay || 0,
          duration: 1,
        },
      });
  }, []);

  const directionInitial = () => {
    switch (direction) {
      case MotionFrom.Above:
        return { y: -15 };
      case MotionFrom.Below:
        return { y: 15 };
      case MotionFrom.Left:
        return { x: -15 };
      case MotionFrom.Right:
        return { x: -15 };
    }
  };

  useAnimateMode(isDark || false, controls, "color", toggleColor);

  const variants: Variants = {
    hidden: { ...directionInitial(), opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay || 0,
        duration: 1,
      },
    },
  };

  const props = automatic
    ? {}
    : { whileInView: "visible", viewport: { once: true } };

  return (
    <motion.div
      initial={"hidden"}
      animate={controls}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
