import React, { FormEvent, useContext } from 'react'
import { UserListContext } from '../../../context/UserListContext'
import { CustomButton } from '../../atoms/CustomButton'
import { CheckBoxCustom } from '../../atoms/CheckBoxCustom'
import { CustomInput } from '../../atoms/CustomInput'
import { CustomSelect } from '../../atoms/CustomSelect'
import { CustomSwitcher } from '../../atoms/CustomSwitcher'
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
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <GroupSearch>
          <CustomInput 
           type='search'
           data-cy='search'
           placeholder='Search users...'
           onChange={(e: FormEvent) => setSearchUser!((e.target as HTMLTextAreaElement).value)}
           value={searchUser}
          />
            <CustomButton type='submit'>
              Search
            </CustomButton>
        </GroupSearch>
      
        <GroupFilter>
          <CustomSelect 
            data-cy='gender-filter'
            value={genderFilter} 
            onChange={(e: FormEvent) => setGenderFilter!((e.target as HTMLTextAreaElement).value)}
          >
            <option value='all'>All</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </CustomSelect>

          <CustomSelect value={countryFilter} 
            data-cy='country-filter'
            onChange={(e: FormEvent) => setCountryFilter!((e.target as HTMLTextAreaElement).value)}>
            <option value='all'>All</option>
            <option value='br'>Brazil</option>
            <option value='fr'>France</option>
            <option value='us'>United States</option>
            <option value='nz'>New Zealand</option>
          </CustomSelect>

          <CheckBoxCustom label='Adults' />
          
          <CustomSwitcher 
           data-cy='swaplist-filter'
            onClick={() => setEnableViewList!(!enableViewList)}
            label='Lista'
          />
        </GroupFilter>
      </form>
    </>
  )
}
