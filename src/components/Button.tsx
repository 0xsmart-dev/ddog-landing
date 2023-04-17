import React from "react";

const Button = (props: any) => {
  return (
    <div
      className={
        (props.className || "") +
        "relative aspect-[3.7/0.85] flex justify-center items-center lg:w-[200px] md:w-[180px] w-[160px] m-text-normal text-white cursor-pointer flex-none"
      }
    >
      {/* //-------63efe3---- */}
      <img
        src="/images/button-back.png"
        draggable="false"
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="relative m-text-small font-semibold">
        {props.text || "Button"}
      </div>
    </div>
  );
};

export default Button;
