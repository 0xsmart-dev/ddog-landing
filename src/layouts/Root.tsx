import React, { useState, useEffect } from "react";

import Media from "react-media";

const BootrapBreakpoints = {
  xs: 576,
  sm: 768,
  md: 1080,
  lg: 1440,
};

interface LayoutState {
  navAnimate: boolean;
  navBreakpoint: "xs" | "sm" | "md" | "lg";
  navOpen: boolean;
  navDocked: boolean;
  navWidth: number;

  setNavOpen: (open: boolean) => void;
  setNavDocked: (docked: boolean) => void;
}
export const LayoutContext = React.createContext<LayoutState>({
  navAnimate: false,
  navBreakpoint: "md",
  navOpen: false,
  navDocked: true,
  navWidth: 280,
  setNavOpen: () => {},
  setNavDocked: () => {},
});

interface RootProps {
  children?: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children }) => {
  const navBreakpoint = "md";

  const startingWidth = window.innerWidth;
  const navStartsOpen = startingWidth > BootrapBreakpoints[navBreakpoint];

  const [navAnimate, setNavAnimate] = useState(false);
  const [navOpen, setNavOpen] = useState(navStartsOpen);
  const [navDocked, setNavDocked] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNavAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Genereate desired Layout state here.
  const layout: LayoutState = {
    navAnimate: navAnimate,
    navBreakpoint: "md",
    navOpen,
    navDocked,
    navWidth: 280,
    setNavOpen,
    setNavDocked,
  };

  return (
    <LayoutContext.Provider value={layout}>
      <Media
        query={{ minWidth: BootrapBreakpoints.md }}
        onChange={(isLarge) => {
          setNavDocked(isLarge);
          setNavOpen(isLarge);
        }}
      />
      <div>{children}</div>
    </LayoutContext.Provider>
  );
};

export default Root;
