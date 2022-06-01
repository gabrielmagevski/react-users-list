import React, { useContext } from 'react'
import { UserListContext } from '../../../context/UserListContext';
import { Loading } from '../Loading';
import { ListPersons } from './ListPersons';
import { UsersTitle, UsersTrs } from './styles'

export function UsersListDetails() {
  const { usersList, loading } = useContext(UserListContext);
  return (
    <>
      <UsersTrs>
        <UsersTitle>Photo</UsersTitle>
        <UsersTitle>Name</UsersTitle>
        <UsersTitle>Age</UsersTitle>
        <UsersTitle>Country</UsersTitle>
        <UsersTitle>Gender</UsersTitle>
      </UsersTrs>
      { loading ? usersList?.map(users => <ListPersons key={users.login.uuid} data={users} /> ) : <Loading /> }
    </>
  )
}
