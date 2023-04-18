import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import { twConfig } from "../main";

export const useScreenQueries = () => {
  const x = twConfig.theme.screens;

  const { matches } = useMediaQueries({
    sm: `(max-width: ${x.sm}`,
    md: `(max-width: ${x.md}`,
    lg: `(max-width: ${x.lg}`,
    xl: `(max-width: ${x.xl}`,
    "2xl": `(max-width: ${x["2xl"]}`,
  });

  return matches;
};
