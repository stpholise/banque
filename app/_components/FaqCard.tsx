"use client"
import { Plus, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

interface FaqCardProps{ 
  question: string;
  answer:string;
}

const FaqCard = ({  question, answer }: FaqCardProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-b-gray-100 text-gray-100 py-8 first:py-0 last:border-b-0">
      <div onClick={() => {setOpen((currentState) => !currentState)}} className="flex justify-between gap-12 font-dm-sans ">
        <h4 className="text-xl font-medium font-dm-sans">{question} </h4>
        {open ? <X /> : <Plus />}
      </div>
       <div className={clsx("pt-6",
        open? "block": 'hidden'
       )}>{answer}</div>
    </div>
  );
};

export default FaqCard;
