import React, { useContext } from "react";
import { LayoutContext } from "./Root";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "assets/svg/logo-third.svg";
import { ReactComponent as Win } from "assets/svg/win.svg";
import { ReactComponent as Swap } from "assets/svg/swap.svg";
import { ReactComponent as Liquidity } from "assets/svg/liquidity.svg";
import { ReactComponent as Staking } from "assets/svg/staking.svg";
import { ReactComponent as Claim } from "assets/svg/claim.svg";

const Sidebar = () => {
  const ctx = useContext(LayoutContext);
  const { navWidth } = ctx;

  console.log();

  return (
    <div
      className="w-[280px] flex flex-col h-full bg-card border-r-[3px] border-r-line"
      style={{ width: navWidth, height: "100%", overflow: "overlay" }}
    >
      <Link to="/app">
        <Logo className="mt-8 w-full" />
      </Link>
      <div className="mt-12 flex flex-col px-4 gap-6">
        <Link to="/app">
          <div
            className={`p-3 hover:bg-card2 flex gap-2 items-center rounded-[8px] cursor-pointer anim group ${
              window.location.pathname === "/app" && "bg-card2"
            }`}
          >
            <Win className="w-6 h-6" />
            <h3 className="font-button text-header group-hover:text-white">
              Dashboard
            </h3>
          </div>
        </Link>
        <Link to="/swap">
          <div
            className={`p-3 hover:bg-card2 flex gap-2 items-center rounded-[8px] cursor-pointer anim group ${
              window.location.pathname === "/swap" && "bg-card2"
            }`}
          >
            <Swap className="w-6 h-6" />
            <h3 className="font-button text-header group-hover:text-white">
              Swap
            </h3>
          </div>
        </Link>
        <Link to="/liquidity">
          <div
            className={`p-3 hover:bg-card2 flex gap-2 items-center rounded-[8px] cursor-pointer anim group ${
              window.location.pathname === "/liquidity" && "bg-card2"
            }`}
          >
            <Liquidity className="w-6 h-6" />
            <h3 className="font-button text-header group-hover:text-white">
              Liquidity
            </h3>
          </div>
        </Link>
        <Link to="staking">
          <div
            className={`p-3 hover:bg-card2 flex gap-2 items-center rounded-[8px] cursor-pointer anim group ${
              window.location.pathname === "/staking" && "bg-card2"
            }`}
          >
            <Staking className="w-6 h-6" />
            <h3 className="font-button text-header group-hover:text-white">
              NFT Staking
            </h3>
          </div>
        </Link>
        <Link to="claim">
          <div
            className={`p-3 hover:bg-card2 flex gap-2 items-center rounded-[8px] cursor-pointer anim group ${
              window.location.pathname === "/claim" && "bg-card2"
            }`}
          >
            <Claim className="w-6 h-6" />
            <h3 className="font-button text-header group-hover:text-white">
              Claim Rewards
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
