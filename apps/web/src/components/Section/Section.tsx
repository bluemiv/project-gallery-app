import React, { ReactNode } from 'react';
import { StyledSection } from './StyledSection';

export interface SectionProps {
  title?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
}

const Section = ({ title, body, footer }: SectionProps) => {
  const renderTitle = () => {
    if (!title) return null;
    return <div className="title">{title}</div>;
  };

  const renderBody = () => {
    if (!body) return null;
    return <div className="body">{body}</div>;
  };

  const renderFooter = () => {
    if (!footer) return null;
    return <div className="footer">{footer}</div>;
  };

  return (
    <StyledSection>
      {renderTitle()}
      {renderBody()}
      {renderFooter()}
    </StyledSection>
  );
};

export default Section;
