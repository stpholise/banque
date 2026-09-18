import { Mail, Phone } from "lucide-react";

const MoreQuestions = () => {
  return (
    <div className="w-full text-primary-light">
      <div className="bg-primary flex-col xl:flex-row flex gap-8 md:gap-8 lg:gap-12 justify-between p-4 md:p-8 rounded-2xl">
        <div className="f">
          <h4 className="text-3xl font-medium font-dm-sans">
            Still have questions?
          </h4>
          <p className="text-lg">We are here to help.</p>
        </div>
        <div className=" flex   lg:flex-row lg:gap-12 items-start gap-8">
          <div className="flex items-center gap-3">
            <Phone className="bg-primary-light size-8 p-1.5 text-primary rounded-full" />
            <div className="">
              <h5 className=" text-lg font-medium font-dm-sans">+382983212</h5>
              <p className="text-sm text-gray-500 font-medium">
                Support Hotline
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="bg-primary-light size-8 p-1.5 text-primary rounded-full" />
            <div className="">
              <h5 className="text-lg font-medium font-dm-sans">
                help@banque.com
              </h5>
              <p className="text-sm text-gray-500 font-medium font-inter">
                Support Email
              </p>
            </div>
          </div>
        </div>
        <button className=" py-3 px-5 bg-black rounded-xl font-dm-sans whitespace-nowrap h-fit w-fit">
          {" "}
          Chat with us
        </button>
      </div>
    </div>
  );
};

export default MoreQuestions;
