import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
const isProd = import.meta.env.PROD;

if (isProd) {
  ReactGA.initialize("G-7QF6FPEPDN");
} else {
  console.log("tracking disabled outside prod");
}

export const trackPageView = (path: string) => {
  if (isProd) ReactGA.send({ hitType: "pageview", page: path });
};

export const PageViewTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};
