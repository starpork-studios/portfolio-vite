import React from "react";
import GridItem from "./GridItem";

const GridContent: React.FC<{
  text: string;
  url?: string;
}> = ({ text, url }) => {
  return (
    <GridItem>
      <p className="flex-auto box-border">
        {url ? (
          <a href={url} target="_blank">
            {text}
          </a>
        ) : (
          text
        )}
      </p>
    </GridItem>
  );
};

export default GridContent;
