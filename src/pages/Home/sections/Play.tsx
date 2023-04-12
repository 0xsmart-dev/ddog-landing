import React, { useEffect, useState } from "react";
import ParticleBack from "components/ParticleBack";
import { mockDescription } from "mock/global";
import Button from "components/Button";

const Play = () => {
  return (
    <div id="games" className="relative w-full m-gap">
      {/* <ParticleBack></ParticleBack> */}
      <div className="m-text-header text-center tracking-[1vw] m-container w-full sm:w-auto">
        Play to Earn
      </div>
      <div className="relative flex justify-start">
        <img
          src="/images/header-light.png"
          draggable="false"
          className=" block scale-y-[-1] rotate-180"
        ></img>
      </div>

      <div className="relative flex flex-row-reverse w-full m-container gap-4 md:gap-8 items-center m-mt">
        <div className="flex flex-col-reverse gap-8 md:flex-row items-center justify-evenly m-mt">
          <div className="basis-1/3 max-w-[400px] relative">
            <video autoPlay muted loop className=" p-[5%] w-full aspect-square">
              <source
                src={require("../../../assets/images/game.mp4")}
                type="video/mp4"
              />
            </video>
            <img
              src="/images/box-video.png"
              draggable="false"
              className="absolute top-0 left-0 w-full h-full"
            ></img>
          </div>
          <div className="m-text-normal basis-2/5">
            {mockDescription.p2e}
            <div className="flex justify-center items-center m-mt">
              <Button className="" text="PLAY NOW"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
