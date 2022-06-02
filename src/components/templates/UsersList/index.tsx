import React, { useContext } from 'react'

import { UsersTable } from './styles'
import { UserListContext } from '../../../context/UserListContext';
import { UsersListImages } from '../../organisms/UsersListImages';
import { UsersListDetails } from '../../organisms/UsersListDetails';

export function UsersList() {
  const { enableViewList } = useContext(UserListContext);
  return (
    <UsersTable>
      { enableViewList ? <UsersListImages /> : <UsersListDetails />}
    </UsersTable>
  )
}

