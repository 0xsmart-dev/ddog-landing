import React, { useContext, useState } from "react";
import { LayoutContext } from "./Root";

import { ReactComponent as Ring } from "assets/svg/ring.svg";
import { ReactComponent as Menu } from "assets/svg/menu.svg";
import { ReactComponent as Ledger } from "assets/svg/ledger.svg";

const Header = () => {
  const ctx = useContext(LayoutContext);
  const { navOpen, setNavOpen } = ctx;

  const [account, setAccount] = useState<boolean>(false);

  const toggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="bg-card flex py-[22px] justify-end px-8 items-center gap-6">
      <Menu
        className="w-8 h-8 mr-auto cursor-pointer lg:hidden"
        onClick={toggle}
      />
      <h3 className="cursor-pointer text-header font-input">Play Poker</h3>
      <Ring className="cursor-pointer min-full h-max" />
      {!account ? (
        <div className="flex items-center gap-2 p-3 border-[3px] border-line rounded-lg">
          <Ledger className="w-6 h-6 cursor-pointer" />
          <h5 className="cursor-pointer text-body font-button">erd1...2ef5</h5>
          <h4 className="cursor-pointer text-header font-button">
            4000 $EBONE
          </h4>
        </div>
      ) : (
        <button className="bg-brand hover:opacity-70 cursor-pointer anim rounded-[8px] px-5 h-[54px] flex items-center text-back font-button">
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Header;
