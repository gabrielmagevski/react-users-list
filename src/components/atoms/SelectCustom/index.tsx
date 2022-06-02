import React from 'react'
import { TypeSelect } from '../../../@types';
import { Select } from './styles';

export function SelectCustom({ children, ...props }: TypeSelect) {
  return (
    <Select {...props}>
      {children}  
    </Select>
  )
}
