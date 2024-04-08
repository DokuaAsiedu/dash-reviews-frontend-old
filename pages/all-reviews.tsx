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
  const [searchInput, setSearchInput] = useState(locationName);
  const locationId = 0;

  const { reviews } = useDbProvider();
  const userName = "Jane Doe";
  const numOfReviews = useMemo(() => reviews.filter((item) => item.locationId === locationId).length, [reviews]);

  return (
    <GeneralLayout
      navbarClassName="bg-alice-blue"
      navbarContent={<Search value={searchInput} onChange={setSearchInput} className="max-w-screen-sm" />}>
      <div className="flex-1 overflow-auto">
        <div className="bg-alice-blue">
          <div className="container flex flex-col items-stretch justify-start gap-2 pb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="flex flex-col gap-1 md:gap-0">
                <h2 className="font-bold text-2xl">{locationName}</h2>

                <p>
                  <span className="font-semibold">
                    &ldquo;
                    {numOfReviews}
                    &rdquo; Reviews
                  </span>{" "}
                  (People are raving about the selected location)
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="px-4 sm:px-8 py-3 rounded bg-ultramarine-blue text-white"
                  onClick={() => setShowModal(true)}>
                  LEAVE A REVIEW
                </button>

                <button className="p-3.5 rounded bg-white border-[1px] border-ultramarine-blue">
                  <IoShareSocialOutline className="stroke-ultramarine-blue" />
                </button>

                <button className="p-3.5 rounded bg-white border-[1px] border-ultramarine-blue">
                  <CiBookmark className="stroke-ultramarine-blue text-ultramarine-blue" />
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center justify-start gap-2 overflow-x-scroll hide-scrollbar">
              {reviews
                .filter((item) => item.locationId === locationId)
                .map((item) => item.commentData.amenities.map((el) => el))
                .flat()
                .filter((item, index, self) => index === self.indexOf(item))
                .map((item, index) => {
                  return <Tag key={`item-${index}`} name={item} />;
                })}
            </div>
          </div>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          <div className="col-span-2 flex flex-col justify-start order-2 md:order-1">
            {reviews
              .filter((item) => item.locationId === locationId)
              .map((item, index) => {
                return <ReviewCard key={`item-${index}`} review={item} />;
              })}
          </div>

          <div className="col-span-1 order-1 md:order-2 grid grid-cols-2 gap-4">
            {reviews
              .filter((item) => item.locationId === locationId)
              .reduce((imgs, review) => [...imgs, ...review.commentData.pictureUrls], [] as string[])
              .map((imgUrl, idx) => {
                return (
                  <div key={idx} className="w-full aspect-square overflow-hidden rounded relative">
                    <img src={imgUrl} alt="image alt" className="w-full h-full object-cover" />

                    {idx === 3 && (
                      <div className="absolute top-0 left-0 w-full h-full bg-black/50 grid place-items-center z-[1]">
                        <p className="text-center uppercase text-white">View More</p>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {showModal && <CreateReview openModal={setShowModal} />}
    </GeneralLayout>
  );
}
