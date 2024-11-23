import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
interface NavigationLayoutProps {
  children: ReactNode;
}
export default function NavigationLayout({children}:NavigationLayoutProps) {
  return (
    <div className="bg-amber-200 flex h-[100vh]">
      <Sidebar/>
      <div>{children}</div>
    </div>
  )
}