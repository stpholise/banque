import {
  Check,
  ArrowRight,
  Zap,
  Vault,
  Smartphone,
  Wifi,
  ChartLine,
  CreditCard,
  Plus,
  Star,
  Phone,
  Mail,
} from "lucide-react";
import PryButton from "../_components/PryButton";
import Image from "next/image";
import clsx from "clsx";
import TestimonialsCard from "./components/TestimonialsCard";
import FaqCard from "@/app/_components/FaqCard";
import Footer from "../_components/layout/Footer";

type PlanningFeature = {
  name?: string;
  bg?: string;
  price?: string;
  emoji?: string;
};

const page = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto  px-4 py-32 flex items-center justify-between gap-12 ">
        <div className="flex-col flex  gap-16 w-135 ">
          <div className=" flex flex-col gap-8 w-full  ">
            <h1 className="text-6xl text-medium text-dm-sans">
              Banking starts here.
            </h1>
            <p className="font-dm-sans">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              totam eius alias, dolor dolorum vel. Ut nam sit recusandae
              aperiam,
            </p>
            <div className="grid grid-cols-2 max-w-sm gap-x-8 gap-y-4 justify-center text-white">
              {features.map((feature, i) => (
                <div className="flex items-center gap-1" key={i}>
                  <Check className="rounded-full size-4.5 bg-white/10 p-0.5 text-primary" />{" "}
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className=" flex items-center  max-w-sm gap-8 justify-start">
            <PryButton text={"Open Account"} />

            <button className="flex items-center gap-1 ">
              {" "}
              Compare Cards <ArrowRight className="size-4" />{" "}
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src={"/cards/cards.png"}
            width={400}
            height={570}
            alt="cards"
            className="w-98 h-139 "
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto  px-4 py-40 flex items-start justify-between gap-12 ">
        <div className=" flex flex-col gap-16 w-full ">
          <h2 className="font-medium text-6xl ">
            One app.
            <br /> One banking.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  2xs:gap-8 items-center mx-auto lg:mx-0 justify-center bor w-full   lg:justify-start">
            {featureCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  className="border-2 border-gray-500 rounded-2xl p-4 2xs:p-8 sm:w-67 md:w-full h-full flex flex-col gap-4"
                  key={i}
                >
                  <Icon className="size-10 p-2 rounded-full bg-white/10" />
                  <h5 className=" text-xl font-medium font-dm-sans ">
                    {card.head}
                  </h5>
                  <p className=" text-gray-300">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden lg:block lg:w-180">
          <Image
            src={"/cards/app.jpg"}
            width={400}
            height={800}
            alt="phone app"
            className=" rounded-[55px]  w-full h-200 sm:w-120"
          />
        </div>
      </div>
      <div className="  px-4 sm:px-6 xl:px-4 py-32 lg:h-170 overflow-hidden bg-primary-light text-black flex">
        <div className="max-w-5xl mx-auto flex lg:flex-row flex-col gap-12 items-start sm:items-center lg:items-start">
          <div className="max-w-5xl mx-auto  flex flex-col items-start sm:items-center lg:items-start justify-between gap-12 sm:text-center lg:text-left ">
            <h3 className="text-5xl w-90 font-dm-sans">
              Send & receive money instantly
            </h3>
            <p className="text-xl font-inter font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
            <div className="flex flex-col gap-4">
              <p className="flex gap-2 items-center text-lg">
                {" "}
                <Check className="size-5 p-0.5 rounded-full text-white bg-primary " />{" "}
                Malesuade Ipsum
              </p>
              <p className="flex gap-2 items-center text-lg">
                {" "}
                <Check className="size-5 p-0.5 rounded-full text-white bg-primary " />
                Vestibulum
              </p>
              <p className="flex gap-2 items-center text-lg">
                {" "}
                <Check className="size-5 p-0.5 rounded-full text-white bg-primary " />{" "}
                Parturient Lorem Ipsum
              </p>
            </div>
          </div>
          <div className=" hidden md:flex">
            <div className="flex flex-col gap-6 w-100">
              {purchases.map((prod, i) => (
                <div
                  className="rounded-[10px] bg-white py-4 pl-4 pr-5 flex justify-start items-center  gap-4"
                  key={i}
                >
                  <Image
                    src={"/cards/apple.png"}
                    width={52}
                    height={56}
                    alt="apple logo"
                    className="bg-primary p-1 rounded-lg size-12"
                  />
                  <div className="flex w-full justify-between items-center gap-8 ">
                    <div className="">
                      <h6 className="text-lg font-medium">{prod.brand}</h6>
                      <p className="text-sm text-gray-500">{prod.product}</p>
                    </div>
                    <p className="text-lg font-medium text-right">
                      {prod.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="
      pt-40 w-full "
      >
        <div className="max-w-5xl px-4 sm:px-6 mx-auto flex flex-col gap-12">
          <div className="flex gap-12 lg:flex-row flex-col items-center justify-between">
            <div className="flex flex-col gap-4 justify-start  w-full tems-start xl:items-start  xl:w-120">
              <h6 className=" font-dm-sans text-xl  font-medium ">
                Saving Account
              </h6>
              <h3 className=" text-4xl xl:text-5xl font-medium font-dm-sans ">
                Organize your money the right way
              </h3>
              <p className=" text-lg xl:text-xl font-medium font-inter ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                quae quam exercitationem.
              </p>
            </div>

            <button className="text-primary   w-fit py-2 px-4 mr-auto xl:mt-auto font-medium text-lg font-dm-sans flex gap-2 items-center  ">
              All Features <ArrowRight className="size-4" />
            </button>
          </div>
          <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3  xl:grid-cols-5 justify-center  md:justify-between gap-6">
            {planningFeatures.map((plan, i) => (
              <div className="flex flex-col gap-4" key={i}>
                <div
                  className={clsx(
                    " rounded-2xl flex items-center justify-center size-44 ",
                    plan.bg ? plan.bg : "bg-gray-200",
                  )}
                >
                  {plan.emoji ? (
                    <span className="text-4xl ">{plan.emoji}</span>
                  ) : (
                    <span className="text-4xl rounded-full bg-black text-white size-9  p-1 flex items-center justify-center">
                      {" "}
                      +
                    </span>
                  )}
                </div>
                <div className="">
                  <h5 className="text-lg font-medium font-dm-sans">
                    {plan.name}
                  </h5>
                  <p className="text-gray-500 text-base"> {plan.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-40">
        <div className="max-w-5xl px-4 sm:px-6 mx-auto flex flex-col xl:flex-row  gap-12">
          <div className="flex flex-col gap-10 items-start">
            <div className="flex flex-col gap-4 justify-start w-full  xl:w-120">
              <h6 className=" font-dm-sans text-xl  font-medium ">
                Notifications
              </h6>
              <h3 className="text-5xl font-medium font-dm-sans">
                Stay notified
              </h3>
              <p className="text-xl font-medium font-inter ">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="flex flex-col gap-4">
                <p className="flex gap-2 items-center text-lg">
                  {" "}
                  <Check className="size-5 p-0.5 rounded-full text-white bg-primary " />{" "}
                  Malesuade Ipsum
                </p>
                <p className="flex gap-2 items-center text-lg">
                  {" "}
                  <Check className="size-5 p-0.5 rounded-full text-white bg-primary " />
                  Vestibulum
                </p>
                <p className="flex gap-2 items-center text-lg">
                  {" "}
                  <Check className="size-5 p-0.5 rounded-full text-white bg-primary " />{" "}
                  Parturient Lorem Ipsum
                </p>
              </div>
            </div>

            <button className="text-primary cursor-pointer  font-medium text-lg font-dm-sans flex gap-2 items-center  ">
              Compare Cards <ArrowRight className="size-4" />
            </button>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {notifications.map((mess, i) => (
              <div
                className="w-full rounded-[10px] bg-white/10 p-4 flex justify-start items-center  gap-4"
                key={i}
              >
                <Image
                  src={"/cards/b.png"}
                  width={52}
                  height={56}
                  alt="apple logo"
                  className="bg-primary p-3 rounded-lg size-12"
                />
                <div className="flex w-full justify-between items-center gap-8 ">
                  <div className="">
                    <h6 className="text-xl font-medium font-dm-sans">
                      {mess.brand}
                    </h6>
                    <p className=" text-gray-400 font-inter text-base">
                      {mess.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="flex gap-4 items-center w-full xl:w-169 flex-wrap">
            {partners.map((partner, i) => (
              <div
                className="p-3 xl:p-4 rounded-xl bg-gray-200 w-fit h-15 flex items-center"
                key={i}
              >
                <Image
                  src={partner}
                  alt={"logo"}
                  width={80}
                  height={30}
                  className="w-fit h-fit"
                />{" "}
              </div>
            ))}
          </div>
          <div className="flex gap-12 flex-col xl:flex-row  w-ful justify-between">
            <div className="flex flex-col gap-4 justify-start w-full xl:w-120">
              <h6 className=" font-dm-sans text-xl  font-medium ">Tools</h6>
              <h3 className="text-5xl font-medium font-dm-sans w-80">
                Seamless integration
              </h3>
              <p className="text-base font-medium font-inter ">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-auto">
              <p className="flex gap-2 items-center text-lg">
                {" "}
                <Check className="size-5 p-0.5 rounded-full text-white bg-primary " />{" "}
                Secure and encrypted integration
              </p>
              <p className="flex gap-2 items-center text-lg">
                {" "}
                <Check className="size-5 p-0.5 rounded-full text-white bg-primary " />
                Fully API interface
              </p>
              <p className="flex gap-2 items-center text-lg">
                {" "}
                <Check className="size-5 p-0.5 rounded-full text-white bg-primary " />{" "}
                Payment worldwide
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-25xl:pt-40">
        <div className="mx-auto max-w-lg px-4 flex flex-col gap-10">
          <div className="flex flex-col gap-4 justify-center mx-auto w-full xl:w-120 text-center">
            <h6 className=" font-dm-sans text-xl  font-medium ">Account</h6>
            <h3 className="text-5xl font-medium font-dm-sans w-88 mx-auto text-pretty">
              Perfect card for your needs.
            </h3>
            <p className="text-lg font-medium font-inter  ">
              Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
              leo duis ut diam.
            </p>
          </div>
          <div className="">
            <Image
              src={"/cards/cards_3.png"}
              width={500}
              height={500}
              alt="cards"
              className="w-md mx-auto h-112"
            />
          </div>
          <div className=" flex items-center  justify-center gap-4">
            <PryButton text={"Open Account"} />
            <button className="rounded-md font-medium text-base border border-gray-200 py-3 px-4 cursor-pointer">
              Compare Cards
            </button>
          </div>
        </div>
      </div>
      <div className="py-40">
        <div className="max-w-5xl mx-auto flex flex-col gap-15 px-4 xs:px-6 xl:px-4">
          <div className="flex flex-col xl:flex-row gap-12 w-full justify-between">
            <div className="flex flex-col gap-4 justify-start w-full  xl:w-139  text-start">
              <h6 className=" font-dm-sans text-xl  font-medium ">
                Testimonials
              </h6>
              <h3 className="text-5xl xl:text-6xl font-medium font-dm-sans  text-prett">
                People all over the world use banque.
              </h3>
            </div>
            <div className="text-sm font-medium font-inter whitespace-nowrap flex items-center  gap-4 mt-auto">
              <Star className="text-primary size-8 p-1.5 rounded-full bg-primary-light" />
              Rated <span className="text-primary">4.8/5</span> from over 1000
              users
            </div>
          </div>
          <div className=" columns-1 md:columns-2 lg:columns-3 justify-between gap-4 w-full  ">
            {testimonials.map((test, i) => (
              <TestimonialsCard
                key={i}
                name={test.name}
                stars={test.star}
                text={test.text}
                occupation={test.occupation}
                heading={test.heading}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl rounded-2xl bg-primary mx-auto px-4 sm:px-6 xl:px-19 py-24 flex flex-col xl:flex-row gap-20 xl:h-145 xl:overflow-hidden">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8 justify-start  w-full xl:w-110">
            <h3 className="text-5xl xl:text-6xl font-medium font-dm-sans w-full xl:w-97">
              One app.
              <br/> One banking
            </h3>
            <p className="text-lg font-medium font-inter ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis consectetur nam eveniet dignissimos.
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
      <div className="py-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 xl:px-4 flex flex-col  xl:flex-row items-start gap-20 justify-between ">
          <div className=" flex flex-col gap-12 ">
            <h2 className="font-dm-sans text-6xl">Need help?</h2>
            <div className=" flex flex-col gap-8">
              <div className="flex gap-6 items-center ">
                <Phone className="text-primary bg-primary-light rounded-full size-10 p-1.5 " />
                <div className="">
                  <h5 className="font-medium text-lg leading-5">+4567809234</h5>
                  <p className="text-gray-500 text-sm">Support Hotline</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Mail className="text-primary bg-primary-light rounded-full size-10 p-1.5" />
                <div className="">
                  <h5 className="font-medium text-lg leading-5">
                    help@banque.com
                  </h5>
                  <p className="text-gray-500 text-sm">Support Email</p>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-3 text-primary font-medium">
              {" "}
              Support <ArrowRight className="size-4 " />
            </button>
          </div>
          <div className=" w-full xl:w-1/2">
            {faq.map((question, i) => (
              <FaqCard
                key={i}
                index={question.id}
                question={question.question}
                answer={question.answer}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const features = [
  "Instant Transfer",
  "Payment worldwide",
  "Saving accounts",
  "100% mobile banking",
];

const featureCards = [
  {
    icon: Zap,
    head: "Instant transactions",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    icon: Vault,
    head: "Saving accounts",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    icon: Smartphone,
    head: "Mobile banking",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    icon: ChartLine,
    head: "Advanced statistics",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    icon: CreditCard,
    head: "Virtual cards",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    icon: Wifi,
    head: "Contactless payments",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
];

const purchases = [
  {
    brand: "Apple",
    product: "Macbook",
    price: "-999€",
  },
  {
    brand: "Amazon",
    product: "Electronics",
    price: "-49€",
  },
  {
    brand: "Twitter",
    product: "Ads",
    price: "-29€",
  },
  {
    brand: "Microsoft",
    product: "office Suite",
    price: "-149€",
  },
  {
    brand: "Dropbox",
    product: "Cloud",
    price: "-14€",
  },
  {
    brand: "Paypal",
    product: "Shopping",
    price: "-200€",
  },
];

const planningFeatures: PlanningFeature[] = [
  {
    emoji: "💻",
    name: "New Laptop",
    price: "400$",
    bg: "bg-[#E8F2EE]",
  },
  {
    emoji: "🚲",
    name: "Dream bike",
    price: "200$",
    bg: "bg-[#F1DFDF]",
  },
  {
    emoji: "✈️",
    name: "Holiday",
    price: "14000$",
    bg: "bg-[#DFE1F1]",
  },
  {
    emoji: "📸",
    name: "Camera",
    price: "100$",
    bg: "bg-[#DFEBF1]",
  },
  {},
];

const notifications = [
  {
    logo: "b",
    brand: "Banko",
    text: "Your payment of 49$ has been processed!",
  },
  {
    logo: "b",
    brand: "Banko",
    text: "You got a new support message!",
  },
  {
    logo: "b",
    brand: "Banko",
    text: "Your payment was declined!",
  },
  {
    logo: "b",
    brand: "Banko",
    text: "Please verify your payment of 99$!",
  },
  {
    logo: "b",
    brand: "Banko",
    text: "New account statistics are available!",
  },
];

const partners: string[] = [
  "/logo/webflow.png",
  "/logo/shopify.png",
  "/logo/zapier.png",
  "/logo/bitcoin.png",
  "/logo/paypal.png",
  "/logo/mastercard.png",
  "/logo/visa.png",
  "/logo/google_pay.png",
  "/logo/apple_pay.png",
  "/logo/amazon_pay.png",
];

const testimonials = [
  {
    star: 5,
    heading: "Sunt qui esse pariatur duis deserunt mollit ",
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Cody Fisher",
    occupation: "Medical Assistant",
  },
  {
    star: 5,
    heading: "Sunt qui esse pariatur duis deserunt mollit ",
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.nLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, tempora?     ",
    name: "Cody Fisher",
    occupation: "Medical Assistant",
  },
  {
    star: 5,
    heading: "Sunt qui esse pariatur duis deserunt mollit ",
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Cody Fisher",
    occupation: "Medical Assistant",
  },
  {
    star: 5,
    heading: "Sunt qui esse pariatur duis deserunt mollit ",
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi asperiores, placeat fuga quasi hic voluptatibus labore aut minima earum blanditiis quos numquam alias, nam libero aspernatur a eaque aliquid voluptatum.",
    name: "Cody Fisher",
    occupation: "Medical Assistant",
  },
  {
    star: 5,
    heading: "Sunt qui esse pariatur duis deserunt mollit ",
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Cody Fisher",
    occupation: "Medical Assistant",
  },
  {
    star: 5,
    heading: "Sunt qui esse pariatur duis deserunt mollit ",
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Cody Fisher",
    occupation: "Medical Assistant",
  },
  {
    star: 5,
    heading: "Sunt qui esse pariatur duis deserunt mollit ",
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Cody Fisher",
    occupation: "Medical Assistant",
  },
  {
    star: 5,
    heading: "Sunt qui esse pariatur duis deserunt mollit ",
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Cody Fisher",
    occupation: "Medical Assistant",
  },
  {
    star: 5,
    heading: "Sunt qui esse pariatur duis deserunt mollit ",
    text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Cody Fisher",
    occupation: "Medical Assistant",
  },
];

const faq = [
  {
    id: 1,
    question: "How do I open an Banque account?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium debitis iure asperiores quia deserunt, nostrum eligendi suscipit veritatis ipsam assumenda beatae voluptatem temporibus ducimus repellendus at doloribus, alias voluptas.",
  },
  {
    id: 2,
    question: "How do I order a new card?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium debitis iure asperiores quia deserunt, nostrum eligendi suscipit veritatis ipsam assumenda beatae voluptatem temporibus ducimus repellendus at doloribus, alias voluptas.",
  },
  {
    id: 3,
    question: "How to change my account limits?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium debitis iure asperiores quia deserunt, nostrum eligendi suscipit veritatis ipsam assumenda beatae voluptatem temporibus ducimus repellendus at doloribus, alias voluptas.",
  },
  {
    id: 4,
    question: "How does Banque premium works?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium debitis iure asperiores quia deserunt, nostrum eligendi suscipit veritatis ipsam assumenda beatae voluptatem temporibus ducimus repellendus at doloribus, alias voluptas.",
  },
  {
    id: 5,
    question: "Can I have two Banque accounts?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium debitis iure asperiores quia deserunt, nostrum eligendi suscipit veritatis ipsam assumenda beatae voluptatem temporibus ducimus repellendus at doloribus, alias voluptas. ",
  },
];

export default page;
