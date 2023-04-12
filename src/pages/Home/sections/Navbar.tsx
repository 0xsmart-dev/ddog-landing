import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "assets/svg/logo-third.svg";
import { ReactComponent as Menu } from "assets/svg/menu.svg";
import { ReactComponent as Cross } from "assets/svg/cross.svg";
import { ReactComponent as Twitter } from "assets/svg/twitter.svg";
import { ReactComponent as Discord } from "assets/svg/discord.svg";
import { mockNavbar } from "mock/global";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex justify-between items-center pt-4 pb-3 w-full fixed top-0 left-0 z-[999] m-container nav-blur">
        <Link to="/app">
          <Logo className="w-[200px] h-full cursor-pointer" />
        </Link>
        <div className="hidden md:flex md:gap-4 lg:gap-6 xl:gap-12 items-center">
          {mockNavbar.map((item: any, id: number) => {
            return (
              <a key={`nav-web-${id}`} href={item.link}>
                <h4 className="cursor-pointer font-button text-header hover:text-brand anim">
                  {item.text}
                </h4>
              </a>
            );
          })}
        </div>
        <div className="justify-end hidden md:flex gap-6">
          <Twitter className="w-6 h-6 cursor-pointer social-svg" />
          <Discord className="w-6 h-6 cursor-pointer social-svg" />
        </div>
        <Menu className="w-6 h-6 cursor-pointer md:hidden" onClick={toggle} />
      </div>
      {open && (
        <div className="fixed top-0 left-0 z-[1000] flex flex-col items-center justify-center w-full h-full gap-4 nav-blur">
          <Cross
            className="absolute w-12 h-12 cursor-pointer top-4 right-4 hover:rotate-180 anim"
            onClick={toggle}
          />
          {mockNavbar.map((item: any, id: number) => {
            return (
              <a
                key={`nav-mobile-${id}`}
                href={item.link}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <h2 className="text-center cursor-pointer text-header hover:text-[#3d4a66] ">
                  {item.text}
                </h2>
              </a>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
