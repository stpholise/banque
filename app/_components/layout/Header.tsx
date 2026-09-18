"use client";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

const Header = () => {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto flex items-center justify-between  lg:px-4 py-6 gap-15 ">
        <div className="w-full   md:px-0 ">
          <Link
            className="text-primary ml-4 text-3xl font-dm-sans font-medium cursor-pointer"
            href={"/"}
            transitionTypes={["slide-in"]}
          >
            banque.
          </Link>
        </div>

        <div className={"lg:flex hidden justify-between gap-14 "}>
          <div className=" w-full hidden xl:flex items-center gap-8 text-base">
            <Link href={"/features"} className="cursor-pointer">
              {" "}
              Feature
            </Link>
            <button
              onClick={() => router.push("/compare")}
              className="flex items-center gap-1 cursor-pointer rounded-md py-2 px-3 bg-white/5"
            >
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
        <button
          className="lg:hidden pr-4 "
          onClick={() => setOpenMenu((open) => !open)}
        >
          {openMenu ? <X size={32} /> : <Menu className="size-8" />}
        </button>

        {/* mobile menu */}
        <div
          onClick={() => setOpenMenu(false)}
          className={clsx(
            "fixed inset-y-0 left-0 z-50 w-full  bg-black/70 lg:hidden",
            openMenu ? "animate-show-menu" : "animate-remove-menu",
          )}
        >
          <div
            className={clsx(
              "lg:hidden overflow-hidden transition-all duration-300 fixed top-0 bg-primary text-primary-light w-full 2xs:w-10/12 md:w-1/2 px-6 pt-30 pb-10 z-50  min-h-screen ",
              openMenu ? "animate-show-menu" : "animate-remove-menu",
            )}
          >
            <nav className="max-w-6xl mx-auto px-4 pb-6 flex flex-col gap-8">
              <button
                className="lg:hidden pr-8 absolute top-5 right-4 "
                onClick={() => setOpenMenu((open) => !open)}
              >
                {<X size={40} />}
              </button>
              <Link href="/features" onClick={closeMenu}>
                Feature
              </Link>

              <button
                onClick={() => {
                  router.push("/compare");
                  closeMenu();
                }}
                className="flex items-center gap-1 self-start"
              >
                Compare
                <ChevronDown className="size-4" />
              </button>

              <Link href="/support" onClick={closeMenu}>
                Support
              </Link>

              <button className="flex items-center gap-1 self-start">
                Blog
                <ChevronDown className="size-4" />
              </button>

              <div className="flex flex-col justify-start items-start mt-10 gap-3 pt-4">
                <button className="text-lg">Login</button>

                <button className="bg-primary-light text-primary rounded-md font-medium  py-3 px-4">
                  Open Account
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
