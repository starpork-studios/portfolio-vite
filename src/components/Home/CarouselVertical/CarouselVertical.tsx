import { useRef, useState } from "react";
import { GroupProps, MeshProps, useFrame } from "@react-three/fiber";
import { Group, MathUtils } from "three";
import { useScroll } from "@react-three/drei";
import { CylinderImage } from "./CylinderImage";
import { CarouselProps } from "./types";
import { images } from "../workdata";
const ROTATION_CONSTANT = 0.8;

export function CarouselVertical(props: CarouselProps) {
  const [returningToStart, setReturningToStart] = useState<boolean>(false);
  const segmentRotate = (order: number, initial: number) => {
    if (order === 0) return initial;
    return initial - order * ROTATION_CONSTANT;
  };

  const scrollProportionFormula = (imageCount: number) => {
    return (imageCount - 1) / 3;
  };

  const scrollAmount = (imageCount: number, offset: number) => {
    return (
      -(offset * scrollProportionFormula(imageCount)) * segmentRotate(3, 0)
    );
  };
  // This reference will give us direct access to the mesh
  //const group = useRef<Group>(null!);
  //const group = props.carouselRef;

  // Set up state for the hovered and active state
  const [active, setActive] = useState(false);

  const data = useScroll();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  /*useFrame((state, delta) => {
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
    const x = props.carouselRef.current.rotation.x;
    const pastFirstHalfProgress = data.range(0, 1 / 2);
    if (!props.zoomed.isZoomed) {
      if (returningToStart) {
        props.carouselRef.current.rotation.x = MathUtils.lerp(
          x,
          props.zoomed.startingRotation,
          0.05
        );
        if (
          Math.abs(
            props.carouselRef.current.rotation.x - props.zoomed.startingRotation
          ) < 0.01
        ) {
          props.carouselRef.current.rotation.x = MathUtils.lerp(
            x,
            scrollAmount(props.cyclinderData.length, data.offset),
            0.05
          );
          console.log("return to start");
          setReturningToStart(false);
        }
      }

      if (!returningToStart)
        props.carouselRef.current.rotation.x = scrollAmount(
          props.cyclinderData.length,
          data.offset
        );
    } else {
      setReturningToStart(true);
      props.carouselRef.current.rotation.x = MathUtils.lerp(
        x,
        ROTATION_CONSTANT * props.zoomed.page,
        0.05
      );
    }
  });*/

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
    const x = props.carouselRef.current.rotation.x;
    const pastFirstHalfProgress = data.range(0, 1 / 2);

    props.carouselRef.current.rotation.x = scrollAmount(
      props.cyclinderData.length,
      data.offset
    );

    //maxScroll = 7117.5
    //scrollHeight = 8067

    //window.innerHeight = 949

    //console.log(data.el.scrollTop);
    //5 images -0.015
    //4 images 0
    //3 images + 0.05
    //2 images + 0.25

    const scrollSection =
      (data.el.scrollHeight - window.innerHeight) / (images.length - 1);
    if (props.zoomed.isZoomed) {
      data.el.scroll({
        top: props.zoomed.page * scrollSection,
      });
    }
    /*data.el.scroll({
        top:
          props.zoomed.page *
          ((data.el.scrollHeight +
            window.innerHeight +
            data.el.scrollHeight * 0.25) /
            images.length),
      });*/
    //innerHeight + sectionHeight
  });

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <group
      {...props}
      ref={props.carouselRef}
      onClick={(event) => setActive(!active)}
    >
      {props.cyclinderData.map((data, index) => (
        <CylinderImage
          rotation={[segmentRotate(index, 0), Math.PI / 7, Math.PI]}
          file={data.file}
          key={`image-${index}`}
        />
      ))}
    </group>
  );
}
