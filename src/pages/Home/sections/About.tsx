// import ParticleBack from "components/ParticleBack";
import { mockDescription, mockabout1, mockabout2 } from "mock/global";
import Button from "components/Button";
const About = () => {
  return (
    <div id="about" className="relative w-full m-gap">
      {/* <ParticleBack></ParticleBack> */}
      <div>
        <div className="m-text-header text-left tracking-[1vw] m-container w-full sm:text-center uppercase ">
          About
        </div>
        <div>
          <img
            src="/images/header-light.png"
            draggable="false"
            className=" block rotate-180 xl:w-[450px] lg:w-[350px] md:w-[250px] sm:w-[350px]"
            alt="light"
          ></img>
        </div>
      </div>

      <div className="m-container">
        <div className="flex flex-col-reverse  md:flex-row  justify-between  md:gap-[10%]">
          <div className="basis-2/5">
            <div className="m-text-normal text-left m-mt">
              {mockDescription.about}
            </div>
            <div className="flex sm:justify-center mt-10 md:mt-20">
              <Button className="" text="STAKE NOW"></Button>
            </div>
          </div>

          <div className="basis-1/3 max-w-[400px] relative md:-mt-48 mt-0 w-full m-auto">
            <img
              src="/images/NFT.png"
              draggable="false"
              className="w-[100%] h-[100%]"
              alt="box"
            ></img>
          </div>
        </div>
        <div className="font-[Conthrax] m-text-large uppercase m-container text-center font-black tracking-normal m-mt">
          stake your ddog nft
          <div className="relative">for rewards and airdrops</div>
        </div>
        <div className=" max-w-[1300px] mx-auto">
          <div className="flex justify-between md:gap-4 items-center md:flex-row flex-col ">
            {mockabout1.map((item: any, id: number) => {
              return (
                <div
                  className="m-mt relative border-brand border-2 rounded-xl p-10 md:basis-1/4 w-full md:w-auto flex flex-row md:flex-col justify-start items-center gap-4"
                  key={`news-${id}`}
                >
                  <img
                    src={item.imgUrl}
                    draggable="false"
                    className="relative aspect-square w-20 m-0 md:mx-auto"
                    alt="icon"
                  />
                  <div>
                    <div className="text-center m-text-small">{item.name}</div>
                    <div className="text-center m-text-big font-bold">
                      {item.amount}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 relative border-brand border-2 rounded-xl p-10 flex justify-start items-center gap-4 flex-row">
            <img
              src={mockabout2.imgUrl}
              draggable="false"
              className="relative aspect-square w-20"
              alt="icon"
            />
            <div>
              <div className="text-center m-text-small">{mockabout2.name}</div>
              <div className="text-center m-text-big font-bold">
                {mockabout2.amount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
