import React from 'react'
import { typeCustomSwitcher } from '../../../@types'
import { CustomSwitcher } from './styles'

export function SwitcherCustom({ label }: typeCustomSwitcher) {
  return (
    <CustomSwitcher>
      <input id="switch" type="checkbox" />
      <label htmlFor="switch">{label}</label>
    </CustomSwitcher>
  )
}
