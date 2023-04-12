import React, { useState, useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Transition } from "@headlessui/react";

import { ReactComponent as Plus } from "assets/svg/plus1.svg";
import { ReactComponent as Minus } from "assets/svg/minus.svg";

type Props = {
  title: string;
  content: string;
  index: number;
};

const Accordion: React.FC<Props> = ({ title, content, index }) => {
  const [show, setShow] = useState<boolean>(false);
  const rightRef = useRef<HTMLHeadingElement>(null);
  const rightViewport = useInViewport(rightRef);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        ref={rightRef}
        className={`border border-1 border-brand rounded-full py-2 px-4 md:py-3 md:px-6 w-full ${
          rightViewport.inViewport &&
          rightViewport.enterCount === 1 &&
          "opacity-0 fade-in-right"
        }`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div
          className="flex items-center cursor-pointer flex-none"
          onClick={toggle}
        >
          <span className="m-text-small font-bold text-main/70">{title}</span>
          {show ? (
            <Minus
              className="w-6 h-6 ml-auto cursor-pointer flex-none"
              onClick={toggle}
            />
          ) : (
            <Plus
              className="w-6 h-6 ml-auto cursor-pointer flex-none"
              onClick={toggle}
            />
          )}
        </div>
      </div>
      <Transition
        show={show}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="px-5 pb-3 md:px-7 md:pb-5 text-main/70 text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Transition>
    </>
  );
};

export default Accordion;
