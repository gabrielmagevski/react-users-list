import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TypeUsers } from '../../../../hooks/UseProfileList';
import { ProfileImage } from '../../../atoms/ProfileImage';

import { UsersInformations, UsersTrs } from '../styles'

export type TypeDataPersons = {
  data: TypeUsers;
}

export function ListPersons({ data: { name, picture, dob, location, gender } }: TypeDataPersons) {
  const navigate = useNavigate();
  const userName = `${name.first}` + ' ' + `${name.last}`
  const photoUser = `${picture.large}`
  const age = `${dob.age}`
  const country = `${location.country}`
  const city = `${location.city}`
  const lat = `${location.coordinates.latitude}`
  const lng = `${location.coordinates.longitude}`
  const userGender = `${gender}`


  return (
    <UsersTrs>
      <UsersInformations>
      
        <ProfileImage
          onClick={() => navigate(`/profile?name=${userName}&picture=${photoUser}&city=${city}&location=${country}&lat=${lat}&lng=${lng}`)}
          src={photoUser} 
          alt={userName}
          data-cy='profileSubmitDetail'
        />
      
      </UsersInformations>
      <UsersInformations>{userName}</UsersInformations>
      <UsersInformations>{age}</UsersInformations>
      <UsersInformations>{country}</UsersInformations>
      <UsersInformations>{userGender}</UsersInformations>
    </UsersTrs>
  )
}
