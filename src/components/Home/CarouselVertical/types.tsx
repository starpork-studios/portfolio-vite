import { GroupProps, MeshProps } from "@react-three/fiber";

export interface MeshImageProps extends MeshProps {
  file: string;
  onSetHover: () => void;
  hover: boolean;
}

export interface CarouselProps extends GroupProps {
  cyclinderData: MeshImageProps[];
}
