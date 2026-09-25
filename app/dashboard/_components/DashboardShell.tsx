"use client";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";

import { useState } from "react";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <Sidebar sidebarOpen={sidebarOpen} />

      <div className="flex flex-1 flex-col">
        <DashboardHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main>{children}</main>
      </div>
    </div>
  );
}