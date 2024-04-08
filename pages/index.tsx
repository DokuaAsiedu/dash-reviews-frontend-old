import { ReviewCard, Search } from "@/components";
import { useDbProvider } from "@/providers/db-provider";
import { GeneralLayout } from "@/layouts";
import React, { useState } from "react";

export default function Home() {
  const { reviews } = useDbProvider();
  const [searchKey, setSearchKey] = useState("");

  return (
    <GeneralLayout>
      <div className="container min-h-0 grid grid-cols-1 lg:grid-cols-2 max-lg:gap-8">
        <div className="lg:w-4/5 flex flex-col items-center lg:items-start justify-center gap-4 max-lg:text-center">
          <h1 className="text-4xl font-bold">Find a place you will love to live!</h1>

          <p className="">
            See through the lenses of people who have lived or visited the neighbourhood you might have in mind.
          </p>

          <Search className="border-geyser bg-alice-blue w-full" value={searchKey} onChange={setSearchKey} />

          <button className="py-2 px-10 bg-ultramarine-blue text-white rounded-md capitalize">SEARCH</button>
        </div>

        <div className="relative min-h-0 grid grid-cols-1">

          <div className="min-h-0 max-lg:overflow-x-auto lg:overflow-y-auto flex flex-row lg:grid lg:grid-cols-2 gap-4 hide-scrollbar">
            {reviews.filter((item, index) => index <= 6).map((review, index) => {
              return <ReviewCard key={`item-${index}`} review={review} />;
            })}
          </div>

          <div className="absolute top-0 -left-[1px] w-[calc(100%+2px)] h-full bg-gradient-to-r lg:bg-gradient-to-b from-white from-1% via-transparent via-50% to-white to-99% pointer-events-none" />
        </div>
      </div>
    </GeneralLayout>
  );
}
