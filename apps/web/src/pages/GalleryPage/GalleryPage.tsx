import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchFiles } from '../../api/directory';
import { useLocation } from 'react-router-dom';
import GalleryButton, { GalleryDataSourceType } from '../../feature/GalleryButton';
import { fileService, urlService } from '../../service';
import GalleryBreadcrumb from '../../feature/GalleryBreadcrumb';

const GalleryPage = () => {
  const { search } = useLocation();
  const { path } = urlService.convertParams(search);

  const { isLoading, isError, data, refetch } = useQuery(['file'], () => fetchFiles({ path }));

  useEffect(() => {
    refetch().then(console.log);
  }, [path, refetch]);

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>error</p>;

  const fileList: GalleryDataSourceType[] = (data?.results?.file ?? []).map((file: string) => ({
    filename: file,
    prePath: path,
  }));
  const dirList: GalleryDataSourceType[] = (data?.results?.directory ?? []).map((dir: string) => ({
    filename: dir,
    prePath: path,
  }));
  const imageList = fileList.filter(({ filename }) => fileService.isImage(filename));
  const videoList = fileList.filter(({ filename }) => fileService.isVideo(filename));

  return (
    <div>
      <GalleryBreadcrumb path={path} />
      <GalleryButton.Group title="디렉토리" type="dir" dataSource={dirList} />
      <GalleryButton.Group title="이미지" type="image" dataSource={imageList} />
      <GalleryButton.Group title="비디오" type="video" dataSource={videoList} />
    </div>
  );
};

export default GalleryPage;
