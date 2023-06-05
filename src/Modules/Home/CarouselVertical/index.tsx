import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { CylinderImage } from "./CylinderImage";
import { CarouselProps } from "./types";
import { content } from "../content";
import { useScreenQueries } from "../../../hooks/useScreenQueries";
const ROTATION_CONSTANT = 0.8;
const MOBILE_ROTATION_CONSTANT = 0.55;

export function CarouselVertical(props: CarouselProps) {
  const { sm } = useScreenQueries();

  const segmentRotate = (order: number, initial: number) => {
    if (order === 0) return initial;
    return (
      initial - order * (sm ? MOBILE_ROTATION_CONSTANT : ROTATION_CONSTANT)
    );
  };

  const scrollProportionFormula = (imageCount: number) => {
    return (imageCount - 1) / 3;
  };

  const scrollAmount = (imageCount: number, offset: number) => {
    return (
      -(offset * scrollProportionFormula(imageCount)) * segmentRotate(3, 0)
    );
  };

  // Set up state for the hovered and active state
  const [active, setActive] = useState(false);

  const data = useScroll();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    props.carouselRef.current.rotation.x = scrollAmount(
      props.cyclinderData.length,
      data.offset
    );

    const scrollSection =
      (data.el.scrollHeight - window.innerHeight) / (content.length - 1);
    if (props.zoomed.isZoomed) {
      data.el.scroll({
        top: props.zoomed.page * scrollSection,
      });
    }
  });

  const onSelectWork = (index: number) => {
    props.setZoomed((zoomed) => {
      if (zoomed.isZoomed)
        return {
          isZoomed: !zoomed.isZoomed,
          page: -1,
          previous: zoomed.page,
        };

      return {
        isZoomed: !zoomed.isZoomed,
        page: index,
        previous: -1,
      };
    });
  };

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <group
      {...props}
      ref={props.carouselRef}
      onClick={(event) => setActive(!active)}
    >
      {props.cyclinderData.map((data, index) => (
        <CylinderImage
          rotation={[segmentRotate(index, 0), Math.PI / (sm ? 20 : 7), Math.PI]}
          file={sm ? data.mobile : data.file}
          key={`image-${index}`}
          isOpen={props.zoomed.isZoomed}
          onClick={() => onSelectWork(index)}
        />
      ))}
    </group>
  );
}
