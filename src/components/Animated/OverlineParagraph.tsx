import React from "react";
import MotionWrapper from "./MotionWrapper";
import SlideInLine from "./SlideInLine";
import { MotionFrom } from "./types";

const OverlineParagraph: React.FC<{ content: JSX.Element; delay: number }> = ({
  content,
  delay,
}) => {
  return (
    <MotionWrapper
      className=" flex-1"
      direction={MotionFrom.Below}
      delay={delay}
      automatic={false}
      isDark
    >
      <SlideInLine
        direction={MotionFrom.Left}
        isDark
        className="my-[20px] border-t-1"
        delay={delay}
        automatic={false}
      />
      {content}
    </MotionWrapper>
  );
};

export default OverlineParagraph;
