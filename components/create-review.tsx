import { AMENITIES } from "@/constants";
import { DbContext } from "@/context";
import { useContext, useEffect, useRef, useState } from "react";
// import { createPortal } from "react-dom";
// import { createPortal } from "react-dom";
import { AiFillStar } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { AMENITIES } from "../constants";
// import { DbContext } from "../App";

export function CreateReview({ openModal }) {
	const [amenitiesOpen, setAmenitiesOpen] = useState(false);
	const [amenities, setAmenities] = useState([]);
	const [rating, setRating] = useState(null);
	const [review, setReview] = useState("");
	const [anon, setAnon] = useState(false);
	const [canSubmit, setCanSubmit] = useState(false);
	const starsRef = useRef([]);

	const { db, setDb } = useContext(DbContext);

	const locationId = 0;
	const locationName = "Bonny and Clyde Street, Ajao Estate, Lagos";
	const userName = "Jane Doe";

	const assignRef = (el, index) => {
		starsRef.current[index] = el;
	};

	const handleAmenitiesChange = (e) => {
		const val = e.target.value;
		const amenitiesCopy = [...amenities];

		if (amenities.includes(val)) {
			const indexOfVal = amenitiesCopy.indexOf(val);
			amenitiesCopy.splice(indexOfVal, 1);
		} else {
			amenitiesCopy.push(val);
		}

		setAmenities(amenitiesCopy);
	};

	const handleStarClick = (index) => {
		setRating(index + 1);

		starsRef.current.forEach((item, i) => {
			item.firstElementChild.classList.remove(
				"fill-transparent",
				"fill-yellow-400"
			);
			if (i <= index) {
				item.firstElementChild.classList.add("fill-yellow-400");
			} else {
				item.firstElementChild.classList.add("fill-transparent");
			}
		});

		// for (let i = 0; i <= index; i++) {
		// 	// console.log(starsRef.current[i].firstElementChild);
		// 	starsRef.current[i].firstElementChild.classList.add("fill-yellow-200");
		// }
	};

	const handleStarHover = (event?, index?) => {
		const eventType = event.type;
		// console.log(eventType);
		if (eventType === "mouseover") {
			for (let i = 0; i <= index; i++) {
				starsRef.current[i].firstElementChild.classList.add("fill-yellow-200");
				starsRef.current[i].firstElementChild.classList.remove(
					"fill-transparent"
				);
			}
		} else if (eventType === "mouseleave") {
			starsRef.current.forEach((item) => {
				item.firstElementChild.classList.remove("fill-yellow-200");
				item.firstElementChild.classList.add("fill-transparent");
			});
		}
		// console.log(starsRef.current);
	};

	const handleSubmit = () => {
		// console.log({ amenities, rating, review, anon });

		const data = {
			locationId,
			locationName,
			date: Date.now(),
			anon,
			commentData: {
				opName: userName,
				opId: 1,
				commentText: review,
				likeCount: 0,
				dislikeCount: 0,
				commentCount: 0,
				amenities,
				rating,
			},
		};

		setDb((prev) => {
			prev.push(data);
			localStorage.setItem("db", JSON.stringify(prev));
			return prev;
		});

		console.log("submitted successfully");
    console.log(data)
		openModal(false);
	};

	useEffect(() => {
		// console.log(amenities.length > 0, rating !== null, review.trim());
		if (amenities.length > 0 && rating !== null && review.trim().length > 0) {
			setCanSubmit(true);
		} else {
			setCanSubmit(false);
		}
	}, [amenities, rating, review]);

	// useEffect(() => {
	// 	console.log(starsRef);
	// }, [starsRef]);

	// useEffect(() => {
	// 	console.log(rating);
	// }, [rating]);

	useEffect(() => {
		console.log(db);
	}, [db]);

	return (
		<div className="fixed w-full h-full flex flex-col items-center justify-center">
			<div
				className="absolute z-10 w-full h-full bg-[#213449]/90"
				onClick={() => openModal(false)}
			></div>

			<div className="relative z-20 w-3/5 p-4 flex flex-col items-stretch justify-start gap-4 rounded-md bg-[#FAFCFD]">
				{amenitiesOpen && (
					<div
						className="absolute left-0 top-0 z-[5] h-full w-full bg-transparent"
						onClick={() => setAmenitiesOpen(false)}
					></div>
				)}

				<p className="self-center">Review Location</p>

				<h3 className="text-xl">Bonnie and Clyde Street, Ajao State, Lagos</h3>

				<div className=" bg-blue-100">
					<button
						onClick={() => {
							setAmenitiesOpen((prev) => !prev);
						}}
						className="w-full p-2 flex flex-row item-center justify-between"
					>
						<p className="truncate">
							{amenities.length > 0 ? amenities.join(", ") : "Select Amenities"}
						</p>
						<RiArrowDropDownLine />
					</button>
					{amenitiesOpen && (
						<div className="relative">
							<div className="absolute left-0 right-0 z-10 w-full p-2 grid grid-cols-5 content-start gap-y-4 bg-blue-100">
								{AMENITIES.map((item, index) => {
									return (
										<div
											key={`item-${index}`}
											className="flex flex-row items-center justify-start gap-2 text-sm"
										>
											<input
												id={`${item.value}`}
												type="checkbox"
												// ref={(e) => assignRef(e, index)}
												value={item.value}
												onChange={handleAmenitiesChange}
												checked={amenities.includes(item.value)}
											/>
											<label htmlFor={`${item.value}`}>{item.name}</label>
										</div>
									);
								})}
							</div>
						</div>
					)}
				</div>

				<div>
					<p>Rate Location</p>
					<div className="flex flex-row items-center justify-start gap-2">
						{[...Array(5).keys()].map((item, index) => {
							return (
								<div
									key={`item-${index}`}
									ref={(e) => {
										// console.log(e);
										assignRef(e, index);
									}}
								>
									<AiFillStar
										className="text-2xl stroke-[15px] fill-transparent"
										onMouseOver={(event) => handleStarHover(event, index)}
										onMouseLeave={handleStarHover}
										onClick={() => handleStarClick(index)}
									/>
								</div>
							);
						})}
					</div>
				</div>

				<div>
					<p>Write Review</p>
					<div>
						<textarea
							rows={3}
							className="w-full p-2 resize-none"
							value={review}
							onChange={(event) => setReview(event.target.value)}
						/>
					</div>
				</div>

				<div className="flex flex-row items-center gap-2">
					<input
						id="anon"
						type="checkbox"
						checked={anon}
						onChange={() => setAnon((prev) => !prev)}
					/>
					<label htmlFor="anon">Post as anonymous</label>
				</div>

				<div className="grid grid-cols-2 gap-2">
					<div>
						<button
							className="w-full py-2 bg-purple-400 border-[1px] border-purple-400 text-white  rounded-md disabled:cursor-not-allowed"
							onClick={handleSubmit}
							disabled={!canSubmit}
						>
							SUBMIT
						</button>
					</div>
					<div>
						<button
							className="w-full py-2 bg-white text-blue-500 border-[1px] border-blue-500 rounded-md"
							onClick={() => openModal(false)}
						>
							CANCEL
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
