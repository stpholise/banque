"use client";
// import Image from "next/image";

// import { useState } from "react";
// import clsx from "clsx";
// import Sidebar from "./_components/Sidebar";

import { Wallet, Landmark, TrendingUp } from "lucide-react";
import AccountCard from "./_components/AccountCard";
import clsx from "clsx";

interface Account {
  id: string;
  title: string;
  type: "checking" | "savings" | "investment";
  balance: number;
  accountNumber: string;
  icon: typeof Wallet | typeof Landmark | typeof TrendingUp;
  gradient: string;
}

const Page = () => {
  return (
    <div className=" px-8 py-12  flex flex-col gap-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {initialAccounts.map((account) => {
          return (
            <AccountCard
              key={account.id}
              title={account.title}
              accountNumber={account.accountNumber}
              balance={account.balance}
              type={account.type}
              icon={account.icon}
              gradient={account.gradient}
            />
          );
        })}
      </div>
      {/* sidbar */}

      <div className="flex gap-6  justify-center ">
        {stats.map((item, i) => (
          <div
            className="border flex-1 flex-col flex gap-2 bg-white border-gray-200 rounded-2xl p-5"
            key={i}
          >
            <h6 className="text-sm font-medium text-gray-500">{item.title}</h6>
            <h4 className="text-2xl font-medium text-black">{item.value}</h4>
            <p
              className={clsx(
                "text-sm",
                item.trend === "up"
                  ? "text-green-500"
                  : item.trend === "neutral"
                    ? "text-gray-500"
                    : "text-red-400",
              )}
            >
              {item.change}
            </p>
          </div>
        ))}
      </div>
      {/* main content */}
      <div className="flex flex-col w-full h-screen border-2  ">
        <div className="">spending overview</div>
        <div className="">recent transactions</div>
      </div>
    </div>
  );
};

export interface Transaction {
  id: string;
  accountId: string;
  type: "send" | "receive";
  amount: number;
  timestamp: string;
  description: string;
}

const initialAccounts: Account[] = [
  {
    id: "1",
    title: "Checking Account",
    type: "checking",
    balance: 12456.78,
    accountNumber: "**** **** **** 3456",
    icon: Wallet,
    gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
  },
  {
    id: "2",
    title: "Savings Account",
    type: "savings",
    balance: 45678.9,
    accountNumber: "**** **** **** 7890",
    icon: Landmark,
    gradient: "bg-gradient-to-br from-emerald-600 to-emerald-800",
  },
  {
    id: "3",
    title: "Investment Portfolio",
    type: "investment",
    balance: 78401.12,
    accountNumber: "**** **** **** 1234",
    icon: TrendingUp,
    gradient: "bg-gradient-to-br from-purple-600 to-purple-800",
  },
];
const stats = [
  {
    id: "total-balance",
    title: "Total Balance",
    value: "$136,536.8",
    change: "+2.5% from last month",
    trend: "up", // handy for coloring the change text green/red
  },
  {
    id: "monthly-income",
    title: "Monthly Income",
    value: "$8,400",
    change: "+5.2% increase",
    trend: "up",
  },
  {
    id: "monthly-spending",
    title: "Monthly Spending",
    value: "$3,890",
    change: "Within budget",
    trend: "neutral",
  },
  {
    id: "active-loans",
    title: "Active Loans",
    value: "3",
    change: "$315,900 total",
    trend: "neutral",
  },
];

export default Page;
