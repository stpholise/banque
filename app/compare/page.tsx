import Image from "next/image";
import CardTairWrapper from "../_components/cells/CardTairWrapper";

const page = () => {
  return (
    <div>
      <div className="py-40 w-full lg:px-8 px-4 bg-primary-light text-black h-120 overflow-hidden">
        <div className="max-w-6xl flex justify-between mx-auto w-full  gap-22 px-4 lg:px-8  ">
          <div className="lg:w-90">
            <h5 className="text-xl font-medium font-dm-sans mb-8 justify-between">
              Compare Cards
            </h5>
            <h2 className="text-6xl font-medium font-dm-sans">
              {" "}
              The ideal card for you
            </h2>
          </div>
          <div className=" w-fit">
            <Image
              src={"/cards/cards_fan.png"}
              width={500}
              height={550}
              alt={"cards"}
              className={"w-120 h-130"}
            />
          </div>
        </div>
      </div>
      <div className="flex max-w-6xl px-4 mx-auto lg:px-8">
        <div className="w-80 hidden lg:block "></div>
        <div className="w-full">
          <CardTairWrapper />
        </div>
      </div>
    </div>
  );
};

export default page;
