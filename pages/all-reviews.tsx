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
    <GeneralLayout navbar={<Search value={searchInput} onChange={setSearchInput} className="max-w-screen-sm" />}>
      <div className="container flex flex-col items-stretch justify-start gap-2">
        <div className="grid grid-cols-1 md:flex md:flex-row items-center justify-start gap-2">
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

          <div className="md:ms-auto flex flex-row gap-2">
            <div>
              <button className="px-4 py-1 rounded-md bg-ultramarine-blue text-white" onClick={() => setShowModal(true)}>
                LEAVE A REVIEW
              </button>
            </div>

            <div>
              <button className="h-full p-2 rounded-md bg-white border-[1px] border-ultramarine-blue">
                <IoShareSocialOutline className="stroke-ultramarine-blue" />
              </button>
            </div>

            <div>
              <button className="h-full p-2 rounded-md bg-white border-[1px] border-ultramarine-blue">
                <CiBookmark className="stroke-ultramarine-blue text-ultramarine-blue" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-2 flex flex-row items-center justify-start gap-4 overflow-x-scroll hide-scrollbar">
          {reviews
            .filter((item) => item.locationId === locationId)
            .map((item) => item.commentData.amenities.map(el => el))
            .flat()
            .filter((item, index, self) => index === self.indexOf(item))
            .map((item, index) => {
              return <Tag key={`item-${index}`} name={item} />;
            })
          }
        </div>
      </div>

      <div className="container flex flex-col max-md:flex-col-reverse md:flex-row">
        <div className="min-h-0 md:flex-1 flex flex-col items-stretch justify-start *:border-b-[1px] *:border-b-black">
          {reviews
            .filter((item) => item.locationId === locationId)
            .map((item, index) => {
              return <ReviewCard key={`item-${index}`} review={item} />;
            })}
        </div>

        <div className="min-h-0 md:flex-1 flex flex-row md:grid md:grid-cols-2 md:content-start gap-4 max-md:overflow-x-auto hide-scrollbar">
          {reviews
            .filter((item) => item.locationId === locationId)
            .map((item) =>
              item.commentData.pictureUrls.map((url, index) => {
                return (
                  <div key={`item-${index}`}>
                    <Image src={url} alt="image alt" width={64} height={64} className="w-" />
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
