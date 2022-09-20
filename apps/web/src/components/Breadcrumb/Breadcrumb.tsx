import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { StyledBreadcrumb } from './StyledBreadcrumb';

export type BreadcrumbDataSourceType = { label: string; path: string };

export interface BreadcrumbProps {
  dataSource: BreadcrumbDataSourceType[];
}

const Breadcrumb = ({ dataSource }: BreadcrumbProps) => {
  if (dataSource.length <= 0) return null;
  return (
    <StyledBreadcrumb>
      {dataSource.map(({ label, path }, idx) => {
        if (idx === dataSource.length - 1) return <span key={idx}>{label}</span>;
        return (
          <Fragment key={idx}>
            <Link to={path}>{label}</Link>
            <span>/</span>
          </Fragment>
        );
      })}
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
