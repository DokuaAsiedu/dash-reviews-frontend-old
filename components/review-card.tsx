import React, { useMemo } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import Avatar from "@/assets/avatar.svg";

interface ReviewCardProps {
  review: Review;
  showAllStars?: boolean;
  showAmenity?: boolean;
  wrapperClassName?: string;
  headerClassName?: string;
  likeClassName?: string;
  dislikeClassName?: string;
  commentClassName?: string;
}

export function ReviewCard({
  review: {
    locationName,
    commentData: { opName, likeCount, dislikeCount, commentCount, commentText, rating, anon, amenities },
  },
  showAllStars,
  showAmenity,
  wrapperClassName,
  headerClassName,
  likeClassName,
  dislikeClassName,
  commentClassName,
}: ReviewCardProps) {

  const formattedOpName = useMemo(() => {
    return (
      opName
        .split(" ")
        .map((part, idx) => {
          if (idx > 0) return part[0];
          return part;
        })
        .join(" ") + "."
    );
  }, [opName]);

  return (
    <div
      className={`min-w-[80%] p-4 flex flex-col items-stretch justify-start whitespace-normal border-b-[1px] border-b-gray-200 ${wrapperClassName}`}>
      <div className="flex flex-row items-center justify-start gap-2">
        <Image src={Avatar} width={32} height={32} alt="pic" className="h-fit aspect-square rounded-full" />

        <div
          className={`flex ${headerClassName}`}>
          <p className="font-bold">{anon ? "Anonymous" : formattedOpName}</p>
          <p className="text-xs">2 months ago</p>
        </div>

        {showAllStars ? (
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

      <div className="mt-auto flex flex-row items-center justify-start gap-3 text-base">
        <div className="flex flex-row items-center justify-start gap-1">
          <AiFillLike
            className={`${likeClassName}`}
          />
          <p>{likeCount}</p>
        </div>

        <div className="flex flex-row items-center justify-start gap-1">
          <AiFillDislike
            className={`${dislikeClassName}`}
          />
          <p>{dislikeCount}</p>
        </div>

        <div className="flex flex-row items-center justify-start gap-1 ms-6">
          <FaCommentAlt
            className={`${commentClassName}`}
          />
          <p>{commentCount}</p>
        </div>

        {showAmenity && (
          <div className="ms-auto px-2 py-px rounded-xl border-[1px] border-red-900 bg-red-200 text-xs">
            {amenities[0]}
          </div>
        )}
      </div>
    </div>
  );
}
