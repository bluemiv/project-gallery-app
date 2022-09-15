import styled, { css } from 'styled-components';

export const StyledGroup = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  ${({ theme }) => {
    const { padding } = theme.style;
    return css`
      column-gap: ${padding.md};
      row-gap: ${padding.md};
    `;
  }}
`;
