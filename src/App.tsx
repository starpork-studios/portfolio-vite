import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh rotation={[10, 15, 6]}>
          <boxGeometry args={[2, 2, 2]} />

          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
