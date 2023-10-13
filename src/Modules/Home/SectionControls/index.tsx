import { useScroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { motion, Variants } from "framer-motion";
import React, { forwardRef, RefObject, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Group } from "three";
import { ZoomedProps } from "../types";
import { ContentItem } from "../Work/MyExperiences";

type SectionProps = {
  zoomed: ZoomedProps;
  data: ContentItem;
  sectionRef: RefObject<HTMLElement>;
};

const SectionControls: React.FC<SectionProps> = ({
  data,
  zoomed,
  sectionRef,
}) => {
  const [x, setX] = useState(0);
  const scroll = useScroll();

  const transition = {
    delay: 0.1,
    duration: 4,
    type: "spring",
    stiffness: 50,
  };

  const variants: Variants = {
    hidden: {
      y: -30,
      x: -50,
      opacity: 0,
      transition,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <section
      className={`h-screen flex flex-col justify-center p-10`}
      ref={sectionRef}
    >
      <div className=" flex justify-center items-center  pointer-events-none">
        <motion.h1
          className="md:text-9xl sm:text-7xl text-5xl text-white font-hatton  "
          variants={variants}
          initial="hidden"
          animate={zoomed.isZoomed ? "hidden" : "visible"}
        >
          {data.title}{" "}
        </motion.h1>
      </div>
    </section>
  );
};

export default SectionControls;
