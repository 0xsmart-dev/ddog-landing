import React from "react";

const AnimationTop = (props: any) => {
  return (
    <div className="opacity-0 fade-in-down" style={{ animationDelay: "2s" }}>
      {props.children}
    </div>
  );
};

export default AnimationTop;
