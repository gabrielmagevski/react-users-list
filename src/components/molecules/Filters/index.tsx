import React, { useContext } from 'react'
import { UserListContext } from '../../../context/UserListContext'
import { CheckBoxCustom } from '../../atoms/CheckBoxCustom'
import { SelectCustom } from '../../atoms/SelectCustom'
import { SwitcherCustom } from '../../atoms/SwitcherCustom'

export function Filters() {
  const { enableViewList, setEnableViewList } = useContext(UserListContext);
  return (
    <>
      <SelectCustom>
        <option>All</option>
        <option>Male</option>
        <option>Female</option>
      </SelectCustom>
      <SelectCustom>
        <option>All</option>
        <option>Brazil</option>
        <option>France</option>
        <option>United States</option>
        <option>New Zealand</option>
      </SelectCustom>
      <CheckBoxCustom label='Adults' />
      <SwitcherCustom 
        onClick={() => setEnableViewList!(!enableViewList)}
        label='Lista'
      />
    </>
  )
}
