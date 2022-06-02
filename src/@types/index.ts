import { ButtonHTMLAttributes, Dispatch, HTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, SetStateAction } from "react"

export type TypeButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  position?: string;
  zIndex?: string;
  mg?: string;
}

export type TypeInput = InputHTMLAttributes<HTMLInputElement>

export type TypeSelect = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode;
}

export type TypeCheckBoxCustom = InputHTMLAttributes<HTMLInputElement> & {
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

export type TypeDataPersons = {
  data: TypeUsers;
}
