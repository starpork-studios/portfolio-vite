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
import { images } from "../../components/Home/workdata";

export function Rig() {
  const { camera, mouse } = useThree();
  const vec = new Vector3(0, 0, 0);
  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.5, 0), 0.06);
  });
}
function Home() {
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);
  const navigate = useNavigate();
  return (
    <Canvas
      camera={{
        position: [-10, 90, -40], //change to y = 10 for horizontal
        fov: 45,
        aspect: 1.5,

        rotation: [3.14, 0, -Math.PI / 48], // need to adjust x when adding more photos
      }}
      //4 images = 0.8
      //3 images = 0.08
      //2 images = -0.68
      //1 images = -1.46
    >
      <Rig />
      <ScrollControls
        damping={0.3}
        pages={images.length}
        distance={1.5} /* 1 page per photo*/
      >
        <>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <CarouselVertical cyclinderData={images} />
        </>
        <Scroll html>
          <div className="w-screen">
            {images.map((_, index) => (
              <SectionControls navigate={navigate} key={index} />
            ))}
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default Home;
