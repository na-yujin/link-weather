import { ReactNode } from "react";
interface NavigationLayoutProps {
  children: ReactNode;
}
export default function NavigationLayout({children}:NavigationLayoutProps) {
  return (
    <div className="bg-amber-200 flex grow h-full">
      <div className="bg-amber-800">sidebar입니당</div>
      <div>{children}</div>
    </div>
  )
}