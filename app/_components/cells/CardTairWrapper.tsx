"use client";
import ChooseCard from "./ChooseCard";

const CardTairWrapper = () => {
  return (
    <div className="py-40 max-w-6xl mx-auto lg:px-8 md:px-4 md:grid-cols-3 lg:grid-cols-3 grid gap-16 md:gap-12 w-full">
      {cards.map((card, i) => (
        <ChooseCard key={card.title + i} {...card} />
      ))}
    </div>
  );
};

export default CardTairWrapper;

const cards = [
  {
    title: "Basic",
    heading: "Free",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/cards/card_green.png",
    tag: "Popular",
    onClick: () => console.log("Basic"),
  },
  {
    title: "Premium",
    heading: "$5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/cards/card_black.png",
    duration: "per month",
    onClick: () => console.log("Premium"),
  },
  {
    title: "Gold",
    heading: "$10",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/cards/card_brown.png",
    duration: "per month",
    onClick: () => console.log("Gold"),
  },
];
