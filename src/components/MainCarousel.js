import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mockMain } from "mock/global";
import Button from "components/Button";

const MainCarousel = () => {
  const [wave, setWave] = useState([]);

  useEffect(() => {
    const timerWave = setInterval(() => {
      const waves = [];
      for (let i = 0; i < 20; i++) {
        waves.push(Math.random() * 30 + 1);
      }
      setWave(waves);
    }, 500);

    return () => clearInterval(timerWave);
  }, [wave]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: function (i) {
      return (
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "gray",
          }}
        />
      );
    },
  };

  return (
    <Slider {...settings}>
      {mockMain.map((item, id) => {
        return (
          <div className="relative" key={"Mcarousel" + id}>
            <div className="relative m-container sm:mt-52 md:mt-60 lg:mt-72 flex flex-col-reverse justify-evenly md:flex-row ">
              <div className="z-30">
                <div className="relative -mt-20">
                  <h1 className="font-[Conthrax] uppercase font-normal text-white  italic text-4xl md:text-[5vw] xl:text-[80px] leading-tight absolute top-0 left-2 opacity-10">
                    <div>{item.header1}</div>
                    <div>{item.header2}</div>
                  </h1>
                  <h1 className="font-[Conthrax] uppercase font-normal text-white  italic text-4xl md:text-[5vw] xl:text-[80px] leading-tight">
                    <div>{item.header1}</div>
                    <div>{item.header2}</div>
                  </h1>
                </div>
                <p className="mt-8 uppercase font-[Inter Regular] font-semibold text-white w-full m-text-big max-w-[800px]">
                  {item.content1}
                </p>
                <div className="flex gap-1 items-end  min-h-[31px] mt-6">
                  {wave.map((item, id) => {
                    return (
                      <div
                        key={id}
                        className="w-1.5 bg-chart"
                        style={{ height: item + "px" }}
                      ></div>
                    );
                  })}
                </div>
                <p className="mt-8  font-[Cera Pro] text-white w-full max-w-[800px] m-text-normal">
                  {item.content2}
                </p>
              </div>
              <div className="basis-2/3 overflow-hidden flex-none max-w-[500px] -mt-28 mx-auto relative">
                <img
                  src={item.imgUrl}
                  className="w-full z-20"
                  alt="Cards"
                ></img>
              </div>
            </div>
            <div className="flex justify-center items-center m-mt pb-5">
              <Button className="" text={item.button}></Button>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default MainCarousel;
