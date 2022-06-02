import React, { useContext } from 'react'
import { UserListContext } from '../../../context/UserListContext';
import { Loading } from '../../atoms/Loading';

import { ListPersons } from './ListPersons';
import { UsersTitle, UsersTrs, UserDontFound } from './styles'

export function UsersListDetails() {
  const { loading, filteringUsers } = useContext(UserListContext);

  return (
    <>
      <UsersTrs>
        <UsersTitle>Photo</UsersTitle>
        <UsersTitle>Name</UsersTitle>
        <UsersTitle>Age</UsersTitle>
        <UsersTitle>Country</UsersTitle>
        <UsersTitle>Gender</UsersTitle>
      </UsersTrs>

      {
        !loading ? <Loading /> : 
        filteringUsers!.length === 0 ? (
          <UserDontFound>
            No User Found!
          </UserDontFound>
        ) 
        :
        (
         loading && filteringUsers?.map(users => <ListPersons key={users.login.uuid} data={users} /> )
        )
      }
    </>
  )
}
