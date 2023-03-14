import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const SectionControls: React.FC<{ navigate: NavigateFunction }> = ({
  navigate,
}) => {
  const [x, setX] = useState(0);

  return (
    <section className={`h-screen flex flex-col justify-center p-10`}>
      <button onClick={() => setX(400)} className=" text-white">
        move!
      </button>
      <button onClick={() => navigate("work-1")} className=" text-white">
        Work
      </button>
      <div className=" flex justify-center items-center ">
        <motion.h1
          className="text-3xl font-bold text-red-500 underline "
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
          Hello World!
        </motion.h1>
        <h1 className=" text-white">Hi There</h1>
      </div>
    </section>
  );
};

export default SectionControls;
