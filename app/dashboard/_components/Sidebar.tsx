import {
  LayoutDashboard,
  DollarSign,
  CreditCard,
  Wallet,
  TrendingUp,
  Settings,
  LogOut,
} from "@animateicons/react/lucide";
import clsx from "clsx";

const Sidebar = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
  return (
    <aside
      className={clsx(
        "sidebar sticky top-0 bottoom-0  h-screen border-r border-r-gray-500 transition-all duration-300 flex flex-col gap-3 ",
        sidebarOpen ? "w-64" : "w-20",
      )}
    >
      <div className=" border-b border-b-gray-500 py-8  px-4 tex-gray-300 ">
        <div className="flex items-center gap-3">
          {/* <div className="font-dm-sans text-primary text-2xl">
             banque
            </div> */}

          {sidebarOpen && (
            <div className="">
              <h5 className="text-2xl mb-1 font-dm-sans text-primary font-medium">
                Banque
              </h5>
              <p className=" text-sm font-medium">Premium Account</p>
            </div>
          )}
        </div>
      </div>
      <div className=" flex flex-col gap-2 px-4 py-6">
        {navigationItems.map((page, i) => {
          const Icon = page.icon;
          return (
            <button
              className={clsx(
                "flex p-2 first:bg-primary rounded-md gap-2 hover:bg-gray-200 hover:text-primary transition duration-300 ease-in-out ",
              )}
              key={i}
            >
              <Icon size={22} className="" />
              <span className={clsx("", sidebarOpen ? " flex" : " hidden")}>
                {page.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className=" flex border-t border-t-gray-500 flex-col gap-2 px-4 py-8 mt-auto ">
        {managementNav.map((page, i) => {
          const Icon = page.icon;
          return (
            <button
              className={clsx(
                "flex p-2   last:text-red-400 rounded-md gap-2 hover:bg-gray-200 hover:text-primary transition duration-300 ease-in-out ",
              )}
              key={i}
            >
              <Icon size={22} className="" />
              <span className={clsx("", sidebarOpen ? " flex" : " hidden")}>
                {page.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "payments", label: "Payments", icon: DollarSign },
  { id: "cards", label: "Cards", icon: CreditCard },
  { id: "investments", label: "Investments", icon: TrendingUp },
  { id: "loans", label: "Loans", icon: Wallet },
];

const managementNav = [
  { id: "settings", label: "Settings", icon: Settings },
  { id: "logout", label: "Logout", icon: LogOut },
];
export default Sidebar;
