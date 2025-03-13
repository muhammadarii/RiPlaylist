"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hiddenSidebarRoutes = ["/login", "/register"];

  return (
    <div className="flex min-h-screen">
      {!hiddenSidebarRoutes.includes(pathname) && <Sidebar />}
      <main className="flex-1">{children}</main>
    </div>
  );
}
