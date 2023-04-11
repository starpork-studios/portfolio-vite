import React from "react";
import { WorkItem } from "../workdata";
import { motion } from "framer-motion";

const Info: React.FC<{ workItem: WorkItem }> = ({ workItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 1 }}
      className="pl-[340px]"
    >
      {workItem.page?.paragraph}
      <img src={workItem.page?.image} className="mt-[80px]" />
    </motion.div>
  );
};

export default Info;