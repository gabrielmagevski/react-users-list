import React from 'react'
import { useSearchPersons } from '../../../hooks/useSearchPersons';
import { ListPersons } from './ListPersons';
import { UsersTitle, UsersTrs } from './styles'

export function UsersListDetails() {
  const { usersList } = useSearchPersons();
  return (
    <>
      <UsersTrs>
        <UsersTitle>Photo</UsersTitle>
        <UsersTitle>Name</UsersTitle>
        <UsersTitle>Age</UsersTitle>
        <UsersTitle>Country</UsersTitle>
        <UsersTitle>Gender</UsersTitle>
      </UsersTrs>
      { usersList.map(users => <ListPersons key={users.login.uuid} data={users} /> )} 
    </>
  )
}
