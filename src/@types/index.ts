import { HTMLAttributes, ReactNode } from "react"

export type TypeButton = HTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
}

export type TypeInput = HTMLAttributes<HTMLInputElement>

export type TypeSelect = {
  children: ReactNode;
}

export type TypeCheckBoxCustom = {
  label: string;
}

export type typeCustomSwitcher = {
  label: string;
}

export type TypeProfileImage = HTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  wd?: string;
}
