import React, { ReactNode } from 'react';
import { StyledGroup } from './StyledGroup';

export interface GroupProps {
  children: ReactNode;
}

const Group = ({ children }: GroupProps) => {
  return <StyledGroup>{children}</StyledGroup>;
};

export default Group;
