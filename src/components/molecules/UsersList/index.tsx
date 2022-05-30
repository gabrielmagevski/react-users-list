import React from 'react'
import { UsersListImages } from '../../atoms/UsersListImages'
import { UsersListDetailed } from '../../atoms/UsersListDetailed'
import { UsersTable } from './styles'

export function UsersList() {
  return (
    <UsersTable>
      {/* <UsersListDetailed /> */}
      <UsersListImages />
    </UsersTable>
  )
}

