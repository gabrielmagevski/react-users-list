import React, { useContext } from 'react'
import { UsersListImages } from '../../atoms/UsersListImages'
import { UsersListDetails } from '../../atoms/UsersListDetails'
import { UsersTable } from './styles'
import { UserListContext } from '../../../context/UserListContext';

export function UsersList() {
  const { enableViewList } = useContext(UserListContext);
  return (
    <UsersTable>
      { enableViewList ? <UsersListImages /> : <UsersListDetails />}
    </UsersTable>
  )
}

