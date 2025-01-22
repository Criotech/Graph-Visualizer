import "@/styles/globals.css";

import { AppSidebar } from "@/components/AppSidebar";
import DashboardContent from "@/components/DashboardContent";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Graph Visualizer",
  description: "Graph Visualizer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <DashboardContent />
        </SidebarProvider>
      </body>
    </html>
  );
}
