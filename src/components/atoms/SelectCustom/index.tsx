import React, { ReactNode, SelectHTMLAttributes } from 'react'
import { Select } from './styles';

export type TypeSelect = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode;
}


export function SelectCustom({ children, ...props }: TypeSelect) {
  return (
    <Select {...props}>
      {children}  
    </Select>
  )
}
