import React from "react";
import { useScreenQueries } from "../../../hooks/useScreenQueries";
import { ContentItem } from "../content";
import Block from "./Content/Block";

const Info: React.FC<{ workItem: ContentItem }> = ({ workItem }) => {
  useScreenQueries();
  return (
    <div>
      <div className="flex flex-col  md:pt-[130px] pt-[40px] ml-auto lg:max-w-[980px] gap-[130px] ">
        {workItem.page?.sections.map((section) => (
          <Block blockSection={section} />
        ))}
        <img src={workItem.page?.image} className=" ml-auto " />
      </div>
    </div>
  );
};

export default Info;
