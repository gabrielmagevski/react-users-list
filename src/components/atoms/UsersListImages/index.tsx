import React from 'react'
import { useSearchPersons } from '../../../hooks/useSearchPersons';
import { UsersImagesTrs } from './styles'
import UsersListPersonImages from './UsersListPersonsImages';

export function UsersListImages() {
  const { usersList } = useSearchPersons();
  return (
    <>
      <UsersImagesTrs>
       { usersList.map(usersImages => <UsersListPersonImages key={usersImages.login.uuid} data={usersImages} /> )} 
      </UsersImagesTrs>
    </>
  )
}
