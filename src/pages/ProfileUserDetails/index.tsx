import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonCustom } from '../../components/atoms/ButtonCustom'
import { ProfileImage } from '../../components/atoms/ProfileImage'

import { Maps } from '../../components/organisms/Maps'
import { useSearchPersons } from '../../hooks/useSearchPersons'
import { 
  CenteredDetails,
  CenteredAvatar, 
  Description,
  ProfileName
} from './styles'

export function ProfileUserDetails() {
  const { usersList } = useSearchPersons();
  const navigate = useNavigate();
  
  return (
   <>
   {usersList.map(users => 
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
          src={users.picture.large} 
          alt='foto'
        />
      </CenteredAvatar>
      <CenteredDetails>
        <ProfileName>{users.name.first}</ProfileName>
        <Description>{`${users.name.first} lives ${users.location.country}`}</Description>
      </CenteredDetails>
    </>
    )}
   </>
  )
}
