import React from 'react';
import GalleryButton from '../GalleryButton';
import { StyledDirectory } from './StyledDirectory';
import { BiFolder } from 'react-icons/bi';

export interface DirectoryProps {
  label: string;
  onClick: () => void;
}

const Directory = ({ label, onClick }: DirectoryProps) => {
  return (
    <GalleryButton onClick={onClick}>
      <StyledDirectory>
        <BiFolder />
        <label>{label}</label>
      </StyledDirectory>
    </GalleryButton>
  );
};

export default Directory;
