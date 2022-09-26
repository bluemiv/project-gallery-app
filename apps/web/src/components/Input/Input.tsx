import React from 'react';
import { StyledInput } from './StyledInput';

export interface InputProps {
  onChange: () => void;
  placeholder?: string;
  label?: string;
}

const Input = ({ onChange, label = '', placeholder = '' }: InputProps) => {
  return (
    <StyledInput>
      {label ? <label>{label}</label> : null}
      <input onChange={onChange} placeholder={placeholder} />
    </StyledInput>
  );
};

Input.propTypes = {};

export default Input;
