import { useScroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion";
import React, { forwardRef, RefObject, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Group } from "three";
import { ZoomedProps } from "../types";
import { WorkItem } from "../workdata";

type SectionProps = {
  navigate: NavigateFunction;
  setZoomed: React.Dispatch<React.SetStateAction<ZoomedProps>>;
  data: WorkItem;
  index: number;
  carouselRef: React.MutableRefObject<Group>;
  sectionRef: RefObject<HTMLElement>;
};

const SectionControls: React.FC<SectionProps> = ({
  navigate,
  setZoomed,
  data,
  index,
  carouselRef,
  sectionRef,
}) => {
  const [x, setX] = useState(0);
  const scroll = useScroll();

  return (
    <section
      className={`h-screen flex flex-col justify-center p-10`}
      ref={sectionRef}
    >
      <div className=" flex justify-center items-center  pointer-events-none">
        <motion.h1
          className="md:text-9xl sm:text-7xl text-5xl text-white font-hatton  "
          initial={{ y: -400, x: -400, opacity: 0 }}
          animate={{
            y: 0,
            x,
            opacity: 1,
            transition: {
              duration: 4,
              type: "spring",
              stiffness: 50,
            },
          }}
        >
          {data.title}{" "}
        </motion.h1>
      </div>
    </section>
  );
};

export default SectionControls;
