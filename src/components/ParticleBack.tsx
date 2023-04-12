import React from "react";

const ParticleBack = () => {
  const particleComponent = [];

  for (let i = 0; i < 100; i++) {
    particleComponent.push(
      <div key={"particle" + i} className="circle-container ">
        <div className="circle"></div>
      </div>
    );
  }
  return <div className="particle-container particle">{particleComponent}</div>;
};

export default ParticleBack;
