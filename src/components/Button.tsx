import React from "react";

const Button = (props: any) => {
  return (
    <div
      className={
        (props.className || "") +
        "relative aspect-[3/0.85] flex justify-center items-center lg:w-[240px] md:w-[200px] w-[180px] m-text-normal text-[#b0ffff] cursor-pointer flex-none"
      }
    >
      {/* //-------63efe3---- */}
      <img
        src="/images/button-back2.png"
        draggable="false"
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="relative">{props.text || "Button"}</div>
    </div>
  );
};

export default Button;
