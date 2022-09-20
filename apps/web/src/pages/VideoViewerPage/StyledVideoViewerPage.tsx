import styled, { css } from 'styled-components';

export const StyledVideoViewerPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .video-viewer-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .video-wrapper {
      width: 100vw;
      height: 80vh;

      video {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  ${({ theme }) => {
    const { padding } = theme.style;

    return css`
      row-gap: ${padding.lg};
    `;
  }}
`;
