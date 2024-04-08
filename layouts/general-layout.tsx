import React from "react";
import { Navbar } from "@/components";
import { inter } from "@/utils/fonts";

interface GeneralLayoutProps {
  children: React.ReactNode;
  navbar?: React.ReactNode;
}

export function GeneralLayout({ children, navbar }: GeneralLayoutProps) {
  return (
    <div className={`h-full flex flex-col items-stretch justify-start gap-4 pb-4 ${inter.className}`}>

      <Navbar>{navbar}</Navbar>

      {children}
    </div>
  );
}
