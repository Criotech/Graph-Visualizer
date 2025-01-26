import { SidebarInset } from "@/components/ui/sidebar";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-4 bg-background px-3 md:px-9">
        {children}
      </div>
    </SidebarInset>
  );
}
