import { MotionProps, Variants, motion } from "framer-motion";
import React from "react";
import { MotionFrom } from "./types";

interface MotionWrapperProps extends MotionProps {
  direction: MotionFrom;
  delay?: number;
  className?: string;
  automatic?: boolean;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  direction,
  delay,
  className,
  automatic,
}) => {
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
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true } };

  return (
    <motion.div
      variants={variants}
      initial={"hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
