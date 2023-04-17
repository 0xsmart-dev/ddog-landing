import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mockp2e } from "mock/global";

const PlayCarousel = () => {
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
      {mockp2e.map((item, id) => {
        return (
          <div className="m-mt relative cursor-pointer " key={`p2e-${id}`}>
            <img
              className="w-full"
              src={item.link}
              alt="Play Box"
              draggable="false"
            ></img>
            <div className="m-box top-0 left-[50%] -translate-x-[50%] w-full absolute">
              <div className="m-text-small uppercase sm:hidden">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default PlayCarousel;
