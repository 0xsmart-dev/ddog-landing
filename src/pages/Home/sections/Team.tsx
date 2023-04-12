import { mockDescription, mockTeamMain, mockTeamArt } from "mock/global";
const Team = () => {
  return (
    <div id="team" className="relative w-full m-gap">
      <div className="m-text-header text-center tracking-[1vw] m-container w-full sm:w-auto">
        Meet the team
      </div>
      <div className="flex justify-start">
        <img
          src="/images/header-light.png"
          draggable="false"
          className=" block scale-y-[-1] rotate-180"
        ></img>
      </div>
      <div className="relative w-full m-container md:text-center">
        <div className="m-mt m-text-normal w-full mx-auto max-w-[1000px]">
          {mockDescription.team}
        </div>
        <div className=" flex justify-evenly text-lg gap-4 flex-wrap">
          {mockTeamMain.map((item: any, id: number) => {
            return (
              <div className=" m-mt relative max-w-[400px] " key={`news-${id}`}>
                <img
                  src={item.imgUrl}
                  draggable="false"
                  className="relative w-full px-[16%]"
                ></img>
                <div className="aspect-[5/2] relative -mt-[3%]">
                  <img
                    src="/images/box-team.png"
                    draggable="false"
                    className="absolute top-0 left-0 w-full h-full"
                  ></img>
                  <div className="m-box relative">
                    <div className=" text-lg m-font text-center ">
                      {item.name}
                    </div>
                    <div className="mt-[3%] text-base text-center">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" flex justify-evenly text-lg gap-4 flex-wrap">
          {mockTeamArt.map((item: any, id: number) => {
            return (
              <div className=" m-mt relative max-w-[400px] " key={`news-${id}`}>
                <img
                  src={item.imgUrl}
                  draggable="false"
                  className="relative w-full px-[16%]"
                ></img>
                <div className="aspect-[5/2] relative -mt-[3%]">
                  <img
                    src="/images/box-team.png"
                    draggable="false"
                    className="absolute top-0 left-0 w-full h-full"
                  ></img>
                  <div className="m-box relative">
                    <div className=" text-lg m-font text-center ">
                      {item.name}
                    </div>
                    <div className="mt-[3%] text-base text-center">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
