import React from "react";

const GridItem: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-3  w-fit col-span-1">
      {children}
    </div>
  );
};

export default GridItem;
