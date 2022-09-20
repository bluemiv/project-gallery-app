import styled, { css } from 'styled-components';

export const StyledGroup = styled.section`
  .buttons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  ${({ theme }) => {
    const { padding, fontSize } = theme.style;
    return css`
      padding: ${padding.md} 0;
      .title {
        font-size: ${fontSize.sm};
        margin-bottom: ${padding.md};
      }
      .buttons {
        column-gap: ${padding.md};
        row-gap: ${padding.md};
      }
    `;
  }}
`;
