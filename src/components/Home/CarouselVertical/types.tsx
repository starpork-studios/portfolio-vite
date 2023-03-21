import { GroupProps, MeshProps } from "@react-three/fiber";
import { WorkData } from "../workdata";

export interface MeshImageProps extends MeshProps {
  file: string;
}

export interface CarouselProps extends GroupProps {
  cyclinderData: WorkData;
}
