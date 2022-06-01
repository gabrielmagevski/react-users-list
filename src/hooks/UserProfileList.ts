import { useEffect, useState } from "react";
import { TypeUsers } from "../@types";
import api from "../services/api";

export function useProfileList() {
  const[ usersList, setUsersList ] = useState<TypeUsers[]>([]);
  const[ loading, setLoading ] = useState(false);

  useEffect(() => {
    api.
      get(`/?results=12&gender=all`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => {
        setUsersList(response.data.results)
        setLoading(true);
      })
      .catch(console.log)
  },[])

  return {
    usersList,
    setUsersList, 
    loading, 
  }
}