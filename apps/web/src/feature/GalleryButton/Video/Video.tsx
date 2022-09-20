import React from 'react';
import { StyledVideo } from './StyledVideo';
import { BiVideo } from 'react-icons/bi';

export interface VideoProps {
  src: string;
  label: string;
  onClick: () => void;
}

const Video = ({ src, label, onClick }: VideoProps) => {
  return (
    <StyledVideo onClick={onClick}>
      <BiVideo />
      <label>{label}</label>
    </StyledVideo>
  );
};

export default Video;
