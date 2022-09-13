import React from 'react';
import { StyledMain } from './StyledMain';
import type { MainProps } from './types';

const Main = ({ children }: MainProps) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
