import { motion } from "framer-motion";
import React from "react";
export enum MotionFrom {
  Above,
  Below,
}
export const MotionText: React.FC<{
  children?: React.ReactNode;
  direction: MotionFrom;
  delay?: number;
}> = ({ children, direction, delay }) => {
  return (
    <motion.div
      initial={{ y: direction === MotionFrom.Above ? -5 : 5, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: delay || 0,
          duration: 2,
          type: "spring",
          stiffness: 50,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionText;
