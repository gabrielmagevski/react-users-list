import React from 'react'
import { typeCustomSwitcher } from '../../../@types'
import { CustomSwitcher } from './styles'

export function SwitcherCustom({ label, ...props }: typeCustomSwitcher) {
  return (
    <CustomSwitcher>
      <input {...props} id="switch" type="checkbox" />
      <label htmlFor="switch">{label}</label>
    </CustomSwitcher>
  )
}
