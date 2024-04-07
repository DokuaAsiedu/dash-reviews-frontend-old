'use client'

import Image from "next/image";
import Avatar from "@/assets/avatar.svg"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { lexendPeta } from "@/utils/fonts"

export function NavBar() {
	const pathname = usePathname();
  console.log(pathname)

	return (
		<div className="container py-4 flex flex-row items-center justify-start gap-6">
			<Link href="/">
				<div className="flex flex-row items-center gap-1 text-sm">
					<p className={`${lexendPeta.className}`}>SPOTTA</p>
					<span className="px-1 py-px text-white text-xs bg-blue-700">NG</span>
				</div>
			</Link>

			{/* {pathname === "/all-reviews" && ( */}
				<div className="w-1/2">
					<input
						className="w-full py-4 px-2 rounded-md text-sm border-[1px] border-gray-100 bg-white"
						placeholder="Enter address"
					/>
				</div>
			{/* )} */}

			<div className="ms-auto flex flex-row items-center justify-end gap-2">
				<p>Welcome!</p>
				<div>
					<Image
						width={32}
						src={Avatar}
						alt="profile pic"
						className="h-full aspect-square rounded-full"
					/>
				</div>
			</div>
		</div>
	);
}
