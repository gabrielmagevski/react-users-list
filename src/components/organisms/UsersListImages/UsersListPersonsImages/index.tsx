import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TypeDataPersons } from '../../../../@types';
import { ProfileImage } from '../../../atoms/ProfileImage';

import { ProfileName, UsersImageInformations } from '../styles'

export default function UsersListPersonImages({ data: { name, picture, location } }: TypeDataPersons) {
  const navigate = useNavigate();
  const userName = `${name.first}` + ' ' + `${name.last}`
  const photoUser = `${picture.large}`
  const country = `${location.country}`
  const lat = `${location.coordinates.latitude}`
  const lng = `${location.coordinates.longitude}`
  const city = `${location.city}`

  return (
    <UsersImageInformations>
        
    <ProfileImage
      onClick={() => navigate(`/profile?name=${userName}&picture=${photoUser}&city=${city}&location=${country}&lat=${lat}&lng=${lng}`)}
      wd="150px" 
      src={photoUser} 
      alt={userName}
    />
 
    <ProfileName>{userName}</ProfileName>
  </UsersImageInformations>  
  )
}
