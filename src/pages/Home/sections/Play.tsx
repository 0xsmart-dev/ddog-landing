import PlayCarousel from "components/PlayCarousel";
import { mockDescription } from "mock/global";

const Play = () => {
  return (
    <div id="games" className="relative w-full m-gap">
      <div className="m-text-header text-center tracking-[1vw] m-container w-full sm:w-auto">
        Play and Earn
      </div>
      <div className="relative flex justify-end">
        <img
          src="/images/header-light.png"
          draggable="false"
          className=" block scale-y-[1] rotate-360"
          alt="Network"
        ></img>
      </div>
      <div className="relative w-full m-container text-center">
        <div className="m-mt m-text-normal w-full mx-auto max-w-[1000px]">
          {mockDescription.p2e}
        </div>
        <div className="m-mt max-w-[1600px] mx-auto m-text-normal relative">
          <PlayCarousel />
        </div>
      </div>
    </div>
  );
};

export default Play;
