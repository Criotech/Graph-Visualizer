"use client";

import * as React from "react";

import Image from "next/image";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavHeader() {
  const { open, toggleSidebar } = useSidebar();
  return (
    <SidebarMenu className="relative pl-4">
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="h-auto px-3.5 py-0 hover:bg-transparent data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Image src="/images/logo.png" alt="logo" width={30} height={30} />
          <div className="grid flex-1 text-left text-3xl leading-tight">
            <span className="truncate font-semibold">Astelia</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <div
        className={`absolute ${open ? "right-[-16px]" : "-right-8"} top-1/2 z-[100] -translate-y-1/2 transform`}
      >
        <Image
          src="/images/collapser.svg"
          alt="avatar"
          width={32}
          height={32}
          onClick={toggleSidebar}
          className={`cursor-pointer ${open ? "rotate-0 transform" : "rotate-180"}`}
        />
      </div>
    </SidebarMenu>
  );
}
