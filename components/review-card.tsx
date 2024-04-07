import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Avatar from "@/assets/avatar.svg"

export function ReviewCard({
	itemData: {
		commentData: {
			opName,
			likeCount,
			dislikeCount,
			commentCount,
			commentText,
			rating,
		},
	},
}) {
	const pathname = usePathname();

	return (
		<div
			className={`p-4 flex flex-col items-stretch justify-start ${
				pathname === "/" ? "bg-white rounded-xl" : "gap-2"
			}`}
		>
			<div className="flex flex-row items-center justify-start gap-2">
				<div className="">
					<Image src={Avatar} width={32} height={32} alt="pic" className="h-fit aspect-square rounded-full" />
				</div>

				<div
					className={`flex ${
						pathname === "/"
							? "flex-col items-start"
							: "flex-row items-center gap-2"
					}`}
				>
					<p className="font-bold">{opName}</p>
					<p className="text-xs">2 months ago</p>
				</div>

				{pathname === "/" ? (
					<div className="ms-auto">
						<p className="font-bold">Location</p>
						<div className="flex flex-row items-center">
							{[...Array(5).keys()].map((item, index) => (
								<AiFillStar
									key={`item-${index}`}
									className={`stroke-[30px] ${
										index <= rating ? "fill-yellow-300" : "fill-transparent"
									}`}
								/>
							))}
						</div>
					</div>
				) : (
					<div className="ms-auto flex flex-row items-center gap-2">
						<AiFillStar className="fill-yellow-300" />
						<p>{rating.toFixed(1)}</p>
					</div>
				)}
			</div>

			<div>
				<p>{commentText}</p>
			</div>

			<div className="flex flex-row items-center justify-start gap-3 text-sm">
				<div className="flex flex-row items-center justify-start gap-1">
					<AiOutlineLike />
					<p>{likeCount}</p>
				</div>

				<div className="flex flex-row items-center justify-start gap-1">
					<AiOutlineDislike />
					<p>{dislikeCount}</p>
				</div>

				<div className="flex flex-row items-center justify-start gap-1">
					<FaRegCommentAlt />
					<p>{commentCount}</p>
				</div>

				<div className="ms-auto px-2 py-px rounded-xl border-[1px] border-red-100 bg-red-300 text-xs">
					network
				</div>
			</div>
		</div>
	);
}
