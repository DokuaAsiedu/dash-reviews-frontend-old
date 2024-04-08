import React from "react";
import Image from "next/image";
import Avatar from "@/assets/user-dps/pic-1.png";
import Link from "next/link";
import { lexendPeta } from "@/utils/fonts";

interface NavbarProps {
  className?: string;
  children: React.ReactNode;
}

export function Navbar({ children, className }: NavbarProps) {
  return (
    <div className={className ?? ""}>
      <div className="container py-4 flex flex-row items-center gap-2 sm:gap-6 text-onyx">
        <Link href="/">
          <div className="flex flex-row items-center gap-1 text-sm">
            <p className={`${lexendPeta.className} font-bold`}>SPOTTA</p>
            <span className="px-1 py-px text-white text-xs bg-cornflower">NG</span>
          </div>
        </Link>

        <div className="flex-1">{children}</div>

        <div className="ms-auto flex flex-row items-center justify-end gap-px sm:gap-2">
          <p className="hidden sm:block">Welcome!</p>
          <div className="self-stretch">
            <Image width={32} src={Avatar} alt="profile pic" className="h-full aspect-square rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
