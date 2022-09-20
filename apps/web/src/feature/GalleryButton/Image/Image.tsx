import React from 'react';
import { StyledImage } from './StyledImage';

export interface ImageProps {
  src: string;
  label: string;
  onClick: () => void;
}

const Image = ({ src, label, onClick }: ImageProps) => {
  return (
    <StyledImage onClick={onClick}>
      <div className="image-wrapper">
        <img src={src} alt={label} />
      </div>
      <label>{label}</label>
    </StyledImage>
  );
};

export default Image;
