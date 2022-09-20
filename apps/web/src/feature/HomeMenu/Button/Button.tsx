import React from 'react';
import { StyledButton } from './StyledButton';
import { useNavigate } from 'react-router-dom';
import type { ButtonProps } from './types';

const Button = ({ label, route }: ButtonProps) => {
  const navigate = useNavigate();

  const onClickRoute = () => {
    if (!route) return;
    navigate(route);
  };

  return <StyledButton onClick={onClickRoute}>{label}</StyledButton>;
};

export default Button;
