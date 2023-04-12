import React, { useEffect, useState } from "react";
import AnimationTop from "components/animations/AnimationTop";
import ParticleBack from "components/ParticleBack";
import { mockDescription } from "mock/global";

const Home = () => {
  const [wave, setWave] = useState([]);

  useEffect(() => {
    const timerWave = setInterval(() => {
      const waves = [];
      for (let i = 0; i < 20; i++) {
        waves.push(Math.random() * 30 + 1);
      }
      setWave(waves as []);
    }, 500);

    return () => clearInterval(timerWave);
  }, [wave]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center">
      {/* <img
        src="/images/particle.png"
        className="absolute top-0 left-0 object-cover w-full h-full"
        alt="back-particle"
      /> */}
      {/* <ParticleBack /> */}
      <div className="relative m-container mt-36 md:mt-20 lg:mt-28 flex flex-col justify-evenly gap-8 md:gap-16 md:flex-row">
        <div className="">
          <div className="relative">
            <h1 className="font-[Ethnocentric] uppercase font-normal text-white  italic text-4xl md:text-[5vw] xl:text-[80px] leading-tight absolute top-0 left-2 opacity-10">
              <div>downswing</div>
              <div>
                dogS <span className="text-brand">X</span>CLub
              </div>
            </h1>

            <h1 className="font-[Ethnocentric] uppercase font-normal text-white  italic text-4xl md:text-[5vw] xl:text-[80px] leading-tight">
              <div>downswing</div>
              <div>
                dogS <span className="text-brand">X</span>CLub
              </div>
            </h1>
          </div>

          <p className="mt-8 uppercase font-[Cera Pro] font-semibold text-white w-full m-text-big max-w-[800px]">
            A Web3 Gaming Hub built by the community
          </p>
          <div className="flex gap-1 items-end  min-h-[31px] mt-6">
            {wave.map((item: any, id: number) => {
              return (
                <div
                  key={id}
                  className="w-1.5 bg-brand"
                  style={{ height: item + "px" }}
                ></div>
              );
            })}
          </div>
          <p className="mt-8  font-[Cera Pro] text-white w-full max-w-[800px] m-text-normal">
            {mockDescription.main}
          </p>
        </div>
        <div className="basis-1/3 flex-none max-w-[500px] mx-auto relative">
          <img
            src="/images/banner-join.jpg"
            className="w-full p-[5%] aspect-square"
          ></img>
          <img
            src="/images/box-video.png"
            draggable="false"
            className="absolute top-0 left-0 w-full h-full"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
