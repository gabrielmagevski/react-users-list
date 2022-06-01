import { Dispatch, HTMLAttributes, InputHTMLAttributes, ReactNode, SetStateAction } from "react"

export type TypeButton = HTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  position?: string;
  zIndex?: string;
  mg?: string;
}

export type TypeInput = HTMLAttributes<HTMLInputElement>

export type TypeSelect = {
  children: ReactNode;
}

export type TypeCheckBoxCustom = {
  label: string;
}

export type typeCustomSwitcher = HTMLAttributes<HTMLInputElement> & {
  label: string;
}

export type TypeProfileImage = HTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  wd?: string;
  position?: string;
}

export type TypeUserListContext = {
  children?: ReactNode;
  enableViewList?: boolean;
  setEnableViewList?: React.Dispatch<React.SetStateAction<boolean>>;
  loading?: boolean;
  setUsersList?: Dispatch<SetStateAction<TypeUsers[]>>;
  usersList?: TypeUsers[];
}


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

export type TypeDataPersons = {
  data: TypeUsers;
}