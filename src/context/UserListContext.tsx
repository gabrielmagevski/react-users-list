import { createContext, useState } from "react";
import { TypeUserListContext } from "../@types";
import { useProfileList } from "../hooks/UserProfileList";

export const UserListContext = createContext({} as TypeUserListContext);

export function UserListProvider({ children }: TypeUserListContext) {
  const[ enableViewList, setEnableViewList ] = useState(true);
  const {
    loading,
    setUsersList, 
    usersList,
    setGenderFilter,
    genderFilter,
    countryFilter,
    setCountryFilter,
    searchUser,
    setSearchUser,
  } = useProfileList();

  return (
    <UserListContext.Provider
     value={{
      enableViewList,
      setEnableViewList,
      loading,
      setUsersList, 
      usersList,
      setGenderFilter,
      genderFilter,
      countryFilter,
      setCountryFilter,
      searchUser,
      setSearchUser,
      }}
     >
      { children }
    </UserListContext.Provider>
  )

}