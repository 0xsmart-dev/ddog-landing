import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

import Accordion from "components/Accordion";
import { mockFaqs } from "mock/global";

const Questions = () => {
  const leftRef = useRef<HTMLHeadingElement>(null);
  const leftViewport = useInViewport(leftRef);

  return (
    <div id="faqs" className="relative w-full m-gap">
      <div className="m-text-header text-left tracking-[1vw] m-container w-full sm:w-auto">
        Questions
      </div>
      <div>
        <img
          src="/images/header-light.png"
          draggable="false"
          className=" block rotate-180"
        ></img>
      </div>
      <div className="m-container m-mt flex gap-2 md:gap-3 mx-auto max-w-[800px] w-full flex-col">
        {mockFaqs.map((item, index) => (
          <Accordion
            title={item.title}
            content={item.content}
            key={`question-${index}`}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;
