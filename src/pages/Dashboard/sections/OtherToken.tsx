import React from "react";

import { ReactComponent as Cat } from "assets/svg/cat-foot.svg";
import { ReactComponent as CoinHall } from "assets/svg/coinhall.svg";

const OtherToken = () => {
  return (
    <div className="p-6 flex flex-col gap-4 h-min bg-card border-[3px] border-line rounded-[8px] w-[340px] md:w-[725px] xl:w-[373px]">
      <div className="flex gap-2 items-center">
        <Cat className="w-12 h-12" />
        <h4 className="text-header font-input">$EBONE Token</h4>
      </div>
      <hr className="h-[3px] bg-line w-full" />
      <div className="flex flex-col gap-1">
        <h5 className="text-body font-capital">Market Cap</h5>
        <h4 className="text-header font-input">$235,600,565.55</h4>
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-body font-capital">Token Price</h5>
        <h4 className="text-header font-input">$0.055</h4>
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-body font-capital">Circulating Supply</h5>
        <h4 className="text-header font-input">128,000,455.00 $EBONE</h4>
      </div>
      <button className="flex gap-2 items-center border-[1px] border-brand rounded-[8px] justify-center py-[14px]">
        <CoinHall className="w-6 h-6" />
        <h4 className="text-brand font-button whitespace-nowrap">
          View on Coinhall
        </h4>
      </button>
    </div>
  );
};

export default OtherToken;
