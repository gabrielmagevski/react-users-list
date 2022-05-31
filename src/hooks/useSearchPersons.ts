import { useEffect, useState } from "react";
import { TypeUsers } from "../@types";
import api from "../services/api";

export function useSearchPersons() {
  const[ usersList, setUsersList ] = useState<TypeUsers[]>([]);

  useEffect(() => {
    api.
      get(`/?results=12`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => setUsersList(response.data.results))
      .catch(console.log)
  },[])

  return { usersList, setUsersList }
}