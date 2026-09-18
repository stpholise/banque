import { Check } from "lucide-react";

interface SectionIntroProps {
  title: string;
  heading: string;
  text: string;
  list: string[];
}

const SectionIntro = ({ title, heading, text, list }: SectionIntroProps) => {
  return (
    <div className="flex gap-10 flex-col   w-ful justify-between">
      <div className="flex flex-col gap-4 justify-start w-full  xl:w-139  text-start">
        <h6 className="font-dm-sans text-xl  font-medium">{title}</h6>
        <h2 className="text-5xl font-medium font-dm-sans pr-4">{heading}</h2>
        <p className="text-xl font-medium font-inter">{text}</p>
      </div>
      <div className="flex flex-col gap-4">
        {list.map((items, i) => (
          <div className="flex gap-2 items-center text-lg" key={i}>
            <Check className="size-5 p-0.5 rounded-full text-white bg-primary " />
            <span className="">{items}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionIntro;
