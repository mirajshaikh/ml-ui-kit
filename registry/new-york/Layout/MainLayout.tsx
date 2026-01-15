import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "../blocks/sidebar/sidebar";
import { NavigationMenuDemo } from "../ui/header";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="flex items-center justify-between px-6 py-3 z-10 relative border-b">
          <SidebarTrigger />
          <NavigationMenuDemo />
        </div>
        <div className="p-6 -z-0 relative">{children}</div>
      </main>
    </SidebarProvider>
  );
}

export default MainLayout;
