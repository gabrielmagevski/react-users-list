import { useEffect, useState } from "react";
import { TypeUsers } from "../@types";
import api from "../services/api";

export function useProfileList() {
  const[ usersList, setUsersList ] = useState<TypeUsers[]>([]);
  const[ loading, setLoading ] = useState(false);
  const [ genderFilter, setGenderFilter ] = useState('all');
  const [ countryFilter, setCountryFilter ] = useState('us');
  const [ searchUser, setSearchUser ] = useState('');

  useEffect(() => {
    api.
      get(`/?results=12&gender=${genderFilter}&nat=${countryFilter}&name=${searchUser}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => {
        setUsersList(response.data.results)
        setLoading(true);
      })
      .catch(console.log)
  },[genderFilter, countryFilter, searchUser])


  return {
    usersList,
    setUsersList, 
    loading, 
    setGenderFilter,
    genderFilter,
    countryFilter,
    setCountryFilter,
    searchUser,
    setSearchUser,
  }
}