import React from "react";
import { GridItemContent } from "./types";
import GridContent from "./GridContent";
import { ReactComponent as Diamond } from "../../../assets/icons/diamond.svg";
import GridItem from "./GridItem";

const DiamondGrid: React.FC<{
  content: GridItemContent[];
  columnCount: number;
}> = ({ content, columnCount }) => {
  return (
    <div
      className="grid gap-3 font-light"
      style={{
        gridTemplateColumns: `repeat(${
          2 * columnCount - 1
        }, fit-content(100%))`,
      }}
    >
      {content.map((contentItem, index) => (
        <>
          <GridContent
            text={contentItem.text}
            url={contentItem.url}
            key={index}
          />
          {(index + 1) % columnCount !== 0 && (
            <GridItem>
              <Diamond width={8} height={8} />
            </GridItem>
          )}
        </>
      ))}
    </div>
  );
};

export default DiamondGrid;
