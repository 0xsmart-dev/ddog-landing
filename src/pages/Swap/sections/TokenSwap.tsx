import React from "react";

import { ReactComponent as EGLD } from "assets/svg/egld.svg";
import { ReactComponent as SWAP } from "assets/svg/both-arrow.svg";
import { ReactComponent as EBONE } from "assets/svg/cat-foot.svg";

const TokenSwap = () => {
  return (
    <div className="bg-card border-[3px] border-line p-8 flex flex-col rounded-lg">
      <div className="border-[3px] border-line p-6 flex flex-col rounded-lg">
        <div className="flex gap-1 items-center">
          <EGLD className="w-6 h-6" />
          <h5 className="text-header font-button">EGLD</h5>
        </div>
        <div className="mt-2 flex py-[18px] px-3 gap-2 md:w-[579px] bg-card2 rounded-lg">
          <input
            className="w-full bg-card2 text-body font-input"
            placeholder="Amount to swap"
          />
          <button className="bg-[#E8973E1A] px-[11px] py-1 text-brand font-label hover:opacity-80 anim">
            MAX
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-[2px]">
          <h5 className="text-body font-capital">Balance</h5>
          <h4 className="text-main font-button">0.0002 EGLD</h4>
        </div>
      </div>

      <SWAP className="w-12 h-12 mx-auto my-4 hover:rotate-180 anim cursor-pointer" />

      <div className="border-[3px] border-line p-6 flex flex-col rounded-lg">
        <div className="flex gap-1 items-center">
          <EBONE className="w-6 h-6" />
          <h5 className="text-header font-button">EBONE</h5>
        </div>
        <div className="mt-2 flex py-[18px] px-3 gap-2 md:w-[579px] bg-card2 rounded-lg">
          <input
            className="w-full bg-card2 text-body font-input"
            placeholder="Amount to receive"
          />
          <button className="bg-[#E8973E1A] px-[11px] py-1 text-brand font-label hover:opacity-80 anim">
            MAX
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-[2px]">
          <h5 className="text-body font-capital">Balance</h5>
          <h4 className="text-main font-button">0.0002 EBONE</h4>
        </div>
      </div>

      <button className="bg-brand rounded-lg py-[14px] md:px-[255px] text-back font-button mt-8 hover:opacity-80 anim">
        Connect Wallet
      </button>
    </div>
  );
};

export default TokenSwap;
