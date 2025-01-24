"use client";

import * as React from "react";
import { NavMain } from "@/components/sidebar/NavMain";
import { NavUser } from "@/components/sidebar/NavUser";
import { NavHeader } from "@/components/sidebar/NavHeader";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

import { Separator } from "../ui/separator";
import {
  MenuItem1,
  MenuItem2,
  MenuItem3,
  MenuItem4,
  MenuItem5,
  MenuItem6,
  MenuItem7,
} from "../icons";

const data = {
  user: {
    name: "Lorem",
    email: "Lorem",
    avatar: "",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: MenuItem1,
      isActive: true,
    },
    {
      title: "Models",
      url: "#",
      icon: MenuItem2,
    },
    {
      title: "Documentation",
      url: "#",
      icon: MenuItem3,
    },
    {
      title: "Settings",
      url: "#",
      icon: MenuItem4,
    },
    {
      title: "Playground",
      url: "#",
      icon: MenuItem5,
    },
    {
      title: "Models",
      url: "#",
      icon: MenuItem6,
    },
    {
      title: "Documentation",
      url: "#",
      icon: MenuItem7,
    },
    {
      title: "Lorem",
      url: "#",
      icon: MenuItem6,
    },
    {
      title: "Lorem",
      url: "#",
      icon: MenuItem7,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();
  return (
    <Sidebar
      className={!open ? "items-center" : ""}
      collapsible="icon"
      {...props}
    >
      <SidebarHeader className="p-0 pt-7">
        <NavHeader />
      </SidebarHeader>
      <SidebarContent className="mt-[30px]">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <Separator />

        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
