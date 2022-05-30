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
      </SelectCustom>
      <SelectCustom>
        <option>All</option>
      </SelectCustom>
      <CheckBoxCustom label='Adults' />
      <SwitcherCustom 
        onClick={() => setEnableViewList!(!enableViewList)}
        label='Lista'
      />
    </>
  )
}
