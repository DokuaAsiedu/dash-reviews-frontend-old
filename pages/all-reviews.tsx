import { GeneralLayout } from "@/layouts";
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { CreateReview, ReviewCard, Tag } from "@/components";
import { useContext, useEffect, useState } from "react";
import { DbContext } from "@/context";
import Image from "next/image";
import Avatar from "@/assets/avatar.svg"

export default function AllReviews() {
	const [showModal, setShowModal] = useState(false);
	const locationId = 0;

	const { db } = useContext(DbContext);
	const locationName = "Bonny and Clyde Street, Ajao Estate, Lagos";
	const userName = "Jane Doe";

	useEffect(() => {
		document.body.style.backgroundColor = "#FAFCFD";
	}, []);

	return (
		<GeneralLayout>
			<div className="container flex flex-col items-stretch justify-start gap-2">
				<div className="flex flex-row items-center justify-start gap-2">
					<div>
						<h2 className="font-bold">{locationName}</h2>
						<p>
							&ldquo;
							{db.filter((item) => item.locationId === locationId).length}
							&rdquo; Reviews (People are raving about the selected location)
						</p>
					</div>

					<div className="ms-auto">
						<button
							className="px-4 py-1 rounded-md bg-ultramarine-blue text-white"
							onClick={() => setShowModal(true)}
						>
							LEAVE A REVIEW
						</button>
					</div>

					<div>
						<button className="h-full p-2 rounded-md bg-white border-[1px] border-blue-200">
							<IoShareSocialOutline className="stroke-blue-200" />
						</button>
					</div>

					<div>
						<button className="h-full p-2 rounded-md bg-white border-[1px] border-blue-200">
							<CiBookmark className="stroke-blue-200 text-blue-200" />
						</button>
					</div>
				</div>

				<div className="px-2 flex flex-row items-center justify-start gap-4 overflow-x-scroll hide-scrollbar">
					{db
						.filter((item) => item.locationId === locationId)
						.map((item) =>
							item.commentData.amenities.map((item, index) => {
								return <Tag key={`item-${index}`} name={item} />;
							})
						)}
				</div>
			</div>

			<div className="container min-h-0 grid grid-cols-2">
				<div className="min-h-0 flex flex-col items-stretch justify-start overflow-y-auto hide-scrollbar *:border-b-[1px] *:border-b-black">
					{db
						.filter((item) => item.locationId === locationId)
						.map((item, index) => {
							return <ReviewCard key={`item-${index}`} itemData={item} />;
						})}
				</div>

				<div className="min-h-0 grid grid-cols-2 content-start gap-4 overflow-">
					{[...Array(4).keys()].map((item, index) => {
						return (
							<div key={`item-${index}`}>
								<Image src={Avatar} alt="image alt" width={32} height={32} className="min-h-0" />
							</div>
						);
					})}
				</div>
			</div>
			{showModal && <CreateReview openModal={setShowModal} />}
		</GeneralLayout>
	);
}
