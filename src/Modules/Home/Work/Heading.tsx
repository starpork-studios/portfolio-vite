import React, { useEffect, useRef } from "react";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { ContentItem } from "./MyExperiences";

const headings = (props?: { delay?: number }): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: 25,
      transition: {
        duration: 1,
        delay: props?.delay || 0,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        delay: props?.delay || 0,
      },
    },
  };
};

const hr: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    transition: {
      duration: 1,
      delay: 0.3,
    },
    width: "100%",
  },
};

const Heading: React.FC<{ workItem: ContentItem }> = ({ workItem }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <>
      <div ref={ref} className=" flex sm:flex-row flex-col justify-between">
        <motion.h1
          variants={headings({ delay: 0.3 })}
          initial="hidden"
          animate={controls}
          className="work-heading"
        >
          {workItem.page?.heading}
        </motion.h1>
        <motion.h1
          variants={headings({ delay: 0.9 })}
          initial="hidden"
          animate={controls}
          className="work-heading"
        >
          {workItem.page?.year}
        </motion.h1>
      </div>
      <motion.hr
        variants={hr}
        initial="hidden"
        animate={controls}
        className="mt-[20px]  border-t-2 border-black"
      />
    </>
  );
};

export default Heading;
