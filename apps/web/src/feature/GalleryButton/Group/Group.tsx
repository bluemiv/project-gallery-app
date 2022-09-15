import React from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { StyledGroup } from './StyledGroup';
import Directory from '../Directory';
import Image from '../Image';
import { imageListState } from '../../../recoil/atom';
import { urlService } from '../../../service';

export type GalleryDataSourceType = { filename: string; prePath: string };

export interface GroupProps {
  title: string;
  type: 'dir' | 'image';
  dataSource: GalleryDataSourceType[];
}

const Group = ({ title, type, dataSource }: GroupProps) => {
  const setImageList = useSetRecoilState(imageListState);
  const navigate = useNavigate();

  if (dataSource.length <= 0) return null;

  return (
    <StyledGroup>
      <div className="title">{title}</div>
      <div className="buttons">
        {dataSource.map(({ filename, prePath }, idx) => {
          if (type === 'dir') {
            const path = prePath ? `${prePath}/${filename}` : filename;
            return <Directory key={filename} label={filename} onClick={() => navigate(`/gallery?path=${path}`)} />;
          }
          return (
            <Image
              key={filename}
              src={urlService.getServerFullUrl(`${prePath}/${filename}`)}
              label={filename}
              onClick={() => {
                navigate(`/gallery/image-viewer?path=${prePath}&idx=${idx}`);
                setImageList(dataSource);
              }}
            />
          );
        })}
      </div>
    </StyledGroup>
  );
};

export default Group;
