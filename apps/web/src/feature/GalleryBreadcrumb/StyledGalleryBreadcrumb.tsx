import styled, { css } from 'styled-components';

export const StyledGalleryBreadcrumb = styled.div`
  display: flex;
  align-items: center;

  .back-button {
    border: none;
    background-color: inherit;
  }

  ${({ theme }) => {
    const { padding, fontSize, primaryColor, transition } = theme.style;

    return css`
      column-gap: ${padding.sm};
      .back-button {
        font-size: ${fontSize.md};
        transition: ${transition('color')};

        &:hover {
          color: ${primaryColor.basic};
        }
      }
    `;
  }}
`;
