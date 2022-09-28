import React, { ReactNode } from 'react';
import { StyledSection } from './StyledSection';

export interface SectionProps {
  title?: ReactNode;
  body?: ReactNode;
}

const Section = ({ title, body }: SectionProps) => {
  const renderTitle = () => {
    if (!title) return null;
    return <div className="title">{title}</div>;
  };
  const renderBody = () => {
    if (!body) return null;
    return <div className="body">{body}</div>;
  };

  return (
    <StyledSection>
      {renderTitle()}
      {renderBody()}
    </StyledSection>
  );
};

export default Section;
