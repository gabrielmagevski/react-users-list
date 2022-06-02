import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
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
  const [searchParams] = useSearchParams({});
  const profile = Object.fromEntries(searchParams);

  const position = {
    lat: parseFloat(profile.lat),
    lng: parseFloat(profile.lng),
  }
  console.log(profile)
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
    <Maps position={position} />
    <CenteredAvatar>
      <ProfileImage
        wd="150px"
        position='absolute'
        src={profile.picture} 
        alt='foto'
      />
    </CenteredAvatar>
    <CenteredDetails>
      <ProfileName>{profile.name}</ProfileName>
      
      <Description>{`${profile.name} lives ${profile.city}, ${profile.location}`}</Description>
    </CenteredDetails>
    </>
  )
}
