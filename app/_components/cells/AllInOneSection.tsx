import Image from "next/image";
import { Check } from "lucide-react";

const AllInOneSection = () => {
  return (
    <div className="max-w-5xl rounded-2xl bg-primary mx-auto px-4 sm:px-6 xl:px-19 py-24 flex flex-col xl:flex-row gap-20 xl:h-145 xl:overflow-hidden">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-8 justify-start  w-full xl:w-110">
          <h3 className="text-5xl xl:text-6xl font-medium font-dm-sans w-full xl:w-97">
            One app.
            <br /> One banking
          </h3>
          <p className="text-lg font-medium font-inter ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            consectetur nam eveniet dignissimos.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <p className="flex gap-2 items-center text-base">
              {" "}
              <Check className="size-5 p-0.5 rounded-full text-white bg-green-300 " />{" "}
              Instant transactions
            </p>
            <p className="flex gap-2 items-center text-base">
              {" "}
              <Check className="size-5 p-0.5 rounded-full text-white bg-green-300 " />
              Saving accounts
            </p>
            <p className="flex gap-2 items-center text-base">
              {" "}
              <Check className="size-5 p-0.5 rounded-full text-white bg-green-300 " />{" "}
              Payments worldwide
            </p>
            <p className="flex gap-2 items-center text-base">
              {" "}
              <Check className="size-5 p-0.5 rounded-full text-white bg-green-300 " />{" "}
              100% mobile banking
            </p>
          </div>
        </div>
        <div className=" flex gap-4">
          <button className="flex items-center justify-center gap-2 bg-black/90 py-1.5 px-3 rounded-lg">
            <Image
              src="/cards/apple.png"
              width={40}
              height={40}
              alt="Apple logo"
              className="w-8 h-9"
            />

            <span className="flex flex-col justify-center items-start leading-none">
              <span className="text-[10px]">Download on the</span>
              <span className="text-lg leading-tight">App Store</span>
            </span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-black/90 py-1.5 px-3 rounded-lg">
            <Image
              src="/cards/apple.png"
              width={40}
              height={40}
              alt="Apple logo"
              className="w-8 h-9"
            />

            <span className="flex flex-col justify-center items-start leading-none">
              <span className="text-[10px]">GET IT ON</span>
              <span className="text-lg leading-tight">Google Play</span>
            </span>
          </button>
        </div>
      </div>
      <div className="mx-auto lg:mx-0">
        <Image
          src={"/cards/app.jpg"}
          width={400}
          height={800}
          alt="phone app"
          className=" w-95 border-black border rounded-[55px] h-200"
        />
      </div>
    </div>
  );
};

export default AllInOneSection;
