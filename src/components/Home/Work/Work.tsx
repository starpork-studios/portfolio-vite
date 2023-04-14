import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ZoomedProps } from "../types";
import { WorkItem } from "../workdata";
import Heading from "./Heading";
import Info from "./Info";
import ScrollIndictator from "./ScrollIndictator";

const Work: React.FC<{
  item: WorkItem;
  zoomed: ZoomedProps;
  setZoomed: React.Dispatch<React.SetStateAction<ZoomedProps>>;
  index: number;
}> = ({ zoomed, setZoomed, item, index }) => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [showScrollHint, setShowScrollHint] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 80) {
        setShowScrollHint(false);
      } else setShowScrollHint(true);

      if (scrollPosition === 0 && isScrolling) {
        setIsScrolling(false);
        setZoomed((zoomed) => {
          return {
            isZoomed: false,
            page: -1,
            previous: -1,
          };
        });
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  const goBack = () => {
    if (window.scrollY === 0) {
      setZoomed({
        isZoomed: false,
        page: -1,
        previous: -1,
      });
      return;
    }
    setIsScrolling(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    //ref.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (zoomed.page != index) return <></>;

  return (
    <>
      <ScrollIndictator isVisible={showScrollHint} />
      <motion.div className="h-full w-full  absolute top-0 " ref={ref}>
        <div className="h-full w-full" onClick={goBack}></div>
        <div>
          <div className=" bg-gray-200  px-[60px] pt-[90px] pb-[120px]">
            <Heading workItem={item} />
            <Info workItem={item} />

            <button className="bg-blue-600" onClick={goBack}>
              Go Back
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Work;
