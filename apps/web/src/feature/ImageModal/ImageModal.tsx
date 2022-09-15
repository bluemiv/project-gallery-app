import React from 'react';
import { StyledImageModal } from './StyledImageModal';
import { AiOutlineClose } from 'react-icons/ai';

export interface ImageModal {
  visible: boolean;
  onClose: () => void;
  src: string;
}

const ImageModal = ({ visible, onClose, src }: ImageModal) => {
  if (!visible) return null;

  return (
    <StyledImageModal>
      <div className="title">
        <span>{src}</span>
        <button onClick={onClose}>
          <AiOutlineClose />
        </button>
      </div>
      <div className="body">
        <img src={src} />
      </div>
    </StyledImageModal>
  );
};

export default ImageModal;
