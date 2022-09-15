import React from 'react';
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
          <>
            <Link key={idx} to={path}>
              {label}
            </Link>
            <span>/</span>
          </>
        );
      })}
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
