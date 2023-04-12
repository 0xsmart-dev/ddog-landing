import ParticleBack from "components/ParticleBack";
import { mockDescription, mockRewards } from "mock/global";
import Button from "components/Button";

const About = () => {
  return (
    <div id="about" className="relative w-full m-gap">
      {/* <ParticleBack></ParticleBack> */}
      <div className="m-text-header text-left tracking-[1vw] m-container w-full sm:w-auto">
        About
      </div>
      <div>
        <img
          src="/images/header-light.png"
          draggable="false"
          className=" block rotate-180"
        ></img>
      </div>
      <div className="relative w-full m-container">
        <div className="flex flex-col-reverse gap-8 md:flex-row items-center justify-evenly m-mt">
          <div className="basis-1/3 max-w-[400px] relative">
            <img
              src="/images/banner-nft.gif"
              className="p-[5%] aspect-square"
            ></img>
            <img
              src="/images/box-video.png"
              draggable="false"
              className="absolute top-0 left-0 w-full h-full"
            ></img>
          </div>
          <div className="m-text-normal basis-2/5">
            <span className="text-brand m-font">DDog XClub</span>{" "}
            {mockDescription.about}
          </div>
        </div>

        <div className="m-mt flex justify-evenly m-text-normal gap-2 flex-wrap">
          {mockRewards.map((item: any, id: number) => {
            return (
              <div
                className=" m-mt relative w-[400px]  aspect-[5/3]"
                key={`reward-${id}`}
              >
                <img
                  src="/images/box-reward.png"
                  draggable="false"
                  className="absolute top-0 left-0 w-full h-full"
                ></img>
                <div className="m-box relative">
                  <div className=" m-text-big m-font">{item.title}</div>
                  <div className="mt-2 m-text-small">{item.content}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center m-mt">
          <Button className="" text="WHITEPAPER"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
