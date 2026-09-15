"use client"
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter()
  return (
    <div>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-6 gap-15 ">
        <div className="w-full  ">
          <Link
            className="text-primary text-3xl font-dm-sans font-medium cursor-pointer"
            href={"/"}
          >
            banque.
          </Link>
        </div>
        <div className="xl:flex hidden justify-between gap-14 ">
          <div className=" w-full hidden xl:flex items-center gap-8 text-base">
            <Link href={"/features"} className="cursor-pointer"> Feature</Link>
            <button onClick={() => router.push("/compare")} className="flex items-center gap-1 cursor-pointer rounded-md py-2 px-3 bg-white/5">
              Compare <ChevronDown className="size-4 " />{" "}
            </button>
            <Link href={"/support"} className="cursor-pointer">
              Support
            </Link>
            <button className="flex items-center gap-1 rounded-md py-2 px-3 bg-white/5 cursor-pointer">
              Blog <ChevronDown className="size-4" />
            </button>
          </div>

          <div className=" w-full flex items-cente justify-end gap-8 ">
            <button className="text-shadow-primary text-lg cursor-pointer">
              Login
            </button>
            <button className="bg-primary rounded-md font-medium text-base text-white py-3 px-4 cursor-pointer whitespace-nowrap">
              Open Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
