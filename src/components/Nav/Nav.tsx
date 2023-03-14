import { motion } from "framer-motion";
import React from "react";

const Nav = () => {
  return (
    <nav className=" fixed  w-full ">
      <motion.hr
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </nav>
  );
};

export default Nav;
