import React, { InputHTMLAttributes } from 'react'
import { Input } from './styles';

export type TypeInput = InputHTMLAttributes<HTMLInputElement>

export function CustomInput({ ...props }: TypeInput) {
  return (
    <Input {...props} />
  )
}
