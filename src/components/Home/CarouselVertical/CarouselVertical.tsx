import { useRef, useState } from "react";
import { GroupProps, MeshProps, useFrame } from "@react-three/fiber";
import { Group } from "three";
import { useScroll } from "@react-three/drei";
import { CylinderImage } from "./CylinderImage";
import { CarouselProps } from "./types";

export function CarouselVertical(props: CarouselProps) {
  const segmentRotate = (order: number, initial: number) => {
    if (order === 0) return initial;

    return initial + ((2 * Math.PI) / 6.5) * (order * 0.8);
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
    const pastFirstThirdProgress = data.range(1 / 3, 1);

    group.current.rotation.x = data.offset * segmentRotate(3, 0);
  });

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <group {...props} ref={group} onClick={(event) => setActive(!active)}>
      {props.cyclinderData
        .slice(0)
        .reverse()
        .map((data, index) => (
          <CylinderImage
            rotation={[
              segmentRotate(index, Math.PI / 1.9),
              Math.PI / 7,
              Math.PI,
            ]}
            file={data.file}
            onSetHover={data.onSetHover}
            hover={data.hover}
          />
        ))}
    </group>
  );
}
