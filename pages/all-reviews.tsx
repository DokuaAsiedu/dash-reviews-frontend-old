import React from "react";
import { GeneralLayout } from "@/layouts";
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { CreateReview, ReviewCard, Search, Tag } from "@/components";
import { useMemo, useState } from "react";
import { useDbProvider } from "@/providers/db-provider";
import Image from "next/image";

export default function AllReviews() {
  const locationName = "Bonny and Clyde Street, Ajao Estate, Lagos";
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState(locationName)
  const locationId = 0;

  const { reviews } = useDbProvider();
  const userName = "Jane Doe";
  const numOfReviews = useMemo(() => reviews.filter((item) => item.locationId === locationId).length, [reviews]);

  return (
    <GeneralLayout navbar={<Search value={searchInput} onChange={setSearchInput} />}>
      <div className="container flex flex-col items-stretch justify-start gap-2">
        <div className="flex flex-row items-center justify-start gap-2">
          <div>
            <h2 className="font-bold text-xl">{locationName}</h2>
            <p>
              <span className="font-bold">
                &ldquo;
                {numOfReviews}
                &rdquo; Reviews
              </span>{" "}
              (People are raving about the selected location)
            </p>
          </div>

          <div className="ms-auto">
            <button className="px-4 py-1 rounded-md bg-ultramarine-blue text-white" onClick={() => setShowModal(true)}>
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
          {reviews
            .filter((item) => item.locationId === locationId)
            .map((item) =>
              item.commentData.amenities.map((el, index) => {
                return <Tag key={`item-${index}`} name={el} />;
              }),
            )}
        </div>
      </div>

      <div className="container min-h-0 grid grid-cols-2">
        <div className="min-h-0 flex flex-col items-stretch justify-start overflow-y-auto hide-scrollbar *:border-b-[1px] *:border-b-black">
          {reviews
            .filter((item) => item.locationId === locationId)
            .map((item, index) => {
              return <ReviewCard key={`item-${index}`} review={item} />;
            })}
        </div>

        <div className="min-h-0 grid grid-cols-2 content-start gap-4 overflow-y-auto hide-scrollbar">
          {reviews
            .filter((item) => item.locationId === locationId)
            .map((item) =>
              // console.log(item.commentData.pictureUrls)
              item.commentData.pictureUrls.map((url, index) => {
                console.log(url, index);
                return (
                  <div key={`item-${index}`}>
                    <Image src={url} alt="image alt" width={64} height={64} className="" />
                  </div>
                );
              }),
            )}
        </div>
      </div>
      {showModal && <CreateReview openModal={setShowModal} />}
    </GeneralLayout>
  );
}
