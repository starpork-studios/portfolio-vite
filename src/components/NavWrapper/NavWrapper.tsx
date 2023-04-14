import { motion, useScroll, useTransform } from "framer-motion";
import React, { CSSProperties, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div
      className=" fixed  w-full  h-full z-10 pointer-events-none border-y-[40px] border-x-[60px] border-black"
      style={{ opacity }}
    >
      <div className="flex flex-col top-0 ">
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 1 }}
          className="mb-4"
        />
        <div className="flex flex-row justify-between  text-white  font-body font-light tracking-wider	leading-6 w-full">
          <motion.div
            className="ml-4"
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
            <p>Jarrod van den Heuvel</p>
            <p>Software Engineer</p>
          </motion.div>
          <div className="flex flex-row gap-4 mr-4">
            <Link to="/" className=" pointer-events-auto">
              <motion.p
                initial={{ y: -5, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1.7,
                    duration: 2,
                    type: "spring",
                    stiffness: 50,
                  },
                }}
              >
                Home
              </motion.p>
            </Link>
            <Link to="/about" className=" pointer-events-auto">
              <motion.p
                initial={{ y: -5, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1.8,

                    duration: 2,
                    type: "spring",
                    stiffness: 50,
                  },
                }}
              >
                About
              </motion.p>
            </Link>
          </div>
        </div>
      </div>

      <motion.div
        className="m-0 fixed left-[60px] border-l-white border-l-[1px] top-[40px]"
        initial={{ height: 0 }}
        animate={{ height: "calc(100% - 80px)" }}
        transition={{ delay: 1, duration: 1 }}
      ></motion.div>
      <motion.div
        className="m-0 fixed right-[60px] border-r-white border-r-[1px] top-[40px]"
        initial={{ height: 0 }}
        animate={{ height: "calc(100% - 80px)" }}
        transition={{ delay: 1, duration: 1 }}
      ></motion.div>

      <motion.div
        className="flex flex-col justify-between  text-white  w-[calc(100vw-120px)] font-body font-light tracking-wider	leading-6 fixed bottom-[40px]"
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
        <p className=" relative ml-4">myfakeemail@gmail.com</p>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 mb-0"
        />
      </motion.div>
    </motion.div>
  );
};

export default Nav;
