import { createContext, useEffect, useState } from "react";
import { DB_REVIEWS } from "@/migrations/db-reviews"

export const DbContext = createContext(null)

export function Context({children} : {children: React.ReactNode}) {
  const [db, setDb] = useState([])

  useEffect(() => {
		const storage = localStorage.getItem("db");

		if (!storage) {
			setDb(DB_REVIEWS);
		} else {
			setDb(JSON.parse(storage));
		}
	}, []);

  return (
    <DbContext.Provider value={{db, setDb}}>
      {children}
    </DbContext.Provider>
  )
}