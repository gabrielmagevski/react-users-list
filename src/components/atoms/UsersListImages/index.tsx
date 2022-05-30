import React from 'react'
import { ProfileImage } from '../ProfileImage'
import { ProfileName, UsersImageInformations, UsersImagesTrs } from './styles'

export function UsersListImages() {
  return (
    <>
      <UsersImagesTrs>
        <UsersImageInformations>
          <ProfileImage wd="150px" src='https://github.com/gabrielmagevski.png' alt='foto' />
          <ProfileName>Gabriel</ProfileName>
        </UsersImageInformations>  
      </UsersImagesTrs>
    </>
  )
}
