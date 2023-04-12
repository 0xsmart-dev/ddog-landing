import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { mockStaking } from "mock/global";

export default function StakingShow(props) {
  const ref = React.useRef();
  const [centerSlideDataIndex, setCenterSlideDataIndex] = React.useState(0);
  const onCenterSlideDataIndexChange = (newIndex) => {
    setCenterSlideDataIndex(newIndex);
  };
  return (
    <div className="real w-full ">
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 5;
          if (parentWidth <= 768) currentVisibleSlide = 3;
          if (parentWidth <= 350) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={240}
              carouselWidth={parentWidth}
              data={mockStaking}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={5}
              useGrabCursor
              onActiveSlideChange={onCenterSlideDataIndexChange}
            />
          );
        }}
      />

      {/* <Pagination centerSlideDataIndex={centerSlideDataIndex} /> */}
    </div>
  );
}
function Pagination(props) {
  return (
    <div className="mt-5 flex justify-center gap-3 md:mt-8">
      {mockStaking.map((_, index) => {
        const isCenterSlide = props.centerSlideDataIndex === index;
        return (
          <div
            key={"pageCar" + index}
            className={` h-2.5 w-2.5 rounded-full ${
              isCenterSlide
                ? "bg-cyan-400 shadow-[0_0_8px_1px_#0a80ee85]"
                : "bg-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
}
export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const item = data[dataIndex];
  return (
    <div className="w-full aspect-[3.2/5] select-none relative px-[16%] py-[18%]">
      <img
        src="/images/box-staking.png"
        className="absolute top-0 left-0 w-full h-full"
        draggable="false"
      />
      <div className="relative">
        <div>
          <img src={item.link} draggable="false" className=" rounded-lg" />
        </div>
        <div>DDOg NFT #{item.id}</div>
        <div>Reward: {item.reward}</div>
      </div>
    </div>
  );
});
