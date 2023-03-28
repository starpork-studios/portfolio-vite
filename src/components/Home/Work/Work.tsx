import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ZoomedProps } from "../types";
import { WorkItem } from "../workdata";

const Work: React.FC<{
  item: WorkItem;
  zoomed: ZoomedProps;
  setZoomed: React.Dispatch<React.SetStateAction<ZoomedProps>>;
  index: number;
}> = ({ zoomed, setZoomed, item, index }) => {
  const { scrollYProgress } = useScroll();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

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
  if (zoomed.page != index) return <></>;

  return (
    <motion.div className="h-full w-full  absolute top-0 " ref={ref}>
      <p>WorkItem {zoomed.page}</p>

      <div>
        <div className=" h-96 bg-green-600 mt-[100vh]">
          Section 4<p className=" text-cyan-100">{scrollYProgress.get()}</p>
        </div>

        <div className=" h-96 bg-yellow-600">Section 5</div>
        <button
          className="bg-blue-600"
          onClick={() => {
            setIsScrolling(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
            //ref.current?.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Go Back
        </button>
        <motion.p
          className="text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          blah bah cbwhjshsd blah bah cbwhjshsd blah bah cbwhjshsd blah bah
          cbwhjshsd blah bah cbwhjshsd blah bah cbwhjshsd blah bah cbwhjshsd
          blah bah cbwhjshsd blah bah cbwhjshsd blah bah cbwhjshsd blah bah
          cbwhjshsd blah bah cbwhjshsd blah bah cbwhjshsd blah bah cbwhjshsd
          blah bah cbwhjshsd blah bah cbwhjshsd blah bah cbwhjshsd
        </motion.p>
        <div className=" h-96 bg-pink-600">Section 6</div>
      </div>
    </motion.div>
  );
};

export default Work;
