import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold text-red-500 underline">
        Hello World!
      </h1>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh rotation={[10, 15, 6]}>
          <boxGeometry args={[2, 2, 2]} />

          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
