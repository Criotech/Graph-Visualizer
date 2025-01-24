import "@/styles/globals.css";

import { AppSidebar } from "@/components/sidebar/AppSidebar";
import DashboardContent from "@/components/DashboardContent";
import { Public_Sans } from "next/font/google";

import {  Metadata } from "next";
import {
  SidebarProvider,
} from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Graph Visualizer",
  description: "Graph Visualizer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const publicSans = Public_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${publicSans.className}`}>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <DashboardContent>{children}</DashboardContent>
        </SidebarProvider>
      </body>
    </html>
  );
}
