import React, { HTMLAttributes } from 'react'
import { Switcher } from './styles'

export type typeCustomSwitcher = HTMLAttributes<HTMLInputElement> & {
  label: string;
}

export function CustomSwitcher({ label, ...props }: typeCustomSwitcher) {
  return (
    <Switcher>
      <input {...props} id="switch" type="checkbox" />
      <label htmlFor="switch">{label}</label>
    </Switcher>
  )
}
