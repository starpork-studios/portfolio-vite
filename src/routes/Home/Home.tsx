import { Suspense, useRef, useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  Canvas,
  GroupProps,
  MeshProps,
  ThreeElements,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { Mesh } from "three/src/objects/Mesh";
import { DoubleSide, Group, Side, TextureLoader, Vector3 } from "three";
import { Scroll, ScrollControls, Sparkles, useScroll } from "@react-three/drei";
import { CarouselVertical } from "../../components/Home/CarouselVertical/CarouselVertical";
import SectionControls from "../../components/Home/SectionControls/SectionControls";

interface MeshImageProps extends MeshProps {
  file: string;
}

export function Rig() {
  const { camera, mouse } = useThree();
  const vec = new Vector3(0, 0, 0);
  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.5, 0), 0.07);
  });
}
function Home() {
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);
  const navigate = useNavigate();
  const offsetBlock = Math.PI / 3.7;
  return (
    <Canvas
      camera={{
        position: [0, 40, 60], //change to y = 10 for horizontal
        fov: 45,
        aspect: 1.5,
        rotation: [offsetBlock, 0, -Math.PI / 48], //change to x = -Math.PI / 12for vertical
      }}
    >
      <Rig />
      <ScrollControls damping={0.3} pages={4}>
        <>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <CarouselVertical
            cyclinderData={[
              { file: "lmi2.png", onSetHover: () => {}, hover: false },
              { file: "lmi.png", onSetHover: () => {}, hover: false },
              { file: "lmi3.jpeg", onSetHover: () => {}, hover: false },
              { file: "lmi4.jpeg", onSetHover: () => {}, hover: false },
            ]}
          />
        </>
        <Scroll html>
          <div className="w-screen">
            <SectionControls navigate={navigate} />
            <SectionControls navigate={navigate} />
            <SectionControls navigate={navigate} />
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default Home;
