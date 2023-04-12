import MainLayout from "layouts/MainLayout";
import React from "react";
import SwapDetail from "./sections/SwapDetail";
import TokenSwap from "./sections/TokenSwap";

const Swap = () => {
  return (
    <MainLayout title="swap">
      <div className="px-auto py-8 flex flex-col gap-8 items-center xl:items-start">
        <div className="flex flex-col gap-2">
          <h4 className="text-header font-header">Swap $EBONE</h4>
          <h5 className="text-main font-capital">
            Swap $EBONE for $EGLD or vice-versa
          </h5>
        </div>
        <div className="flex gap-8 flex-wrap justify-center px-5 md:px-0">
          <TokenSwap />
          <SwapDetail />
        </div>
      </div>
    </MainLayout>
  );
};

export default Swap;
