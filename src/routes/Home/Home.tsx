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
        position: [-10, 20, -20], //change to y = 10 for horizontal
        fov: 45,
        aspect: 1.5,

        rotation: [-offsetBlock / 1.2, 0, -Math.PI / 48], // need to adjust x when adding more photos
      }}
    >
      <Rig />
      <ScrollControls damping={0.3} pages={2} /* 1 page per photo*/>
        <>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <CarouselVertical
            cyclinderData={[
              { file: "lmi2.png", onSetHover: () => {}, hover: false },
              { file: "ss2.png", onSetHover: () => {}, hover: false },
            ]}
          />
        </>
        <Scroll html>
          <div className="w-screen">
            <SectionControls navigate={navigate} />
            <SectionControls navigate={navigate} />
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default Home;
