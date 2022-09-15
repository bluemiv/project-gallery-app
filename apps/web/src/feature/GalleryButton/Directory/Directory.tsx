import React from 'react';
import { StyledDirectory } from './StyledDirectory';
import { BiFolder } from 'react-icons/bi';

export interface DirectoryProps {
  label: string;
  onClick: () => void;
}

const Directory = ({ label, onClick }: DirectoryProps) => {
  return (
    <StyledDirectory onClick={onClick}>
      <BiFolder />
      <label>{label}</label>
    </StyledDirectory>
  );
};

export default Directory;
