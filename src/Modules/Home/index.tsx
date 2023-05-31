import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Group, MathUtils, Vector3 } from "three";

import { Scroll, ScrollControls } from "@react-three/drei";
import { CarouselVertical } from "./CarouselVertical";
import SectionControls from "./SectionControls";
import { createRef, useContext, useEffect, useRef, useState } from "react";
import { ZoomedProps } from "./types";
import Work from "./Work";
import { motion } from "framer-motion";
import { content } from "./content";
import { useScreenQueries } from "../../hooks/useScreenQueries";
import { NavModeContext } from "../../NavModeProvider";
import ShadowBorder from "../../components/Overlay/ShadowBorder/ShadowBorder";

export const Rig: React.FC<ZoomedProps> = ({ isZoomed, page }) => {
  const { camera, mouse } = useThree();
  const vec = new Vector3(0, 0, 0);
  const { sm } = useScreenQueries();

  return useFrame(() => {
    const z = camera.rotation.z;
    const x = camera.rotation.x;

    if (isZoomed) {
      camera.position.lerp(vec.set(0, 0, 9), 0.07);
      camera.rotation.z = MathUtils.lerp(z, 0, 0.05);
    } else {
      camera.position.lerp(
        sm ? vec.set(0, 0, 0) : vec.set(mouse.x * 1, -mouse.y * 0.5, 0),
        0.07
      );
      camera.rotation.z = MathUtils.lerp(
        z,
        sm ? -Math.PI / 48 : -Math.PI / 48,
        0.05
      );
    }

    //camera.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.5, 0), 0.07);
  });
};
function Home() {
  const [zoomed, setZoomed] = useState<ZoomedProps>({
    page: -1,
    previous: -1,
    isZoomed: false,
  });
  const carouselRef = useRef<Group>(null!);
  const sectionRefs = useRef<Array<React.RefObject<HTMLElement>>>(
    Array(content.length)
      .fill(null)
      .map(() => createRef<HTMLElement>())
  );

  const { setIsDark } = useContext(NavModeContext);
  useEffect(() => {
    setIsDark(false);
  }, []);

  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const [cursorCircleMode, setCursorCircleMode] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div className="w-full h-full overflow-auto ">
      {cursorCircleMode && (
        <div
          className=" fixed left-0 top-0 w-8 h-8 bg-white opacity-50 z-[10000] rounded-3xl pointer-events-none"
          style={{
            transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
          }}
        ></div>
      )}
      <ShadowBorder visible={!zoomed.isZoomed} />
      <Canvas
        camera={{
          position: [-10, -90, -60], //change to y = 10 for horizontal
          fov: 40,
          aspect: 1.5,

          rotation: [Math.PI, 0, -Math.PI / 48], // need to adjust x when adding more photos
        }}
      >
        <Rig {...zoomed} />
        <ScrollControls
          damping={0.3}
          pages={content.length}
          distance={1.5} /* 1 page per photo*/
        >
          <>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <CarouselVertical
              cyclinderData={content}
              zoomed={zoomed}
              setZoomed={setZoomed}
              carouselRef={carouselRef}
              sectionRefs={sectionRefs}
              cursorCircleMode={cursorCircleMode}
              setCursorCircleMode={setCursorCircleMode}
            />
          </>
          <Scroll html>
            <div className="w-screen">
              {content.map((item, index) => {
                return (
                  <SectionControls
                    data={item}
                    zoomed={zoomed}
                    key={`section-${index}`}
                    sectionRef={sectionRefs.current[index]}
                  />
                );
              })}
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>

      {content.map((item, index) => (
        <Work
          key={`work-${index}`}
          zoomed={zoomed}
          setZoomed={setZoomed}
          item={item}
          index={index}
        />
      ))}
    </motion.div>
  );
}

export default Home;
