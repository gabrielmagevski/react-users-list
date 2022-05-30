import React from 'react'
import { Filters } from '../../molecules/Filters'
import { Search } from '../../molecules/Search'

import { GroupFilter, Header } from './styles'

export function HeaderFilter() {
  return (
    <>
    <Header>
      <Search />
    </Header>

    <GroupFilter>
      <Filters />
    </GroupFilter>
    </>
  )
}
