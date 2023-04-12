import React from "react";

import { ReactComponent as Lock } from "assets/svg/lock.svg";
import { ReactComponent as POOL } from "assets/svg/pool.svg";
import { ReactComponent as NFT } from "assets/svg/nft.svg";
import { ReactComponent as Reward } from "assets/svg/reward.svg";
import { ReactComponent as Reward2 } from "assets/svg/reward2.svg";

const Status = () => {
  return (
    <div className="flex flex-col gap-6 sm:px-4 ">
      <div className="bg-no-repeat bg-cover bg-center px-5 py-[30px] rounded-2xl w-full bg-brand relative">
        <h2 className="text-white md:text-back font-subtitle md:w-[316px] relative z-10">
          Play Poker and earn $EBONE as rewards
        </h2>
        <button className="rounded-[88px] bg-header px-[21px] py-3 font-button text-back mt-4 hover:opacity-80 anim">
          Play poker now
        </button>
        <Reward className="absolute top-0 right-0"/>
        <Reward2 className="absolute bottom-0 right-0"/>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:justify-between">
        <div className="flex flex-col pl-4 pr-[75px] w-[334px] md:w-[220px] py-6 bg-card border-line border-[3px] rounded-[12px]">
          <Lock className="w-6 h-6" />
          <div className="flex flex-col gap-1 mt-4">
            <h4 className="text-body font-capital">Total Value Locked</h4>
            <h4 className="text-header font-input">$650,750,000</h4>
          </div>
        </div>
        <div className="flex flex-col pl-4 pr-[75px] w-[334px] md:w-[220px] py-6 bg-card border-line border-[3px] rounded-[12px]">
          <POOL className="w-6 h-6" />
          <div className="flex flex-col gap-1 mt-4">
            <h4 className="text-body font-capital">Pool Revenue </h4>
            <h4 className="text-header font-input">$100,000,000</h4>
          </div>
        </div>
        <div className="flex flex-col pl-4 pr-[75px] w-[334px] md:w-[220px] py-6 bg-card border-line border-[3px] rounded-[12px]">
          <NFT className="w-6 h-6" />
          <div className="flex flex-col gap-1 mt-4">
            <h4 className="text-body font-capital">Paid Out</h4>
            <h4 className="text-header font-input">$700,000</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
