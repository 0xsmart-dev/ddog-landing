import React from "react";
import { ReactComponent as Logo } from "assets/svg/logo-third.svg";
import { ReactComponent as Twitter } from "assets/svg/twitter.svg";
import { ReactComponent as Discord } from "assets/svg/discord.svg";

function Footer() {
  return (
    <div className="relative w-full pb-8 flex flex-col items-center justify-center">
      {/* <ParticleBack></ParticleBack> */}
      <Logo className="max-w-[300px] w-full h-full cursor-pointer" />
      <div className="text-lg m-mt">Partners</div>
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
      <div className="m-mt">MADE WITH ❤️ BY DDOG TEAM</div>
      <div className="flex gap-12 mt-6 text-base font-semibold text-body">
        <span>Terms and Condition</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
}

export default Footer;
