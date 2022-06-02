import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from './styles';

export type TypeButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  position?: string;
  zIndex?: string;
  mg?: string;
}

export function CustomButton({ children, ...props }: TypeButton) {
  return (
    <Button {...props}>
      {children}
    </Button>
  )
}
