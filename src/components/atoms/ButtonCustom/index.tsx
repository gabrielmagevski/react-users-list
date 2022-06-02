import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from './styles';

export type TypeButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  position?: string;
  zIndex?: string;
  mg?: string;
}

export function ButtonCustom({ children, ...props }: TypeButton) {
  return (
    <Button {...props}>
      {children}
    </Button>
  )
}
