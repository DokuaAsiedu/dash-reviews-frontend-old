'use client'

import Image from "next/image";
import Avatar from "@/assets/user-dps/pic-1.png"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { lexendPeta } from "@/utils/fonts"
import { IoSearchOutline, IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import { DbContext } from "@/context";

export function NavBar() {
  // const { db } = useContext(DbContext)
	const pathname = usePathname();
  const locationId = 0
  // const loc = db.find(item => item.locationId === locationId)
  // console.log(loc)

  
  const [searchInput, setSearchInput] = useState("")


  const handleSearchInput = (e) => {
    const val = e.target.value

    setSearchInput(val)
  }

	return (
		<div className="container py-4 flex flex-row items-center justify-start gap-6 text-onyx">
			<Link href="/">
				<div className="flex flex-row items-center gap-1 text-sm">
					<p className={`${lexendPeta.className} font-bold`}>SPOTTA</p>
					<span className="px-1 py-px text-white text-xs bg-cornflower">NG</span>
				</div>
			</Link>

				<div className={`w-1/2 py-4 px-2 flex flex-row items-center gap-2 border-[1px]  ${pathname === "/all-reviews" ? "border-geyser bg-alabaster rounded-md" : "border-transparent"} text-sm`}>
          {pathname === "/all-reviews" ? (
            <>
              <IoSearchOutline className="text-ultramarine-blue"/>
              <input className="w-full bg-transparent outline-none" placeholder="Enter address" value={searchInput} onChange={handleSearchInput}/>
              {searchInput.length > 0 &&
                <IoClose className="ms-auto" onClick={() => setSearchInput("")}/>
              }
            </>
          )
          : <p>&nbsp;</p>
          }
				</div>

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
