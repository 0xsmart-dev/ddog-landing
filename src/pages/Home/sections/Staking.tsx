import React, { useState, useEffect } from "react";
import ParticleBack from "components/ParticleBack";
import { mockDescription } from "mock/global";
import Button from "components/Button";
import StakingShow from "components/StakingShow";

const Staking = () => {
  const [stakingTime, setStakingTime] = useState(0);
  useEffect(() => {
    setStakingTime(3289342);
    return () => {};
  }, []);

  useEffect(() => {
    const timerClock = setInterval(() => {
      setStakingTime(stakingTime - 1);
    }, 1000);
    return () => clearInterval(timerClock);
  }, [stakingTime]);

  return (
    <div id="staking" className="relative w-full m-gap">
      {/* <ParticleBack></ParticleBack> */}
      <div className="m-text-header text-right tracking-[1vw] m-container w-full sm:w-auto">
        Staking
      </div>
      <div className="flex justify-end">
        <img
          src="/images/header-light.png"
          draggable="false"
          className=" block scale-y-[-1]"
        ></img>
      </div>
      <div className="relative w-full m-container md:text-center">
        <div className="m-mt m-text-normal w-full mx-auto max-w-[1000px]">
          {mockDescription.staking}
        </div>
        <div className="m-mt">
          <StakingShow />
        </div>
        <div className="m-mt text-center m-font m-text-large">Next Winner</div>
        <div className="m-mt text-center flex gap-2 md:gap-4 justify-center items-start">
          <div className="w-1/4 max-w-[100px]">
            <div className="relative w-full text-[10vw] md:text-[50px] aspect-[1/0.85]  m-font-seg">
              <img
                src="/images/box-clock.png"
                draggable="false"
                className="absolute top-0 left-0 w-full h-full"
              />
              <div className="absolute top-0 left-0 w-full h-full py-[35%] text-[#293638]">
                88
              </div>
              <div className="absolute top-0 left-0 w-full h-full py-[35%] text-brand">
                {Math.floor(stakingTime / 24 / 3600) % 100 < 10
                  ? "0" + (Math.floor(stakingTime / 24 / 3600) % 100)
                  : Math.floor(stakingTime / 24 / 3600) % 100}
              </div>
            </div>
            <div className="mt-2">Days</div>
          </div>
          <div className="w-1/4 max-w-[100px]">
            <div className="relative w-full text-[10vw] md:text-[50px] aspect-[1/0.85]  m-font-seg">
              <img
                src="/images/box-clock.png"
                draggable="false"
                className="absolute top-0 left-0 w-full h-full"
              />
              <div className="absolute top-0 left-0 w-full h-full py-[35%] text-[#293638]">
                88
              </div>
              <div className="absolute top-0 left-0 w-full h-full py-[35%] text-brand">
                {Math.floor((stakingTime % (24 * 3600)) / 3600) < 10
                  ? "0" + Math.floor((stakingTime % (24 * 3600)) / 3600)
                  : Math.floor((stakingTime % (24 * 3600)) / 3600)}
              </div>
            </div>
            <div className="mt-2">Hours</div>
          </div>
          <div className="w-1/4 max-w-[100px]">
            <div className="relative w-full text-[10vw] md:text-[50px] aspect-[1/0.85]  m-font-seg">
              <img
                src="/images/box-clock.png"
                draggable="false"
                className="absolute top-0 left-0 w-full h-full"
              />
              <div className="absolute top-0 left-0 w-full h-full py-[35%] text-[#293638]">
                88
              </div>
              <div className="absolute top-0 left-0 w-full h-full py-[35%] text-brand">
                {Math.floor((stakingTime % 3600) / 60) < 10
                  ? "0" + Math.floor((stakingTime % 3600) / 60)
                  : Math.floor((stakingTime % 3600) / 60)}
              </div>
            </div>
            <div className="mt-2">Minutes</div>
          </div>
          <div className="w-1/4 max-w-[100px]">
            <div className="relative w-full text-[10vw] md:text-[50px] aspect-[1/0.85]  m-font-seg">
              <img
                src="/images/box-clock.png"
                draggable="false"
                className="absolute top-0 left-0 w-full h-full"
              />
              <div className="absolute top-0 left-0 w-full h-full py-[35%] text-[#293638]">
                88
              </div>
              <div className="absolute top-0 left-0 w-full h-full py-[35%] text-brand">
                {Math.floor(stakingTime % 60) < 10
                  ? "0" + Math.floor(stakingTime % 60)
                  : Math.floor(stakingTime % 60)}
              </div>
            </div>
            <div className="mt-2">Seconds</div>
          </div>
        </div>

        <div className="m-mt">
          <div className="flex justify-center items-center m-mt">
            <Button className="" text="STAKING NOW"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
