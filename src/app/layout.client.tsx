"use client";

import Navbar from "@/components/parts/Navbar";
import { usePathname } from "next/navigation";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHiddenRoute = ["/login", "/register"].includes(pathname);

  return (
    <div className="flex min-h-screen">
      {!isHiddenRoute && <Navbar />}
      <main className={isHiddenRoute ? "" : "flex-1"}>{children}</main>
    </div>
  );
}
