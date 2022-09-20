import React from 'react';
import { useLocation } from 'react-router-dom';
import { fileService, urlService } from '../../service';
import { StyledVideoViewerPage } from './StyledVideoViewerPage';
import GalleryBreadcrumb from '../../feature/GalleryBreadcrumb';

const VideoViewerPage = () => {
  const { search } = useLocation();
  const { path } = urlService.convertParams(search);
  const ext = fileService.getFileExtension(path);

  return (
    <StyledVideoViewerPage>
      <GalleryBreadcrumb path={path} />
      <div className="video-viewer-container">
        <div className="video-wrapper">
          <video controls autoPlay>
            <source src={urlService.getServerFullUrl(decodeURI(path))} type={`video/${ext}`} />
          </video>
        </div>
      </div>
    </StyledVideoViewerPage>
  );
};

export default VideoViewerPage;
