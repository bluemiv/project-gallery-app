import React from 'react';
import { StyledHomeMenu } from './StyledHomeMenu';
import type { HomeMenuProps } from './types';

const HomeMenu = ({ title, children }: HomeMenuProps) => {
  return (
    <StyledHomeMenu>
      <h3>{title}</h3>
      <div className="button-group">{children}</div>
    </StyledHomeMenu>
  );
};

export default HomeMenu;
