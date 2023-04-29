import { Variants, motion, useAnimationControls } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { MotionFrom } from "./types";
import { useAnimateMode } from "./useAnimateMode";

export const SlideInLine: React.FC<{
  direction: Exclude<MotionFrom, MotionFrom.Above | MotionFrom.Below>;
  delay?: number;
  className?: string;
  isDark?: boolean;
  automatic?: boolean;
}> = ({ direction, delay, className, isDark, automatic = true }) => {
  const directionInitial = () => {
    switch (direction) {
      case MotionFrom.Right:
        return { marginLeft: "auto" };
    }
  };

  const controls = useAnimationControls();

  useEffect(() => {
    automatic &&
      controls.start({
        width: "100%",
        transition: { delay: delay || 0, duration: 1 },
      });
  }, []);

  useAnimateMode(isDark || false, controls, "borderColor");

  const variants: Variants = {
    hidden: { ...directionInitial(), width: 0 },
    visible: {
      width: "100%",
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
    <motion.hr
      initial={"hidden"}
      animate={controls}
      variants={variants}
      className={className}
      {...props}
    />
  );
};

export default SlideInLine;
