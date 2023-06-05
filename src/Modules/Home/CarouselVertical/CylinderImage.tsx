import { MeshDistortMaterial, PointerLockControls } from "@react-three/drei";
import { MeshProps, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import {
  CylinderGeometry,
  DoubleSide,
  MathUtils,
  Mesh,
  Quaternion,
  Raycaster,
  RepeatWrapping,
  TextureLoader,
  Vector2,
  Vector3,
} from "three";
import { MeshImageProps } from "./types";
import { useDistortionAnimation } from "./useDistortionAnimation";
import { useScreenQueries } from "../../../hooks/useScreenQueries";

export function CylinderImage(props: MeshImageProps) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>(null!);
  const bufferGeometry = useRef<CylinderGeometry>(null!);
  const colorMap = useLoader(TextureLoader, props.file);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return view, these are regular three.js elements expressed in JSX
  const [hover, setHover] = useState(false);
  const [distort, setDistort] = useState(0);
  const [zoom, setZoom] = useState(0);
  const { camera } = useThree();

  const { updateDistortionState } = useDistortionAnimation(
    setDistort,
    distort,
    hover
  );

  useEffect(() => {
    setHover(false);
  }, [props.isOpen]);

  useEffect(() => {
    document.body.style.cursor = hover && !props.isOpen ? "pointer" : "auto";
    //document.body.style.cursor = hover && !props.isOpen ? "none" : "auto";
  }, [hover, props.isOpen]);

  // Detect pointer leaving the mesh

  useFrame((state, delta) => {
    colorMap.offset = new Vector2(zoom / 2, zoom / 2);
    colorMap.repeat = new Vector2(1 - zoom, 1 - zoom);

    state.raycaster.setFromCamera(state.mouse, camera);

    // Check if the pointer is currently intersecting with the mesh
    const intersections = state.raycaster.intersectObject(mesh.current, true);
    const isHovered = intersections.length > 0;
    if (isHovered && !hover) {
      setHover(true);
    }

    if (!isHovered && hover) {
      setHover(false);
    }

    if (hover) {
      if (zoom < 0.08) setZoom((z) => z + 0.001);
    } else {
      if (zoom > 0) setZoom((z) => z - 0.001);
    }

    updateDistortionState();
    return;
  });

  const { sm } = useScreenQueries();

  return (
    <mesh {...props} ref={mesh}>
      <cylinderBufferGeometry
        args={[
          15,
          15,
          sm ? 7.5 : 7.5,
          128,
          1,
          true,
          0,
          Math.PI / (sm ? 10 : 3.5),
        ]}
        ref={bufferGeometry}
      />
      {
        <MeshDistortMaterial
          map={colorMap}
          side={DoubleSide}
          metalness={0}
          bumpScale={0.005}
          clearcoat={1}
          clearcoatRoughness={1}
          radius={1.5}
          speed={10}
          distort={distort}
          time={40}
        />
      }
    </mesh>
  );
}
