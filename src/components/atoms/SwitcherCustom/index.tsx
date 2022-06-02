import React, { HTMLAttributes } from 'react'
import { CustomSwitcher } from './styles'

export type typeCustomSwitcher = HTMLAttributes<HTMLInputElement> & {
  label: string;
}

export function SwitcherCustom({ label, ...props }: typeCustomSwitcher) {
  return (
    <CustomSwitcher>
      <input {...props} id="switch" type="checkbox" />
      <label htmlFor="switch">{label}</label>
    </CustomSwitcher>
  )
}
