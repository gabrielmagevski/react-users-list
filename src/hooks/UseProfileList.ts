import { useEffect, useState } from "react";
import api from "../services/api";

export type TypeUsers = {
  gender: string; 
  login: {
    uuid: string;
  }
  name: {
    first: string;
    last: string;
  }
  location: {
    country: string;  
    city: string;
    coordinates: {
      latitude: string;
      longitude: string;
    }
  }
  dob: {
    age: string; 
  }
  picture: {
    large: string;
  }
}

export function useProfileList() {
  const[ usersList, setUsersList ] = useState<TypeUsers[]>([]);
  const[ loading, setLoading ] = useState(false);
  const [ genderFilter, setGenderFilter ] = useState('all');
  const [ countryFilter, setCountryFilter ] = useState('all');
  const [ searchUser, setSearchUser ] = useState('');

  const filteringUsers = usersList?.filter(usersFilter);

  function usersFilter(userFilter: TypeUsers) {
    const name = `${userFilter.name.first.toLowerCase()} ${userFilter.name.last.toLowerCase()}`;
    if (searchUser === '') {
      return userFilter;
    } else if (name.toLowerCase().includes(searchUser)){
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