import React from 'react'
import { ButtonCustom } from '../../atoms/ButtonCustom'
import { InputCustom } from '../../atoms/InputCustom'
import { GroupSearch } from './styles'

export function Search() {
  return (
    <>
      <GroupSearch>
      <InputCustom placeholder='Search users...' />
        <ButtonCustom>
          Search
        </ButtonCustom>
      </GroupSearch>
    </>
  )
}
