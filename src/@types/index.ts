import { HTMLAttributes, ReactNode } from "react"

export type TypeButton = HTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
}

export type TypeInput = HTMLAttributes<HTMLInputElement>

export type TypeSelect = {
  children: ReactNode;
}
