import React, { useContext } from 'react'
import { UserListContext } from '../../../context/UserListContext';
import { Loading } from '../Loading';
import { UsersImagesTrs } from './styles'
import UsersListPersonImages from './UsersListPersonsImages';

export function UsersListImages() {
  const { usersList, loading } = useContext(UserListContext);
  return (
    <>
      <UsersImagesTrs>
       { loading ? usersList?.map(usersOnlyImages => <UsersListPersonImages key={usersOnlyImages.login.uuid} data={usersOnlyImages} /> ) : <Loading />}
      </UsersImagesTrs>
    </>
  )
}
