import React, { InputHTMLAttributes } from 'react'
import { Input } from './styles';

export type TypeInput = InputHTMLAttributes<HTMLInputElement>

export function InputCustom({ ...props }: TypeInput) {
  return (
    <Input {...props} />
  )
}
