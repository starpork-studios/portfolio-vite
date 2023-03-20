import { useRef, useState } from "react";
import { GroupProps, MeshProps, useFrame } from "@react-three/fiber";
import { Group } from "three";
import { useScroll } from "@react-three/drei";
import { CylinderImage } from "./CylinderImage";
import { CarouselProps } from "./types";

export function CarouselVertical(props: CarouselProps) {
  const segmentRotate = (order: number, initial: number) => {
    if (order === 0) return initial;
    return initial - order * 0.8;
  };

  const scrollProportionFormula = (imageCount: number) => {
    return (imageCount - 1) / 3;
  };
  // This reference will give us direct access to the mesh
  const group = useRef<Group>(null!);
  // Set up state for the hovered and active state
  const [active, setActive] = useState(false);

  const data = useScroll();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    //const a = data.range(0, 1 / 3);
    // Will start increasing when 1 / 3 of the scroll distance is reached,
    // and reach 1 when it reaches 2 / 3rds.
    //const b = data.range(1 / 3, 1 / 3);
    // Same as above but with a margin of 0.1 on both ends
    //const c = data.range(1 / 3, 1 / 3, 0.1);
    // Will move between 0-1-0 for the selected range
    //const d = data.curve(1 / 3, 1 / 3);
    // Same as above, but with a margin of 0.1 on both ends
    //const e = data.curve(1 / 3, 1 / 3, 0.1);
    // Returns true if the offset is in range and false if it isn't
    //const f = data.visible(2 / 3, 1 / 3);
    // The visible function can also receive a margin
    //const g = data.visible(2 / 3, 1 / 3, 0.1);
    const pastFirstHalfProgress = data.range(0, 1 / 2);

    // need to adjust this adding more photos
    // 5 photos = -data.offset * 4/3
    // 4 photos = -data.offset
    // 3 photos = -data.offset * 2/3
    // 2 photos = -data.offset * 1/3
    group.current.rotation.x =
      -(data.offset * scrollProportionFormula(props.cyclinderData.length)) *
      segmentRotate(3, 0);
  });

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <group {...props} ref={group} onClick={(event) => setActive(!active)}>
      {props.cyclinderData.map((data, index) => (
        <CylinderImage
          rotation={[segmentRotate(index, 0), Math.PI / 7, Math.PI]}
          file={data.file}
        />
      ))}
    </group>
  );
}
