"use client"
import Image from "next/image";
interface ChooseCardProps {
  title: string;
  heading: string;
  text: string;
  imageUrl: string;
  tag?: string;
  duration?: string;
  onClick: () => void;
}

const ChooseCard = ({
  title,
  heading,
  text,
  imageUrl,
  onClick,
  tag,
  duration,
}: ChooseCardProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center items-center gap-2">
        <h6 className="text-xl text-center font-medium  ">{title}</h6>
        {tag && <span className="px-1.5 p rounded-sm text-xs h-fit  bg-primary-light text-primary">{tag}</span>}
      </div>
      <div className=" w-10/12 text-center mx-auto">
        <div className="flex items-baseline mb-2 justify-center gap-2 text-center">
          <h5 className="text-3xl font-medium font-dm-sans">{heading}</h5>
          {duration && (
            <span className=" text-gray-500 text-base">{duration}</span>
          )}
        </div>
        <p className="text-gray-500 ">{text}</p>
      </div>
      <div className="w-full">
        <Image
          src={imageUrl}
          width={500}
          height={400}
          alt={"card"}
          className={""}
        />
      </div>
      <button onClick={onClick} className="w-full text-center font-medium font-dm-sans text-base py-2 px-4 rounded-lg bg-primary"> Get started</button>
    </div>
  );
};

export default ChooseCard;
