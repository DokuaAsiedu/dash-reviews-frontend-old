import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Avatar from "@/assets/avatar.svg";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({
  review: {
    locationName,
    commentData: { opName, likeCount, dislikeCount, commentCount, commentText, rating, anon, amenities },
  },
}: ReviewCardProps) {
  const pathname = usePathname();

  return (
    <div
      className={`p-4 flex flex-col items-stretch justify-start whitespace-normal min-w-[80%] ${pathname === "/" ? "bg-white rounded-xl" : "gap-2"}`}>
      <div className="flex flex-row items-center justify-start gap-2">
        <div className="">
          <Image src={Avatar} width={32} height={32} alt="pic" className="h-fit aspect-square rounded-full" />
        </div>

        <div className={`flex ${pathname === "/" ? "flex-col items-start" : "flex-row items-center gap-2"}`}>
          <p className="font-bold">{anon ? "Anonymous" : opName}</p>
          <p className="text-xs">2 months ago</p>
        </div>

        {pathname === "/" ? (
          <div className="ms-auto">
            <p className="text-xs font-bold">{locationName.split(" ").slice(-2).join(" ")}</p>
            <div className="flex flex-row items-center">
              {[...Array(5).keys()].map((item, index) => (
                <AiFillStar
                  key={`item-${index}`}
                  className={`stroke-[30px] ${index <= rating ? "fill-golden" : "fill-transparent"}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="ms-auto flex flex-row items-center gap-2">
            <AiFillStar className="fill-golden" />
            <p>{rating.toFixed(1)}</p>
          </div>
        )}
      </div>

      <div>
        <p>{commentText}</p>
      </div>

      <div className="flex flex-row items-center justify-start gap-3 text-base">
        <div className="flex flex-row items-center justify-start gap-1">
          <AiFillLike
            className={`${pathname === "/" ? "fill-grey-goose" : "fill-transparent stroke-[50px] stroke-down-river"}`}
          />
          <p>{likeCount}</p>
        </div>

        <div className="flex flex-row items-center justify-start gap-1">
          <AiFillDislike
            className={`${pathname === "/" ? "fill-grey-goose" : "fill-transparent stroke-[50px] stroke-down-river"}`}
          />
          <p>{dislikeCount}</p>
        </div>

        <div className="flex flex-row items-center justify-start gap-1">
          <FaCommentAlt
            className={`${pathname === "/" ? "fill-grey-goose" : "fill-transparent stroke-[50px] stroke-down-river"}`}
          />
          <p>{commentCount}</p>
        </div>

        {pathname === "/" && (
          <div className="ms-auto px-2 py-px rounded-xl border-[1px] border-red-900 bg-red-200 text-xs">
            {amenities[0]}
          </div>
        )}
      </div>
    </div>
  );
}
