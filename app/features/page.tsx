"use client";
import PryButton from "../_components/PryButton";
import SecButton from "../_components/SecButton";
import Image from "next/image";
import SectionIntro from "../_components/SectionIntro";
import { partners } from "../home/page";
import ChooseCard from "../_components/cells/ChooseCard";
import HelpSection from "../_components/cells/HelpSection";
import Footer from "../_components/layout/Footer";
import AllInOneSection from "../_components/cells/AllInOneSection";
import CardTairWrapper from "../_components/cells/CardTairWrapper";

const page = () => {
  return (
    <div>
      <div className="pt-32  bg-primary-light">
        <div className="text-center text-black mx-auto w-120 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h6 className="font-dm-sans text-xl font-medium">Features</h6>
            <h1 className="font-dm-sans text-7xl font-medium ">
              All in one card
            </h1>
            <p className="font-inter text-xl font-medium text-black/80">
              Senectus et netus et malesuada fames ac turips.{" "}
              <span className="">Sagittius vitae et leo duis ut diam.</span>
            </p>
          </div>
          <div className="flex gap-8 items-center justify-center py-4">
            <PryButton text={"Open Account"} />
            <SecButton text={"Compare Cads"} />
          </div>
        </div>
        <div className="w-full overflow-hidden columns-5 flex gap-8 justify-center h-110">
          {cardImages.map((url, i) => (
            <Image
              src={url}
              width={300}
              height={600}
              className=" mt-auto "
              alt="card"
              key={i}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto  px-4 lg:px-8 py-40 flex flex-col items-start justify-between gap-40">
        <div className=" flex flex-col lg:flex-row  justify-between items-center gap-16 w-full ">
          <div className="w-120">
            <SectionIntro
              title={"Transactions"}
              heading="Send & recieve money instantly"
              text={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              }
              list={["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"]}
            />
          </div>
          <div className="hidden lg:block lg:w-120">
            <Image
              src={"/cards/app.jpg"}
              width={400}
              height={800}
              alt="phone app"
              className=" rounded-[55px]  w-full h-200 sm:w-120"
            />
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row  justify-between items-center gap-16 w-full ">
          <div className="w-120">
            <SectionIntro
              title={"Cards"}
              heading="Manage your cards"
              text={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              }
              list={["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"]}
            />
          </div>
          <div className="hidden lg:block lg:w-120">
            <Image
              src={"/cards/app.jpg"}
              width={400}
              height={800}
              alt="phone app"
              className=" rounded-[55px]  w-full h-200 sm:w-120"
            />
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row  justify-between items-center gap-16 w-full ">
          <div className="w-120">
            <SectionIntro
              title={"Advanced Statistics"}
              heading="Keep control over your money"
              text={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              }
              list={["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"]}
            />
          </div>
          <div className="hidden lg:block lg:w-120">
            <Image
              src={"/cards/app.jpg"}
              width={400}
              height={800}
              alt="phone app"
              className=" rounded-[55px]  w-full h-200 sm:w-120"
            />
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row  justify-between items-center gap-16 w-full ">
          <div className="w-120">
            <SectionIntro
              title={"Saving Accounts"}
              heading="Lorem et ipsum dolor"
              text={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              }
              list={["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"]}
            />
          </div>
          <div className="hidden lg:block lg:w-120">
            <Image
              src={"/cards/app.jpg"}
              width={400}
              height={800}
              alt="phone app"
              className=" rounded-[55px]  w-full h-200 sm:w-120"
            />
          </div>
        </div>
      </div>
      <div className="pt-40 max-w-6xl mx-auto lg:px-8  w-full flex flex-col gap-24">
        <div className="flex-col flex gap-4 text-center justify-center items-center w-180 mx-auto lg:px-8">
          <h3 className="text-5xl font-medium font-dm-sans">
            All in one bank. Really.
          </h3>
          <p className="text-lg font-inter ">
            Senectus et netus et malesuada fames ac turpis.
            <br />
            Sagittis vitae et leo duis ut diam
          </p>
        </div>

        <div className="w-full flex flex-col gap-8">
          <div className="grid grid-cols-2 h-125  gap-4 w-full justify-between">
            <div className="flex flex-col gap-18  h-125 overflow-hidden text-center items-center justify-start bg-white/20 rounded-xl lg:px-14 pt-4 ">
              <div className="w-80 mt-4">
                <h5 className="text-4xl font-medium font-dm-sans">Statics</h5>
                <p className="text-lg text-white mt-3 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. sed
                  do.
                </p>
              </div>
              <Image
                src={"/cards/app.jpg"}
                width={400}
                height={600}
                alt="phone"
                className="rounded-[62px]  w-full h-200 sm:w-120"
              />
            </div>
            <div className="flex flex-col gap-18  h-125 overflow-hidden text-center items-center justify-start bg-white/20 rounded-xl  pt-4 ">
              <div className="w-80 mt-4">
                <h5 className="text-4xl font-medium font-dm-sans">Cards</h5>
                <p className="text-lg text-white mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. sed
                  do.
                </p>
              </div>
              <Image
                src={"/cards/cards_3_horizontal.png"}
                width={400}
                height={600}
                alt="phone"
                className=" mt-auto    w-[110%]"
              />
            </div>
          </div>
          <div className="">
            <div className=" grid grid-cols-3 gap-8 ">
              <div className="overflow-hidden flex flex-col gap-13">
                <div className="pt-4 px-4">
                  <h6 className="text-3xl font-dm-sans font-medium lg:w-40">
                    Easy integration
                  </h6>
                  <p className="text-base font-inter mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
                <div className="flex gap-4 items-center w-full xl:w-100 flex-wrap  -ml-3">
                  {partners.map((partner, i) => (
                    <div
                      className=" xl:p-2  rounded-xl bg-gray-200 w-fit h-10 flex items-center"
                      key={i}
                    >
                      <Image
                        src={partner}
                        alt={"logo"}
                        width={80}
                        height={30}
                        className="w-fit h-4"
                      />{" "}
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden  flex flex-col gap-13">
                <div className="pt-4 px-4">
                  <h6 className="text-3xl font-dm-sans font-medium lg:w-40">
                    Saving accounts
                  </h6>
                  <p className="text-base font-inter mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
                <div className="flex gap-4 items-center w-full xl:w-100 flex-wrap">
                  {partners.map((partner, i) => (
                    <div
                      className=" xl:p-2  rounded-xl bg-gray-200 w-fit h-10 flex items-center"
                      key={i}
                    >
                      <Image
                        src={partner}
                        alt={"logo"}
                        width={80}
                        height={30}
                        className="w-fit h-4"
                      />{" "}
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden flex flex-col gap-13">
                <div className="pt-4 px-4">
                  <h6 className="text-3xl font-dm-sans font-medium lg:w-40">
                    Instant transactions
                  </h6>
                  <p className="text-base font-inter mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
                <div className="flex gap-4 items-center w-full xl:w-100 flex-wrap">
                  {partners.map((partner, i) => (
                    <div
                      className=" xl:p-2  rounded-xl bg-gray-200 w-fit h-10 flex items-center"
                      key={i}
                    >
                      <Image
                        src={partner}
                        alt={"logo"}
                        width={80}
                        height={30}
                        className="w-fit h-4"
                      />{" "}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardTairWrapper />
      <AllInOneSection />
      <HelpSection />
      <Footer />
    </div>
  );
};

const cardImages = [
  "/cards/brown_card.png",
  "/cards/navy_card.png",
  "/cards/green_card.png",
  "/cards/navy_card.png",
  "/cards/brown_card.png",
];

export default page;
