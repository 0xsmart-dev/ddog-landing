import React from "react";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { ReactComponent as Twitter } from "assets/svg/twitter.svg";
import { ReactComponent as Discord } from "assets/svg/discord.svg";
import { ReactComponent as DogLab } from "assets/svg/logo-sm-white.svg";
function Footer() {
  return (
    <div>
      <div className="relative w-full pb-8 flex flex-col items-center justify-center m-text-small">
        {/* <ParticleBack></ParticleBack> */}
        <Logo className="max-w-[300px] w-full h-full cursor-pointer" />
        <div className="m-text-big m-mt uppercase">Partners</div>
        <div className="flex gap-8 m-mt items-baseline">
          <div className="m-center cursor-pointer">
            <img className="w-20 mx-auto" src="/images/XCS.png" alt="XCS" />
            <div className="text-center uppercase mt-4">XCS holdings</div>
          </div>
          <div className="m-center cursor-pointer">
            <img className="w-10 mx-auto" src="/images/ZP.png" alt="ZP" />
            <div className="text-center uppercase mt-4">zen pool</div>
          </div>
          <div className="m-center cursor-pointer">
            <DogLab className="w-11 mx-auto" />
            <div className="text-center uppercase mt-4">Ddog labs</div>
          </div>
        </div>
        <div className="flex gap-8 m-mt">
          <div className="relative social-btn">
            <i className="social-icon-circle"></i>
            <Twitter className="w-8 h-8 cursor-pointer social-svg" />
          </div>
          <div className="relative social-btn">
            <i className="social-icon-circle"></i>
            <Discord className="w-8 h-8 cursor-pointer social-svg" />
          </div>
        </div>
        <div className="m-mt flex items-center">
          MADE WITH{" "}
          <img className="w-[20px] h-[20px] mx-2" src="/images/Heart.png" /> BY
          DDOG TEAM
        </div>
        <div className="flex gap-12 mt-6  text-white">
          <span>Terms and Condition</span>
          <span>Privacy Policy</span>
        </div>
      </div>
      <img className="w-full -mt-[90%]" src="/images/Footer.jpg" alt="Footer" />
    </div>
  );
}

export default Footer;
