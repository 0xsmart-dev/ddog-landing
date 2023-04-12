import MainLayout from "layouts/MainLayout";
import React from "react";
import AddToken from "./sections/AddToken";
import LiquidityDetail from "./sections/LiquidityDetail";

const Liquidity = () => {
  return (
    <MainLayout title="swap">
      <div className="px-auto py-8 flex flex-col gap-8 items-center xl:items-start">
        <div className="flex flex-col gap-2 px-3">
          <h4 className="text-header font-header">$EBONE - $EGLD Liquidity</h4>
          <h5 className="text-main font-capital">
            Add liquidity to our pool to receive LP tokens as rewards
          </h5>
        </div>
        <div className="flex gap-8 flex-wrap justify-center px-5 md:px-0">
          <AddToken />
          <LiquidityDetail />
        </div>
      </div>
    </MainLayout>
  );
};

export default Liquidity;
