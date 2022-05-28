import React from 'react'
import { ButtonCustom } from '../../atoms/ButtonCustom'
import { CheckBoxCustom } from '../../atoms/CheckBoxCustom'
import { InputCustom } from '../../atoms/InputCustom'
import { SelectCustom } from '../../atoms/SelectCustom'
import { SwitcherCustom } from '../../atoms/SwitcherCustom'
import { GroupFilter, GroupSearch, Header } from './styles'

export function HeaderFilter() {
  return (
    <>
    <Header>
     <GroupSearch>
        <InputCustom placeholder='Search users...' />
        <ButtonCustom>
          Search
        </ButtonCustom>
      </GroupSearch>
    </Header>

    <GroupFilter>
      <SelectCustom>
        <option>All</option>
      </SelectCustom>
      <SelectCustom>
        <option>All</option>
      </SelectCustom>
      <CheckBoxCustom label='Adults' />
      <SwitcherCustom label='Lista' />
    </GroupFilter>
    </>
  )
}
