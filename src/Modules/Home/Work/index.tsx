import { motion, useScroll } from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ZoomedProps } from "../types";
import Heading from "./Heading";
import Info from "./Content";
import ScrollIndictator from "./ScrollIndictator";
import { ContentItem } from "../content";
import text from "../../../components/Inputs/ArrowButton";
import ArrowButton from "../../../components/Inputs/ArrowButton";
import MotionWrapper from "../../../components/Animated/MotionWrapper";
import { MotionFrom } from "../../../components/Animated/types";
import { NavModeContext } from "../../../NavModeProvider";
const REMOVE_SCROLLING = (event: WheelEvent) => {
  event.preventDefault();
};
const ZOOMED_OUT_STATE = { isZoomed: false, page: -1, previous: -1 };
const Work: React.FC<{
  item: ContentItem;
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
        setZoomed(ZOOMED_OUT_STATE);
        document.removeEventListener("wheel", REMOVE_SCROLLING);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  const goBack = () => {
    if (window.scrollY === 0) {
      setZoomed(ZOOMED_OUT_STATE);
      return;
    }
    document.addEventListener("wheel", REMOVE_SCROLLING, { passive: false });

    setIsScrolling(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    //ref.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (zoomed.page != index) return <></>;

  return (
    <>
      <ScrollIndictator isVisible={showScrollHint} isGoingBack={isScrolling} />
      <motion.div className="h-full w-full  absolute top-0 " ref={ref}>
        <div className="h-full w-full" onClick={goBack}></div>
        <div className=" bg-gray-200 flex justify-center align-middle">
          <div className="flex flex-col px-[30px] md:px-[60px] md:pt-[90px] pt-[45px] md:pb-[60px] pb-[30px] w-full max-w-[1500px]">
            <Heading workItem={item} />
            <Info workItem={item} />
            <MotionWrapper
              direction={MotionFrom.Below}
              delay={0.2}
              className="ml-auto md:mt-[60px] mt-[30px]"
            >
              <ArrowButton
                className=" font-body font-light"
                onClick={goBack}
                text="Back"
              />
            </MotionWrapper>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Work;
