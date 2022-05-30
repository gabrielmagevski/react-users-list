import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProfileImage } from '../ProfileImage'
import { UsersInformations, UsersTitle, UsersTrs } from './styles'

export function UsersListDetailed() {
  const navigate = useNavigate();
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
         
          <ProfileImage
            onClick={() => navigate('/userDetailhed')}
            src='https://github.com/gabrielmagevski.png' 
            alt='foto' 
          />
         
        </UsersInformations>
        <UsersInformations>Gabriel</UsersInformations>
        <UsersInformations>19</UsersInformations>
        <UsersInformations>brazil</UsersInformations>
        <UsersInformations>Masculine</UsersInformations>
      </UsersTrs>
    </>
  )
}
