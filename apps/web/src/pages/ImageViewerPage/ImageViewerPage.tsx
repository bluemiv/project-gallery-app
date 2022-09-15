import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { BsArrowBarLeft, BsArrowBarRight, BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { urlService } from '../../service';
import { imageListState } from '../../recoil/atom';
import { StyledImageViewerPage } from './StyledImageViewerPage';
import GalleryBreadcrumb from '../../feature/GalleryBreadcrumb';

const ImageViewerPage = () => {
  const { search } = useLocation();
  const { path, idx } = urlService.convertParams(search);
  const [imageList] = useRecoilState(imageListState);
  const [imageIdx, setImageIdx] = useState<number>(+idx);

  const prevImage = useCallback(() => {
    if (imageIdx <= 0) return;
    setImageIdx(imageIdx - 1);
  }, [imageIdx]);

  const nextImage = useCallback(() => {
    if (imageIdx >= imageList.length - 1) return;
    setImageIdx(imageIdx + 1);
  }, [imageList.length, imageIdx]);

  useEffect(() => {
    const onKeyPressEventHandler = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowLeft':
          return prevImage();
        case 'ArrowRight':
          return nextImage();
      }
      return;
    };
    window.addEventListener('keydown', onKeyPressEventHandler);
    return () => window.removeEventListener('keydown', onKeyPressEventHandler);
  }, [imageIdx, prevImage, nextImage]);

  if (imageList.length === 0) return <p>잘못된 접근입니다.</p>;

  return (
    <StyledImageViewerPage>
      <GalleryBreadcrumb path={path} />
      <div className="image-viewer-container">
        <button onClick={() => setImageIdx(0)} disabled={imageIdx === 0}>
          <BsArrowBarLeft />
        </button>
        <button onClick={prevImage} disabled={imageIdx === 0}>
          <BsArrowLeft />
        </button>
        <div className="image-wrapper">
          <img src={urlService.getServerFullUrl(`${path}/${imageList[imageIdx].filename}`)} alt={imageIdx.toString()} />
        </div>
        <button onClick={nextImage} disabled={imageIdx === imageList.length - 1}>
          <BsArrowRight />
        </button>
        <button onClick={() => setImageIdx(imageList.length - 1)} disabled={imageIdx === imageList.length - 1}>
          <BsArrowBarRight />
        </button>
      </div>
    </StyledImageViewerPage>
  );
};

export default ImageViewerPage;
