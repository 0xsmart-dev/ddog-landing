import React from "react";

import { ReactComponent as EGLD } from "assets/svg/egld.svg";
import { ReactComponent as INFO } from "assets/svg/info.svg";

const SwapDetail = () => {
  return (
    <div className="bf-card border-[3px] border-line p-6 h-min w-[327px] md:w-[703px] xl:w-[373px] rounded-lg">
      <div className="flex gap-4 items-center">
        <EGLD className="w-12 h-12" />
        <div className="flex flex-col gap-[2px]">
          <h5 className="text-body font-capital">1 EGLD</h5>
          <h4 className="text-main font-button">0.0002 EBONE</h4>
        </div>
      </div>
      <hr className="bg-line h-[3px] my-4" />

      <h3 className="text-header font-input">Swap Details</h3>

      <div className="mt-4 flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex items-center gap-[5.5px]">
            <h5 className="text-body font-capital">Slippage Tolerance </h5>
            <INFO className="w-4 h-4" />
          </div>
          <h4 className="text-header font-capital">0.5%</h4>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-[5.5px]">
            <h5 className="text-body font-capital">Minimum received </h5>
            <INFO className="w-4 h-4" />
          </div>
          <h4 className="text-header font-capital">42 BONE</h4>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-[5.5px]">
            <h5 className="text-body font-capital">Price impact</h5>
            <INFO className="w-4 h-4" />
          </div>
          <h4 className="text-[#14B825] font-capital">{"<0.2%"}</h4>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-[5.5px]">
            <h5 className="text-body font-capital">Swapping Through </h5>
            <INFO className="w-4 h-4" />
          </div>
          <h4 className="text-header font-capital">{"EGLD > BONE"}</h4>
        </div>
      </div>
    </div>
  );
};

export default SwapDetail;
