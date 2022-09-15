import React, { ReactNode } from 'react';
import { StyledGalleryButton } from './StyledGalleryButton';

export interface GalleryButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const GalleryButton = ({ onClick, children }: GalleryButtonProps) => {
  return <StyledGalleryButton onClick={onClick}>{children}</StyledGalleryButton>;
};

export default GalleryButton;
