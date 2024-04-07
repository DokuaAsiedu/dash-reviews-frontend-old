import { ReviewCard } from "@/components";
import { DbContext } from "@/context";
import { GeneralLayout } from "@/layouts";
import { useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function Home() {
  const {db} = useContext(DbContext)

  return (
    <GeneralLayout >
      <div className="container h-full min-h-0 grid grid-cols-1 lg:grid-cols-2">
				<div className="w-4/5 flex flex-col items-start justify-center gap-4">
					<h1 className="text-4xl font-bold">Find a place you will love to live!</h1>

					<p>
						See through the lenses of people who have lived or visited the
						neighbourhood you might have in mind.
					</p>

					<div className="w-full py-4 px-2 flex flex-row items-center border-[1px] border-geyser bg-alice-blue rounded-md text-sm gap-2">
            <IoSearchOutline/>
						<input
							className="w-full bg-transparent outline-none"
							placeholder="Enter address"
						/>
					</div>

					<div>
						<button className="py-2 px-10 bg-ultramarine-blue text-white rounded-md capitalize">
							SEARCH
						</button>
					</div>
				</div>

				<div className="relative min-h-0 flex flex-col items-stretch justify-start bg-porcelain">
					{/* <div className="absolute z-[5] top-0 left-0 w-full h-16 backdrop-blur-sm"></div> */}

					<div className="relative grid grid-cols-2 gap-4 content-start overflow-y-auto hide-scrollbar">
						{db.map((item, index) => {
							return <ReviewCard key={`item-${index}`} itemData={item} />;
						})}
					</div>

					{/* <div className="absolute z-[5] bottom-0 left-0 w-full h-16 bg-transparent backdrop-blur-2xl"></div> */}
				</div>
			</div>
    </GeneralLayout>
  );
}
