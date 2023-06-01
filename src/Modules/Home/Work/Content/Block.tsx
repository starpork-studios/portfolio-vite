import React from "react";
import { BlockSection } from "./types";
import MotionWrapper from "../../../../components/Animated/MotionWrapper";
import { MotionFrom } from "../../../../components/Animated/types";
import OverlineParagraph from "../../../../components/Animated/OverlineParagraph";

const Block: React.FC<{ blockSection: BlockSection }> = ({ blockSection }) => {
  const { heading, paragraphs } = blockSection;
  return (
    <div className=" flex flex-col font-body">
      <MotionWrapper direction={MotionFrom.Above} delay={0.6} isDark>
        <h5 className=" text-3xl md:text-5xl font-bold ">{heading}</h5>
      </MotionWrapper>

      <div className=" flex flex-col md:flex-row gap-[40px]  font-light ">
        {paragraphs.map((text, index) => (
          <OverlineParagraph
            key={`paragraph-${index}`}
            content={text}
            delay={index * 0.3 + 0.8}
          />
        ))}
      </div>
    </div>
  );
};

export default Block;
