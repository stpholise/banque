import { Dispatch, SetStateAction } from "react";
 import { Bell } from "@animateicons/react/lucide";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

const DashboardHeader = ({sidebarOpen, setSidebarOpen}: {sidebarOpen: boolean, setSidebarOpen : Dispatch<SetStateAction<boolean>>}) => {
  return (
    <div className="h-16 border-b w-full border-gray-500 px-4 flex items-center justify-between">
          <div className="flex flex-row items-center gap-6">
            <button
              onClick={() => setSidebarOpen((sidebar) => !sidebar)}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
            >
              {sidebarOpen ? (
                <PanelLeftClose size={20} />
              ) : (
                <PanelLeftOpen size={20} />
              )}
            </button>
            <div className="">
              <h4 className="text-3xl text-white mb-1 font-dm-sans">
                Welcome back, <span className="capitalize">User</span>
              </h4>
              <p className="font-inter text-sm">
                Here&apos;s your financial overview
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="">
              <Bell size={18} />
            </div>
            <h3 className="size-12 rounded-full text-xl font-semibold bg-primary/30 text-white uppercase flex items-center justify-center">
              0l
            </h3>
          </div>
        </div>
  )
}

export default DashboardHeader