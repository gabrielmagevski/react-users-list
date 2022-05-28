import React from 'react';
import { TypeButton } from '../../../@types';
import { Button } from './styles';

export function ButtonCustom({ children, ...props }: TypeButton) {
  return (
    <Button {...props}>
      {children}
    </Button>
  )
}
