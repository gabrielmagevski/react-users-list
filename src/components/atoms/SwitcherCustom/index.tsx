import React from 'react'
import { CustomSwitcher } from './styles'

export function SwitcherCustom() {
  return (
    <CustomSwitcher>
      <input id="switch" type="checkbox" />
      <label htmlFor="switch">Lista</label>
    </CustomSwitcher>
  )
}
