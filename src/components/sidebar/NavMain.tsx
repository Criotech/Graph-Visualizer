"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const { open } = useSidebar();
  return (
    <SidebarGroup
      className={`flex h-full flex-col justify-between px-${open ? "4" : "2"}`}
    >
      <SidebarMenu className="gap-1.5">
        {items.slice(0, -2).map((item, i) => (
          <SidebarMenuItem key={i}>
            <SidebarMenuButton
              tooltip={item.title}
              className={`h-auto rounded-lg px-3 py-2.5 hover:bg-[#E9FAF0] ${item.isActive ? "bg-[#E9FAF0]" : ""}`}
            >
              <div className="flex items-center gap-2">
                {item.icon && (
                  <item.icon
                    className={`inline-block size-5 ${item.isActive ? "fill-black/90" : "fill-[#A3A9B6]"}`}
                  />
                )}
                <span className="text-[15px] leading-[22px] text-[#525D73]">
                  {item.title}
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      <SidebarMenu className="gap-1.5">
        {items.slice(-2).map((item, i) => (
          <SidebarMenuItem key={i}>
            <SidebarMenuButton
              tooltip={item.title}
              className={`h-auto rounded-lg px-3 py-2.5 hover:bg-[#E9FAF0] ${item.isActive ? "bg-[#E9FAF0]" : ""}`}
            >
              <div className="flex items-center gap-2">
                {item.icon && (
                  <item.icon
                    className={`inline-block size-5 ${item.isActive ? "fill-black/90" : "fill-[#A3A9B6]"}`}
                  />
                )}
                <span className="text-[15px] leading-[22px] text-[#525D73]">
                  {item.title}
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
