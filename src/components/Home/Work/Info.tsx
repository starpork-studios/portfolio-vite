import React from "react";
import { WorkItem } from "../workdata";
import { useScreenQueries } from "../../../hooks/useScreenQueries";

const Info: React.FC<{ workItem: WorkItem }> = ({ workItem }) => {
  useScreenQueries();
  return (
    <div>
      <div className="flex flex-col">
        {workItem.page?.paragraph}
        <img
          src={workItem.page?.image}
          className="mt-[80px] ml-auto lg:max-w-[1280px]"
        />
      </div>
    </div>
  );
};

export default Info;
