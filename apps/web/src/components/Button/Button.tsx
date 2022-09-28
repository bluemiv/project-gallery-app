import React, { ReactNode } from 'react';
import { StyledButton } from './StyledButton';

export type ButtonVariantType = 'primary' | 'secondary';

export interface ButtonProps {
  variant?: ButtonVariantType;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ variant = 'primary', onClick, children }: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
