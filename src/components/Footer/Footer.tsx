import { motion, useScroll, useTransform } from "framer-motion";
import React, { CSSProperties, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.footer
      className=" fixed  w-full  z-10 pointer-events-none bottom-0 "
      style={{ opacity }}
    >
      <motion.div
        className="flex flex-col justify-between  text-white  font-body font-light tracking-wider	leading-6 mb-[40px] ml-[60px] mr-[60px] "
        initial={{ y: -5, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 1.2,
            duration: 2,
            type: "spring",
            stiffness: 50,
          },
        }}
      >
        <p>myfakeemail@gmail.com</p>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 mb-0"
        />{" "}
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
