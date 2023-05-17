import { is } from "@react-three/fiber/dist/declarations/src/core/utils";
import { AnimationControls } from "framer-motion";
import { useEffect } from "react";

export const useAnimateMode = (
  isDark: boolean,
  controls: AnimationControls,
  colorPropName: string,
  toggleColor?: string
) => {
  useEffect(() => {
    isDark
      ? controls.start({
          [colorPropName]: toggleColor === undefined ? "#000" : toggleColor,
          transition: { duration: 1, ease: "easeInOut" },
        })
      : controls.start({
          [colorPropName]: toggleColor === undefined ? "#fff" : toggleColor,

          transition: { duration: 1, ease: "easeInOut" },
        });
  }, [isDark, toggleColor]);
};
