import React, { FormEvent, useContext } from 'react'
import { UserListContext } from '../../../context/UserListContext'
import { ButtonCustom } from '../../atoms/ButtonCustom'
import { CheckBoxCustom } from '../../atoms/CheckBoxCustom'
import { InputCustom } from '../../atoms/InputCustom'
import { SelectCustom } from '../../atoms/SelectCustom'
import { SwitcherCustom } from '../../atoms/SwitcherCustom'
import { GroupFilter, GroupSearch } from './styles'

export function Filters() {
  const { 
    enableViewList,
    setEnableViewList, 
    genderFilter, 
    setGenderFilter,
    countryFilter,
    setCountryFilter,
    searchUser,
    setSearchUser,
  } = useContext(UserListContext);
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(searchUser)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <GroupSearch>
          <InputCustom 
           type='search'
           placeholder='Search users...'
           value={searchUser}
           onChange={(e: FormEvent) => setSearchUser!((e.target as HTMLTextAreaElement).value)}
          />
            <ButtonCustom type='submit'>
              Search
            </ButtonCustom>
        </GroupSearch>
      
        <GroupFilter>
          <SelectCustom value={genderFilter} 
            onChange={(e: FormEvent) => setGenderFilter!((e.target as HTMLTextAreaElement).value)}
          >
            <option value='all'>All</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </SelectCustom>

          <SelectCustom value={countryFilter} 
            onChange={(e: FormEvent) => setCountryFilter!((e.target as HTMLTextAreaElement).value)}>
            <option value='all'>All</option>
            <option value='br'>Brazil</option>
            <option value='fr'>France</option>
            <option value='us'>United States</option>
            <option value='nz'>New Zealand</option>
          </SelectCustom>

          <CheckBoxCustom label='Adults' />
          
          <SwitcherCustom 
            onClick={() => setEnableViewList!(!enableViewList)}
            label='Lista'
          />
        </GroupFilter>
      </form>
    </>
  )
}
