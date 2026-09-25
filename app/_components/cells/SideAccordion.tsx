"use client";

import { useState } from "react";
import { ChevronRight } from "@animateicons/react/lucide";
import clsx from "clsx";

import { AccordionProps } from "./Accordion";

const SideAccordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex == index ? null : index));
  };
  return (
    <div className="w-full flex text-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={clsx("flex items-center")} key={i}>
            <button className="" onClick={() => handleToggle(i)} type="button">
              <span className="inline-block rounded-full size-4">{i + 1}</span>
            </button>
            <div
              className={`flex items-center text-sm overflow-hidden whitespace-nowrap transition-all duration-400 font-inter ${
                isOpen ? "ml-2 max-w-40 opacity-100" : "ml-0 max-w-0 opacity-0"
              }`}
            >
              <span className="">{item.title}</span>
              <ChevronRight
                size={14}
                className="ml-2 size-5 shrink-0 rounded-full bg-gray-100 p-0.5 text-gray-600"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideAccordion;
