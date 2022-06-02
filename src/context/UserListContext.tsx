import { 
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState 
} from "react";

import { TypeUsers, useProfileList } from "../hooks/UseProfileList";

export type TypeUserListContext = {
  children?: ReactNode;
  enableViewList?: boolean;
  setEnableViewList?: React.Dispatch<React.SetStateAction<boolean>>;
  loading?: boolean;
  setUsersList?: Dispatch<SetStateAction<TypeUsers[]>>;
  usersList?: TypeUsers[];
  setGenderFilter?: Dispatch<SetStateAction<string>>;
  genderFilter?: string;
  countryFilter?: string;
  setCountryFilter?: Dispatch<SetStateAction<string>>;
  searchUser?: string;
  setSearchUser?: Dispatch<SetStateAction<string>>;
  filteringUsers?: TypeUsers[];
  isAdult?: boolean;
  setIsAdult?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserListContext = createContext<TypeUserListContext>({});

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
    filteringUsers,
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
      filteringUsers,
    }}
     >
      { children }
    </UserListContext.Provider>
  )

}