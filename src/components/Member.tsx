import React, { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";

type Props = {
  imgUrl: string;
  name: string;
  role: string;
  index: number;
};

const Member: React.FC<Props> = ({ imgUrl, name, role, index }) => {
  const memberRef = useRef<HTMLHeadingElement>(null);
  const memberViewport = useInViewport(memberRef);

  const [memberState, setMemberState] = useState<boolean>(false);

  useEffect(() => {
    if (memberViewport.inViewport === true) setMemberState(true);
  }, [memberViewport]);

  return (
    <div
      ref={memberRef}
      className={`flex flex-col overflow-hidden cursor-pointer w-fit rounded-2xl bg-card hover:scale-105 anim ${
        memberState && "opacity-0 fade-in-up"
      }`}
      style={{animationDelay: `${index * 100}ms`}}
    >
      <img
        src={imgUrl}
        className="w-[280px] xl:w-[315px] h-[280px] xl:h-[315px]"
        alt="member"
      />
      <div className="flex flex-col justify-center w-full py-4">
        <span className="font-[Ethnocentric] text-xl text-white text-center">
          {name}
        </span>
        <span className="mt-1 text-base text-center text-white">{role}</span>
      </div>
    </div>
  );
};

export default Member;
