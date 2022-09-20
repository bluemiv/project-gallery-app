import styled, { css } from 'styled-components';

export const StyledImageModal = styled.div`
  z-index: 10;
  position: fixed;
  left: 5vw;
  top: 5vh;
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;

  button {
    background: transparent;
    border: none;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    height: 24px;
  }

  .body {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }

  ${({ theme }) => {
    const { padding, primaryColor, backgroundColor, fontSize, boxShadow } = theme.style;

    return css`
      padding: ${padding.md};
      background-color: ${backgroundColor};
      box-shadow: ${boxShadow};

      button {
        font-size: ${fontSize.lg};

        &:hover {
          color: ${primaryColor.basic};
        }
      }

      .title {
        margin-bottom: ${padding.md};
      }

      .body {
        height: calc(90vh - 24px - ${padding.md} - ${padding.md} - ${padding.md});
      }
    `;
  }}
`;
