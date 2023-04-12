import React, { useState, useEffect } from "react";
import ParticleBack from "components/ParticleBack";
import { mockDescription, mockNews } from "mock/global";
import Button from "components/Button";
import StakingShow from "components/StakingShow";

const News = () => {
  return (
    <div id="news" className="relative w-full m-gap">
      <div className="m-text-header text-left tracking-[1vw] m-container w-full sm:w-auto">
        News and Updates
      </div>
      <div className="flex justify-start">
        <img
          src="/images/header-light.png"
          draggable="false"
          className=" block rotate-180 scale-y-[-1]"
        ></img>
      </div>
      <div className="relative w-full m-container md:text-center">
        <div className="m-mt m-text-normal w-full mx-auto max-w-[1000px]">
          {mockDescription.news}
        </div>
        <div className=" flex justify-evenly m-text-normal gap-2 flex-wrap">
          {mockNews.map((item: any, id: number) => {
            return (
              <div
                className=" m-mt relative w-[400px]  aspect-[7/5.5] cursor-pointer"
                key={`news-${id}`}
              >
                <img
                  src="/images/box-news.png"
                  draggable="false"
                  className="absolute top-0 left-0 w-full h-full"
                ></img>
                <div className="m-box relative">
                  <div className=" m-text-big m-font text-center ">
                    {item.title}
                  </div>
                  <div className="mt-[7%] m-text-small text-left">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="m-mt">
          <div className="flex justify-center items-center m-mt">
            <Button className="" text="READ MORE"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
