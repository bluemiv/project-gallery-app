import styled, { css } from 'styled-components';

export const StyledMain = styled.header`
  width: 320px;
  display: flex;

  ${({ theme }) => {
    const { padding } = theme.style;
    return css`
      padding: ${padding.md};
    `;
  }}
`;
