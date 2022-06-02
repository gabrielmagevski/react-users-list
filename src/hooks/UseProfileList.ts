import { useEffect, useState } from "react";
import { TypeUsers } from "../@types";
import api from "../services/api";

export function useProfileList() {
  const[ usersList, setUsersList ] = useState<TypeUsers[]>([]);
  const[ loading, setLoading ] = useState(false);
  const [ genderFilter, setGenderFilter ] = useState('all');
  const [ countryFilter, setCountryFilter ] = useState('all');
  const [ searchUser, setSearchUser ] = useState('');

  const filteringUsers = usersList?.filter(usersFilter);

  function usersFilter(userFilter: TypeUsers) {
    const name = `
      ${userFilter.name.first.toLowerCase()}
      ${userFilter.name.last.toLowerCase()}
    `;
    if (searchUser === '') {
      return userFilter;
    } else if (
      name
        .trim()
        .toLocaleLowerCase()
        .match(new RegExp(searchUser, 'i'))
    ){
      return userFilter;
    }
  }


  useEffect(() => {
    api.
      get(`/?results=12&gender=${genderFilter}&nat=${countryFilter}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => {
        setUsersList(response.data.results)
        setLoading(true);
      })
      .catch(console.log)
  },[genderFilter, countryFilter])


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
    usersFilter,
    filteringUsers,
  }
}