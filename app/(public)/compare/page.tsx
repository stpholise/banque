import Image from "next/image";
import CardTairWrapper from "@/app/_components/cells/CardTairWrapper";
import MoreQuestions from "@/app/_components/cells/MoreQuestions";
import Footer from "@/app/_components/layout/Footer";
import FeatureComparison from "@/app/_components/cells/FeatureComparison";
import {
  Check,
  PanelTop,
  PanelLeftDashed,
  Wifi,
  Globe,
  Landmark,
  Smartphone,
  Vault,
  ChartLine,
  CircleStop,
} from "lucide-react";

const page = () => {
  return (
    <div>
      <div className="py-40 w-full lg:px-8 px-4 bg-primary-light text-black h-160 md:h-120 overflow-hidden">
        <div className="max-w-6xl flex md:flex-row flex-col justify-between mx-auto w-full   gap-22 px-4 lg:px-8  ">
          <div className="lg:w-90">
            <h5 className="text-xl font-medium font-dm-sans mb-8 justify-between">
              Compare Cards
            </h5>
            <h2 className=" text-5xl md:text-6xl font-medium font-dm-sans">
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
      <div className="max-w-6xl mx-auto flex-col gap-24 flex md:px-8 ">
        {featureSections.map((section) => (
          <div key={section.title}>
            <h4 className="text-2xl font-medium font-dm-sans py-4">
              {section.title}
            </h4>

            {section.features.map((feature, i) => (
              <FeatureComparison
                key={feature.title + i}
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
                free={feature.free}
                premium={feature.premium}
                gold={feature.gold}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="py-23 max-w-5xl w-full mx-auto">
        <MoreQuestions />
      </div>
      <Footer />
    </div>
  );
};

export default page;

const featureSections = [
  {
    title: "Credit Card",
    features: [
      {
        icon: PanelTop,
        title: "Physical Card",
        text: "Diam in arcu cursus euismod",
        free: "optional",
        premium: Check,
        gold: Check,
      },
      {
        icon: PanelLeftDashed,
        title: "Virtual Card",
        text: "Diam in arcu cursus euismod",
        free: "-",
        premium: "Up to 2",
        gold: "Unlimited",
      },
      {
        icon: Wifi,
        title: "Contactless Payments",
        text: "Diam in arcu cursus euismod",
        free: Check,
        premium: Check,
        gold: Check,
      },
      {
        icon: Wifi,
        title: "Contactless Payments",
        text: "Diam in arcu cursus euismod",
        free: Check,
        premium: Check,
        gold: Check,
      },
    ],
  },

  {
    title: "Bank Account",
    features: [
      {
        icon: Globe,
        title: "Free Payments Worldwide",
        text: "Diam in arcu cursus euismod",
        free: "-",
        premium: Check,
        gold: Check,
      },
      {
        icon: Landmark,
        title: "Free ATM Withdrawals",
        text: "Diam in arcu cursus euismod",
        free: "2",
        premium: "5",
        gold: "10",
      },
      {
        icon: Smartphone,
        title: "Mobile Banking",
        text: "Diam in arcu cursus euismod",
        free: Check,
        premium: Check,
        gold: Check,
      },
    ],
  },

  {
    title: "Extra Features",
    features: [
      {
        icon: Vault,
        title: "Saving Accounts",
        text: "Diam in arcu cursus euismod",
        free: "2",
        premium: "5",
        gold: "Unlimited",
      },
      {
        icon: ChartLine,
        title: "Advanced Statistics",
        text: "Diam in arcu cursus euismod",
        free: Check,
        premium: Check,
        gold: Check,
      },
      {
        icon: CircleStop,
        title: "Premium Partner Offers",
        text: "Diam in arcu cursus euismod",
        free: Check,
        premium: Check,
        gold: Check,
      },
    ],
  },
];
