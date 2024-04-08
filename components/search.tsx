import React from "react";
import { IoSearchOutline, IoClose } from "react-icons/io5";

interface SearchProps {
  className?: string;
  iconClassName?: string;
  inputClassName?: string;
  value: string;
  onChange: (key: string) => void;
}

export function Search({ className, iconClassName, inputClassName, value, onChange }: SearchProps) {
  // className={`w-1/2 py-4 px-2 flex flex-row items-center gap-2 border-[1px]  ${pathname === "/all-reviews" ? "border-geyser bg-alabaster rounded-md" : "border-transparent"} text-sm`}>
  return (
    <div className={`flex items-center gap-3 rounded-md px-3 border-[1px] ${className ?? ""}`}>
      <IoSearchOutline className={iconClassName} />

      <input
        className={`w-full bg-transparent outline-none py-4 text-sm ${inputClassName ?? ""}`}
        placeholder="Enter address"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {value.length > 0 && <IoClose className="ms-auto" onClick={() => onChange("")} />}
    </div>
  );
}
