"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

export interface AccordionItem {
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex == index ? null : index));
  };
  return (
    <div className="w-full">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className="border-b last:border-b-0" key={i}>
            <button
              className="flex w-full items-center justify-between py-5 text-left"
              onClick={() => handleToggle(i)}
              aria-expanded={isOpen}
              type="button"
            >
              <span className="font-medium text-xl font-dm-sans">
                {item.title}
              </span>
              {isOpen ? (
                <X
                  size={20}
                  className={`transition-transform duration-300 text-primary `}
                />
              ) : (
                <Plus
                  size={20}
                  className={`transition-transform duration-300 text-primary `}
                />
              )}
            </button>
            <div
              className={`grid transition-all duration-300 font-inter ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-base text-gray-500">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
