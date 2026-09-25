"use client";

import { Wallet } from "lucide-react";
import clsx from "clsx";

import {
  ArrowUpRight,
  ArrowDownLeft,
  Eye,
  EyeOff,
} from "@animateicons/react/lucide";
import { useState } from "react";

interface AccountCardProps {
  title: string;
  balance: number;
  accountNumber: string;
  type: "checking" | "savings" | "investment";
  icon: typeof Wallet;
  gradient: string;
}

const AccountCard = ({
  title,
  balance,
  accountNumber,
  type,
  gradient,
}: AccountCardProps) => {
  const [showBalance, setShowBalance] = useState(true);

 
  return (
    <div
      className={clsx(
        "  w-full shadow-sm px-6 py-8 rounded-2xl   flex flex-col gap-3",
        gradient,
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <h6 className=" text-gray-200 font-semibold text-sm">{type}</h6>
        <button
          className="cursor-pointer"
          type="button"
          onClick={() => setShowBalance((current) => !current)}
        >
          {showBalance ? <Eye size={17} /> : <EyeOff size={17} />}
        </button>
      </div>
      <div className="">
        <h4 className="font-medium text-3xl text-white py-2">
          {" "}
          {showBalance ? balance.toLocaleString() : "••••••"}
        </h4>
        <p className="text-xs text-gray-400">{accountNumber}</p>
      </div>
      <div className="flex gap-3 ">
        <button className="flex cursor-pointer items-center bg-gray-700/50 gap-2 rounded-md px-3 py-2">
          <ArrowUpRight size={18} />
          Send
        </button>
        <button className="flex cursor-pointer items-center bg-gray-700/50 gap-2 rounded-md px-3 py-2">
          <ArrowDownLeft size={18} /> Recieve
        </button>
      </div>
    </div>
  );
};

export default AccountCard;
