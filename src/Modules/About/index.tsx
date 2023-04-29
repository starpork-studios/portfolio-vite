import React, { useContext, useEffect } from "react";
import { NavModeContext } from "../../NavModeProvider";

const About = () => {
  const { setIsDark } = useContext(NavModeContext);
  useEffect(() => {
    setIsDark(true);
  }, []);
  return (
    <div className=" bg-[#f8f6f5] h-full">
      <h1 className=" text-white">About Me Blah</h1>
    </div>
  );
};

export default About;
