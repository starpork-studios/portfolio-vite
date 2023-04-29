import React, { useEffect } from "react";
import "./ShadowBorder.scss";
import { Variants, motion, useAnimationControls } from "framer-motion";

const ShadowBorder: React.FC<{ visible: boolean }> = ({ visible }) => {
  const controls = useAnimationControls();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },

    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    visible ? controls.start("visible") : controls.start("hidden");
  }, [visible]);

  return (
    <>
      <motion.div
        className="shadow-border-top"
        initial={"visible"}
        animate={controls}
        variants={variants}
      />
      <motion.div
        className="shadow-border-bottom"
        initial={"hidden"}
        animate={controls}
        variants={variants}
      />
    </>
  );
};
export default ShadowBorder;
