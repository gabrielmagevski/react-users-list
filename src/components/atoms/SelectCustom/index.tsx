import React from 'react'
import { TypeSelect } from '../../../@types';
import { Select } from './styles';

export function SelectCustom({ children }: TypeSelect) {
  return (
    <Select name="All">
      {children}  
    </Select>
  )
}
