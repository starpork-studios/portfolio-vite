import { motion } from "framer-motion";
import React from "react";
import { MotionFrom } from "./types";

export const SlideInLine: React.FC<{
  direction: Exclude<MotionFrom, MotionFrom.Above | MotionFrom.Below>;
  delay?: number;
  className?: string;
}> = ({ direction, delay, className }) => {
  const directionInitial = () => {
    switch (direction) {
      case MotionFrom.Right:
        return { marginLeft: "auto" };
    }
  };
  return (
    <motion.hr
      initial={{ width: 0, ...directionInitial() }}
      animate={{ width: "100%" }}
      transition={{ delay: delay || 0, duration: 1 }}
      className={className}
    />
  );
};

export default SlideInLine;
