import React, { useContext } from "react";

import Sidebar from "react-sidebar";

import { LayoutContext } from "./Root";
import Nav from "./Sidebar";

interface NavWrapperProps {
  children?: React.ReactNode;
}

const SideWrapper: React.FC<NavWrapperProps> = ({ children }) => {
  const ctx = useContext(LayoutContext);

  const { navOpen, setNavOpen, navDocked, navAnimate } = ctx;

  return (
    // @ts-ignore
    <Sidebar
      sidebar={<Nav />}
      open={navOpen}
      docked={navDocked && navOpen}
      onSetOpen={setNavOpen}
      styles={{ sidebar: { background: "white" } }}
      shadow={false}
      transitions={navAnimate}
    >
      {children}
    </Sidebar>
  );
};

export default SideWrapper;
