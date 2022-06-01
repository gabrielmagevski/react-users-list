import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TypeDataPersons } from '../../../../@types'
import { ProfileImage } from '../../ProfileImage'
import { UsersInformations, UsersTrs } from '../styles'

export function ListPersons({ data }: TypeDataPersons) {
  const navigate = useNavigate();
  return (
    <UsersTrs>
      <UsersInformations>
      
        <ProfileImage
          onClick={() => navigate('/profile')}
          src={data.picture.large} 
          alt={data.name.first}
        />
      
      </UsersInformations>
      <UsersInformations>{`${data.name.first}` + ' ' + `${data.name.last}`}</UsersInformations>
      <UsersInformations>{data.dob.age}</UsersInformations>
      <UsersInformations>{data.location.country}</UsersInformations>
      <UsersInformations>{data.gender}</UsersInformations>
    </UsersTrs>
  )
}
