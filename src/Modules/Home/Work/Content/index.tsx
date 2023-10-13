import React from "react";
import { ContentItem } from "../MyExperiences";
import Block from "./Block";
import MotionWrapper from "../../../../components/Animated/MotionWrapper";
import { MotionFrom } from "../../../../components/Animated/types";

const Content: React.FC<{ workItem: ContentItem }> = ({ workItem }) => {
  return (
    <div>
      <div className="flex flex-col  md:pt-[130px] pt-[40px] ml-auto lg:max-w-[980px] gap-[130px] ">
        {workItem.page?.sections.map((section) => (
          <Block blockSection={section} />
        ))}
        <MotionWrapper direction={MotionFrom.Below} delay={0.8}>
          <img src={workItem.page?.image} className=" ml-auto " />
        </MotionWrapper>
      </div>
    </div>
  );
};

export default Content;
