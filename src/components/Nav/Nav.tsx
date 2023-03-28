import { motion } from "framer-motion";
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav className=" fixed  w-full  z-10 pointer-events-none">
      <div className="flex flex-col mb-10 mt-10 ml-12 mr-12">
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 1 }}
          className="mb-4"
        />
        <div className="flex flex-row justify-between  text-white  font-body font-light tracking-wider	leading-6">
          <motion.div
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
          <div className="flex flex-row gap-4">
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
    </nav>
  );
};

export default Nav;
