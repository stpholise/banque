import FaqCard from "../FaqCard";
import { Phone, Mail, ArrowRight } from "lucide-react";

const HelpSection = () => {
  return (
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
                question={question.question}
                answer={question.answer}
              />
            ))}
          </div>
        </div>
      </div>
  )
}

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

export default HelpSection