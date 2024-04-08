import { ReviewCard, Search } from "@/components";
import { useDbProvider } from "@/providers/db-provider";
import { GeneralLayout } from "@/layouts";
import React, { useState } from "react";

export default function Home() {
  const { reviews } = useDbProvider();
  const [searchKey, setSearchKey] = useState("");

  return (
    <GeneralLayout>
      <div className="container h-full grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold text-center">Find a place you will love to live!</h1>

          <p className="text-center">
            See through the lenses of people who have lived or visited the neighbourhood you might have in mind.
          </p>

          <Search className="border-geyser bg-alice-blue w-full" value={searchKey} onChange={setSearchKey} />

          <button className="py-2 px-10 bg-ultramarine-blue text-white rounded-md capitalize">SEARCH</button>
        </div>

        <div className="relative min-h-0 flex flex-col items-stretch justify-start">
          {/* <div className="absolute z-[5] top-0 left-0 w-full h-16 backdrop-blur-sm"></div> */}

          <div className="overflow-x-auto flex flex-nowrap gap-4">
            {reviews.map((review, index) => {
              return <ReviewCard key={`item-${index}`} review={review} />;
            })}
          </div>

          <div className="absolute top-0 -left-[1px] w-[calc(100%+2px)] h-full bg-gradient-to-r from-white via-transparent to-white pointer-events-none" />

          {/* <div className="absolute z-[5] bottom-0 left-0 w-full h-16 bg-transparent backdrop-blur-2xl"></div> */}
        </div>
      </div>
    </GeneralLayout>
  );
}
