import React from "react";

export function Tag({ name }: { name: string }) {
  return (
    <div className="px-2.5 py-1 border-[1px] border-dark-jungle-green rounded text-black bg-white text-center text-xs capitalize">
      <p>{name}</p>
    </div>
  );
}
