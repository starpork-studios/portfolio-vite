import { motion } from "framer-motion";
import React from "react";
import { NavOverlay, OverlayType } from "../Shared/NavOverlay";

const Footer: React.FC = () => {
  return (
    <NavOverlay type={OverlayType.Footer}>
      <motion.div className="flex flex-col justify-between  ">
        <motion.p
          initial={{ y: 5, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 1.6,
              duration: 2,
              type: "spring",
              stiffness: 50,
            },
          }}
        >
          myfakeemail@gmail.com
        </motion.p>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 mb-0 ml-auto"
        />
      </motion.div>
    </NavOverlay>
  );
};

export default Footer;
