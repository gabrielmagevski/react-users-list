import React from 'react'
import { ProfileImage } from '../ProfileImage'
import { UsersInformations, UsersTitle, UsersTrs } from './styles'

export function UsersListDetailed() {
  return (
    <>
      <UsersTrs>    
        <UsersTitle>Photo</UsersTitle>
        <UsersTitle>Name</UsersTitle>
        <UsersTitle>Age</UsersTitle>
        <UsersTitle>Country</UsersTitle>
        <UsersTitle>Gender</UsersTitle>
      </UsersTrs>
      <UsersTrs>
        <UsersInformations>
          <ProfileImage src='https://github.com/gabrielmagevski.png' alt='foto' />
        </UsersInformations>
        <UsersInformations>Gabriel</UsersInformations>
        <UsersInformations>19</UsersInformations>
        <UsersInformations>brazil</UsersInformations>
        <UsersInformations>Masculine</UsersInformations>
      </UsersTrs>
    </>
  )
}
