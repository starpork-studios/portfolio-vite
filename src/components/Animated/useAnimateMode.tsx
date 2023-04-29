import { AnimationControls } from "framer-motion";
import { useEffect } from "react";

export const useAnimateMode = (
  isDark: boolean,
  controls: AnimationControls,
  colorPropName: string
) => {
  useEffect(() => {
    isDark
      ? controls.start({
          [colorPropName]: "#000",
          transition: { duration: 1, ease: "easeInOut" },
        })
      : controls.start({
          [colorPropName]: "#fff",

          transition: { duration: 1, ease: "easeInOut" },
        });
  }, [isDark]);
};
