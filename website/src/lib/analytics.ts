import ReactGA from "react-ga4";

export const GA_MEASUREMENT_ID = "G-XY1DNYBB68";

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
