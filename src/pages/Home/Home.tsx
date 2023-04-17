import About from "./sections/About";
import Footer from "./sections/Footer";
import Main from "./sections/Main";
import Navbar from "./sections/Navbar";
import Play from "./sections/Play";
import Questions from "./sections/Questions";
import Staking from "./sections/Staking";
import Roadmap from "./sections/Roadmap";
import Team from "./sections/Team";
import Mint from "./sections/Mint";
import News from "./sections/News";

import { ReactComponent as DogFoot } from "assets/svg/dog-foot.svg";
import { ReactComponent as Loader } from "assets/svg/loader-round.svg";
import { useEffect, useState } from "react";
import ParticleBack from "components/ParticleBack";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="relative w-full bg-back text-white scroll-smooth">
      <ParticleBack />
      <Navbar />
      <Main />
      <About />
      {/* <Mint />
      <Staking /> */}
      <Play />
      <Roadmap />
      <News />
      <Questions />
      <Team />
      <Footer />

      {loading && (
        <div className="fixed z-[1000] flex items-center justify-center w-full top-0 left-0 h-screen backdrop-blur-md">
          <div className="flex flex-col items-center">
            <DogFoot className="w-[72px] h-[78px]" />
            <Loader className="w-[72px] h-[78px] absolute load-circle" />
            <div className="mt-[30px] w-[270px] h-3 bg-line rounded-[4px] overflow-hidden">
              <div className="h-full bg-brand load-line" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
