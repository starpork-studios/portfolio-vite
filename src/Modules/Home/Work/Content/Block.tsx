import React from "react";
import { BlockSection } from "./types";
import MotionWrapper from "../../../../components/Overlay/Shared/MotionWrapper";
import { MotionFrom } from "../../../../components/Overlay/Shared/types";

const Block: React.FC<{ blockSection: BlockSection }> = ({ blockSection }) => {
  const { heading, paragraphs } = blockSection;
  return (
    <div className=" flex flex-col font-body ">
      <MotionWrapper direction={MotionFrom.Above} delay={0.6}>
        <h5 className=" text-5xl font-bold ">{heading}</h5>
      </MotionWrapper>

      <div className=" flex flex-row gap-[40px]  font-light ">
        {paragraphs.map((text, index) => (
          <MotionWrapper
            className=" flex-1"
            key={`paragraph-${index}`}
            direction={MotionFrom.Below}
            delay={index * 0.3 + 0.8}
          >
            <hr className="my-[20px] border-t-1 border-black" />
            {text}
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
};

export default Block;
