import styled, { css } from 'styled-components';

export const StyledImageViewerPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .image-viewer-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .image-wrapper {
      height: 80vh;
      width: 50vw;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    button {
      border: none;
      background-color: inherit;
      &:disabled {
        cursor: not-allowed;
      }
    }
  }

  ${({ theme }) => {
    const { padding, primaryColor, transition, fontSize } = theme.style;

    return css`
      row-gap: ${padding.lg};
      .image-viewer-container {
        column-gap: ${padding.lg};

        button {
          font-size: ${fontSize.lg};
          transition: ${transition('color')};

          &:hover {
            color: ${primaryColor.basic};
          }

          &:disabled {
            color: inherit;
          }
        }
      }
    `;
  }}
`;
