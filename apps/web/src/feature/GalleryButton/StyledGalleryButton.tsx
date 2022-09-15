import styled, { css } from 'styled-components';

const size = '170px';
export const StyledGalleryButton = styled.button`
  width: ${size};
  height: ${size};

  ${({ theme }) => {
    const { padding, radius, fontColor, primaryColor } = theme.style;
    return css`
      padding: ${padding.md};
      color: ${fontColor};
      border: 1px solid ${fontColor};
      border-radius: ${radius.md};
      background-color: inherit;
      transition: all 0.25s ease-in-out;

      &:hover {
        color: ${primaryColor.basic};
        border: 1px solid ${primaryColor.basic};

        * {
          cursor: pointer;
        }
      }
    `;
  }}
`;
