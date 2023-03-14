import { useState } from "react";

export const useDistortionAnimation = (
  setDistort: React.Dispatch<React.SetStateAction<number>>,
  distort: number,
  isActive: boolean
) => {
  const [times, setTimes] = useState<{
    hasStarted: boolean;
    isComplete: boolean;
    maxReached: boolean;
  }>({
    hasStarted: false,
    isComplete: false,
    maxReached: false,
  });

  const updateDistortionState = () => {
    if (!times.isComplete) {
      if (times.hasStarted) {
        if (distort >= 0.4) {
          setTimes((times) => {
            return { ...times, maxReached: true };
          });
        }
        if (distort < 0.4 && isActive && !times.maxReached) {
          setDistort((d) => d + 0.01);
        } else if ((!isActive || times.maxReached) && distort > 0) {
          setDistort((d) => d - 0.005);
        } else if (distort <= 0)
          setTimes((times) => {
            return { ...times, hasStarted: false, isComplete: true };
          });
      }
    }
    if (!times.hasStarted && isActive && !times.isComplete) {
      setTimes({
        hasStarted: true,
        isComplete: false,
        maxReached: false,
      });
    }
    if (!isActive) {
      setTimes((times) => {
        return { hasStarted: false, isComplete: false, maxReached: false };
      });
      if (distort > 0) {
        setDistort((d) => d - 0.005);
      }
    }
  };
  return { updateDistortionState };
};
