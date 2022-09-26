import React, { ReactNode } from 'react';
import { StyledAlert } from './StyledAlert';
import { BiCheck, BiError, BiInfoCircle, BiMinusCircle } from 'react-icons/bi';

export type AlertType = 'info' | 'warning' | 'error' | 'success';

export interface AlertProps {
  type?: AlertType;
  title?: ReactNode;
  description?: ReactNode;
  showIcon?: boolean;
}

const Alert = ({ type = 'info', title = '', description = '', showIcon = true }: AlertProps) => {
  const renderIcon = () => {
    switch (type) {
      case 'info':
        return <BiInfoCircle />;
      case 'warning':
        return <BiError />;
      case 'error':
        return <BiMinusCircle />;
      case 'success':
        return <BiCheck />;
      default:
        return '';
    }
  };

  return (
    <StyledAlert type={type}>
      {showIcon ? <span className="icon">{renderIcon()}</span> : null}
      <div className="text-wrapper">
        {title ? <div className="title">{title}</div> : null}
        {description ? <div className="description">{description}</div> : null}
      </div>
    </StyledAlert>
  );
};

export default Alert;
