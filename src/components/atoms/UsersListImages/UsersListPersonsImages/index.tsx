import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TypeDataPersons } from '../../../../@types';
import { ProfileImage } from '../../ProfileImage'
import { ProfileName, UsersImageInformations } from '../styles'

export default function UsersListPersonImages({ data }: TypeDataPersons) {
  const navigate = useNavigate();

  return (
    <UsersImageInformations>
        
    <ProfileImage
      onClick={() => navigate('/userDetailhed')}
      wd="150px" 
      src={data.picture.large} 
      alt={data.name.first}
    />
 
    <ProfileName>{data.name.first}</ProfileName>
  </UsersImageInformations>  
  )
}
