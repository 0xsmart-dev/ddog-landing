import React from "react";
import ParticleBack from "components/ParticleBack";
import { mockDescription } from "mock/global";
import Button from "components/Button";

const Mint = () => {
  return (
    <div id="mint" className="relative w-full m-gap">
      {/* <ParticleBack></ParticleBack> */}
      <div className="m-text-header text-center tracking-[1vw] m-container w-full sm:w-auto">
        NFT Mint
      </div>
      <div className="flex justify-end">
        <img
          src="/images/header-light.png"
          draggable="false"
          className=" block"
        ></img>
      </div>
      <div className="relative w-full m-container md:text-center ">
        <div className="m-mt m-text-normal w-full mx-auto max-w-[1000px]">
          {mockDescription.mint}
        </div>
        <div className="m-mt">
          <div className="w-full max-w-[800px] mx-auto">
            <video autoPlay muted loop>
              <source
                src={require("../../../assets/images/blind_box.mp4")}
                type="video/mp4"
              />
            </video>
            <img src="/images/table-circle.png"></img>
          </div>
          <div className="flex justify-center items-center m-mt">
            <Button className="" text="MINT NOW"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
