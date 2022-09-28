import React, { ReactNode } from 'react';
import { StyledInput } from './StyledInput';

export interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: ReactNode;
  width?: string;
  defaultValue?: string | number;
}

const Input = ({ onChange, defaultValue, label, placeholder = '', width = '100%' }: InputProps) => {
  const renderLabel = () => {
    if (!label) return null;
    return <label>{label}</label>;
  };

  return (
    <StyledInput width={width}>
      {renderLabel()}
      <input defaultValue={defaultValue} onChange={onChange} placeholder={placeholder} />
    </StyledInput>
  );
};

Input.propTypes = {};

export default Input;
