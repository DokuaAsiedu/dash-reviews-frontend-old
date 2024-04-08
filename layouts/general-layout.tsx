import React from "react";
import { Navbar } from "@/components";
import { inter } from "@/utils/fonts";

interface GeneralLayoutProps {
  children: React.ReactNode;
  navbarClassName?: string;
  navbarContent?: React.ReactNode;
}

export function GeneralLayout({ children, navbarClassName, navbarContent }: GeneralLayoutProps) {
  return (
    <div className={`h-full flex flex-col items-stretch overflow-hidden pb-4 ${inter.className}`}>
      <Navbar className={navbarClassName}>{navbarContent}</Navbar>

      {children}
    </div>
  );
}
