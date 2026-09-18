"use client";
import Image from "next/image";
import MoreQuestions from "../_components/cells/MoreQuestions";
import Footer from "../_components/layout/Footer";
import Accordion from "../_components/cells/Accordion";
import { CreditCard } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface FaqItem {
  title: string;
  content: string;
}


const Page = () => {
  const [activeCategory, setActiveCategory] = useState(
    faqSections[0]?.id ?? "",
  );

  useEffect(() => {
    const sections = faqSections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveCategory(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [activeCategory]);
  return (
    <div className="scroll-smooth">
      <div className="py-40 lg:px-8 px-4 bg-primary-light text-black h-160 md:h-120 overflow-hidden">
        <div className="flex flex-col gap-12 md:flex-row max-w-6xl mx-auto justify-between ">
          <div className="w-full text-center md:text-left md:w-100">
            <h5 className="text-xl font-medium font-dm-sans mb-4">Support</h5>
            <h2 className="text-5xl md:text-6xl font-medium font-dm-sans  md:text-left">
              How can we help you?
            </h2>
          </div>
          <div className=" md:block">
            <Image
              src={"/cards/support_app.png"}
              width={390}
              height={500}
              alt={"app"}
              className="mt-auto w-95 h-110"
            />
          </div>
        </div>
      </div>
      <div className="py-23 max-w-5xl w-full mx-auto">
        <MoreQuestions />
      </div>
      <div className="max-w-6xl mx-auto flex gap-30 justify-between">
        <div className="min-w-70 h-60 rounded-xl bg-gray-100 p-8 flex-col hidden md:flex gap-8 sticky top-40">
          <h6 className="text-xl font-medium text-black font-dm-sans">Categories</h6>
          <div className="flex flex-col gap-4">
            {faqSections.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => {
                    document.getElementById(category.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className={clsx('text-base font-inter transition-colors duration-200  w-full text-start',
                    isActive ? "text-gray-900 font-medium" : "text-gray-400"
              )}
                >
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>
       
        <div className="flex flex-col gap-30 flex-1 scroll-smooth px-4  ">
          {faqSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-40 scroll-smooth"
            >
              <div className="flex items-center justify-start gap-4 font-medium text-3xl font-dm-sans mb-10">
                <CreditCard className="size-10 p-2 rounded-full bg-primary-light text-primary" />

                {section.title}
              </div>

              <Accordion items={section.items} />
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;

const faqItems: FaqItem[] = [
  {
    title: "How to setup my card?",
    content:
      "The Free plan gives you access to the basic features of the platform.",
  },
  {
    title: "How do I create a virtual card?",
    content:
      "The Premium plan gives you access to additional features and benefits.",
  },
  {
    title: "How to order an extra card?",
    content: "The Gold plan gives you access to all available features.",
  },
  {
    title: "My card will expire soon. What to do?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "How do I freeze my card?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
];

const accountFaq: FaqItem[] = [
  {
    title: "How do I verify my account?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "How to upgrade my account?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "Can I have multiple accounts?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "How do I cancel my account?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
];

const personalDetailsFaq: FaqItem[] = [
  {
    title: "How do I change my accound address?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "How to choose my account?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "Where do I find my tax ID",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    title: "How can I download my bank documents?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
];

const faqSections = [
  {
    id: "card",
    title: "Card",
    items: faqItems,
  },
  {
    id: "account",
    title: "Account",
    items: accountFaq,
  },
  {
    id: "personal-detail",
    title: "Personal Detail",
    items: personalDetailsFaq,
  },
];
