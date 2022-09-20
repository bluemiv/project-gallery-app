import styled, { css } from 'styled-components';

export const StyledHomeMenu = styled.section`
  width: 100%;
  height: auto;

  h3 {
    font-weight: bold;
  }

  .button-group {
    display: flex;
    align-items: center;
  }

  ${({ theme }) => {
    const { padding, fontSize } = theme.style;

    return css`
      padding: ${padding.md};

      h3 {
        margin: 0 0 ${padding.md} 0;
        font-size: ${fontSize.md};
      }

      .button-group {
        column-gap: ${padding.md};
      }
    `;
  }}
`;
