import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import Noise from "./components/Overlay/Noise/Noise";
import Nav from "./components/Overlay/Nav/Nav";
import { motion } from "framer-motion";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config";
import { NavModeProvider } from "./NavModeProvider";
import { Content } from "./content";

export const twConfig = resolveConfig(tailwindConfig);

export default function App() {
  return (
    <NavModeProvider>
      <Noise />
      <motion.div className="h-full">
        <BrowserRouter>
          <Nav />
          <Content />
        </BrowserRouter>
      </motion.div>
    </NavModeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
