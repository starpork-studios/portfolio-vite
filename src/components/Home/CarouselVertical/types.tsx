import { GroupProps, MeshProps } from "@react-three/fiber";
import { RefObject } from "react";
import { Group } from "three";
import { ZoomedProps } from "../types";
import { WorkData } from "../workdata";

export interface MeshImageProps extends MeshProps {
  file: string;
  isOpen: boolean;
}

export interface CarouselProps extends GroupProps {
  cyclinderData: WorkData;
  zoomed: ZoomedProps;
  setZoomed: React.Dispatch<React.SetStateAction<ZoomedProps>>;
  carouselRef: React.MutableRefObject<Group>;
  sectionRefs: React.MutableRefObject<RefObject<HTMLElement>[]>;
}
