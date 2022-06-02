import React, { HTMLAttributes } from 'react'
import { ProfilePicker } from './style'

export type TypeProfileImage = HTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  wd?: string;
  position?: string;
}

export function ProfileImage({ ...props }: TypeProfileImage) {
  return (
    <ProfilePicker {...props} />
  )
}
