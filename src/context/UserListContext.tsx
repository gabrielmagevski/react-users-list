import { createContext, useState } from "react";
import { TypeUserListContext } from "../@types";

export const UserListContext = createContext({} as TypeUserListContext);

export function UserListProvider({ children }: TypeUserListContext) {
  const[ enableViewList, setEnableViewList ] = useState(true);

  return (
    <UserListContext.Provider
     value={{ enableViewList, setEnableViewList }}
     >
      { children }
    </UserListContext.Provider>
  )

}