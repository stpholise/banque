"use client"
import ChooseCard from "./ChooseCard";

const CardTairWrapper = () => {
  return (
    <div className="py-40 max-w-6xl mx-auto lg:px-8 px-4 lg:grid-cols-3 grid gap-8 w-full">
        <ChooseCard
          title={"Basic"}
          heading={"Free"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          imageUrl={"/cards/card_green.png"}
          onClick={() => {
            console.log("testing");
          }}
          tag={"Popular"}
        />
        <ChooseCard
          title={"Premium"}
          heading={"$5"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          imageUrl={"/cards/card_black.png"}
          onClick={() => {
            console.log("testing");
          }}
          duration={"per month"}
        />
        <ChooseCard
          title={"Gold"}
          heading={"$10"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          imageUrl={"/cards/card_brown.png"}
          onClick={() => {
            console.log("testing");
          }}
          duration={"per month"}
        />
      </div>
  )
}

export default CardTairWrapper