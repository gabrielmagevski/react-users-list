import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ProfileImage } from '../ProfileImage'
import { ProfileName, UsersImageInformations, UsersImagesTrs } from './styles'

export function UsersListImages() {
  const navigate = useNavigate();
  return (
    <>
      <UsersImagesTrs>
        <UsersImageInformations>
        
          <ProfileImage
            onClick={() => navigate('/userDetailhed')}
            wd="150px" 
            src='https://github.com/gabrielmagevski.png' 
            alt='foto'
          />
       
          <ProfileName>Gabriel</ProfileName>
        </UsersImageInformations>  
      </UsersImagesTrs>
    </>
  )
}
