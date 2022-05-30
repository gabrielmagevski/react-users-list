import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonCustom } from '../../components/atoms/ButtonCustom'
import { ProfileImage } from '../../components/atoms/ProfileImage'

import { Maps } from '../../components/organisms/Maps'
import { 
  CenteredDetails,
  CenteredAvatar, 
  Description,
  ProfileName
} from './styles'

export function ProfileUserDetails() {
  const navigate = useNavigate();
  
  return (
   <>
      <ButtonCustom
       mg='5px 200px' 
       zIndex='10' 
       position='absolute'
       onClick={() => navigate(-1)}
       >
        Voltar
      </ButtonCustom>
      <Maps />
      <CenteredAvatar>
        <ProfileImage
          wd="150px"
          position='absolute'
          src='https://github.com/gabrielmagevski.png' 
          alt='foto'
        />
      </CenteredAvatar>
      <CenteredDetails>
        <ProfileName>Gabriel</ProfileName>
        <Description>Gabriel alive in Brazil</Description>
      </CenteredDetails>
   </>
  )
}
