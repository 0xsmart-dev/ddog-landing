import MainLayout from "layouts/MainLayout";
import React from "react";
import NftShow from "./sections/NftShow";
import OtherToken from "./sections/OtherToken";
import Status from "./sections/Status";

const Dashboard = () => {
  return (
    <MainLayout title="dashboard">
      <div className="flex px-auto flex-wrap gap-8 py-8 justify-center">
        <div className="flex flex-col gap-6">
          <Status />
          <NftShow />
        </div>
        <OtherToken />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
