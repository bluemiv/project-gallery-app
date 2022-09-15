import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchFiles } from '../api/directory';
import { useNavigate, useParams } from 'react-router-dom';
import GalleryButton from '../feature/GalleryButton';

const GalleryPage = () => {
  const { path } = useParams();
  const nav = useNavigate();

  const { isLoading, isError, data, refetch } = useQuery(['file'], () =>
    fetchFiles('file', { path: path?.replace(/\$/g, '/') })
  );

  useEffect(() => {
    refetch();
  }, [path]);

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>error</p>;

  const directoryList = data?.results?.directory ?? [];
  const fileList = data?.results?.file ?? [];

  return (
    <div>
      <GalleryButton.Group>
        {directoryList.map((dir: string) => {
          const nextPath = path ? `${path}$${dir}` : dir;
          return <GalleryButton.Directory key={dir} label={dir} onClick={() => nav(`/gallery/${nextPath}`)} />;
        })}
        {fileList.map((file: string) => (
          <p key={file}>{file}</p>
        ))}
      </GalleryButton.Group>
    </div>
  );
};

export default GalleryPage;
