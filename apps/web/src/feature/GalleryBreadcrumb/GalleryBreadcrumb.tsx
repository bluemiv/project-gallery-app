import React from 'react';
import { StyledGalleryBreadcrumb } from './StyledGalleryBreadcrumb';
import { BiArrowBack } from 'react-icons/bi';
import Breadcrumb, { BreadcrumbDataSourceType } from '../../components/Breadcrumb';
import { useNavigate } from 'react-router-dom';

export interface GalleryBreadcrumbProps {
  path: string;
}

const GalleryBreadcrumb = ({ path }: GalleryBreadcrumbProps) => {
  const navigate = useNavigate();
  const breadcrumbDataSource = path
    ? decodeURI(path)
        .split('/')
        .reduce((acc: BreadcrumbDataSourceType[], path, idx, pathList) => {
          if (idx === 0) return [{ label: path, path: `/gallery?path=${path}` }];
          const prevPath = pathList.slice(0, idx).join('/');
          return [...acc, { label: path, path: `/gallery?path=${prevPath}/${path}` }];
        }, [])
    : [];

  return (
    <StyledGalleryBreadcrumb>
      <button className="back-button" onClick={() => navigate(-1)}>
        <BiArrowBack />
      </button>
      <Breadcrumb dataSource={breadcrumbDataSource} />
    </StyledGalleryBreadcrumb>
  );
};

export default GalleryBreadcrumb;
