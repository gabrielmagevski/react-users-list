import React from 'react'
import { TypeInput } from '../../../@types'

import { Input } from './styles';

export function InputCustom({ ...props }: TypeInput) {
  return (
    <Input {...props} />
  )
}
