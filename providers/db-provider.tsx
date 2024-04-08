import React, { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { DB_REVIEWS } from "@/data/db-reviews";

interface DbContextProps {
  reviews: Review[];
  updateReviews: (reviews: Review[]) => void;
}

export const DbContext = createContext<DbContextProps>(null as never);

export function DbProvider({ children }: { children: React.ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const storage = localStorage.getItem("db");

    if (!storage) {
      setReviews(DB_REVIEWS);
    } else {
      setReviews(JSON.parse(storage));
    }
  }, []);

  return (
    <DbContext.Provider
      value={{
        reviews: reviews,
        updateReviews: setReviews,
      }}>
      {children}
    </DbContext.Provider>
  );
}

export function useDbProvider() {
  return useContext(DbContext);
}
