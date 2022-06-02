import React, { useContext } from 'react'
import { UserListContext } from '../../../context/UserListContext';
import { Loading } from '../../atoms/Loading';

import { UsersImagesTrs, UserDontFound } from './styles'
import UsersListPersonImages from './UsersListPersonsImages';

export function UsersListImages() {
  const  { filteringUsers, loading } = useContext(UserListContext);
  return (
    <>
      <UsersImagesTrs>  
        {
          !loading ? <Loading /> :
          filteringUsers!.length === 0 ? (
            <UserDontFound>
              No User Found!
            </UserDontFound>
          ) 
          :
          (
            loading && filteringUsers?.map(usersOnlyImages => <UsersListPersonImages key={usersOnlyImages.login.uuid} data={usersOnlyImages} /> )
          )
        }
      </UsersImagesTrs>
    </>
  )
}
