import React from 'react';
import { StyledHeader } from './StyledHeader';
import type { HeaderProps } from './types';

const Header = ({ title }: HeaderProps) => {
  return (
    <StyledHeader>
      <a className="title" href="/">
        {title}
      </a>
    </StyledHeader>
  );
};

export default Header;
