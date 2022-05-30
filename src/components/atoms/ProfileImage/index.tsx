import React from 'react'
import { TypeProfileImage } from '../../../@types'
import { ProfilePicker } from './style'

export function ProfileImage({ ...props }: TypeProfileImage) {
  return (
    <ProfilePicker {...props} />
  )
}
