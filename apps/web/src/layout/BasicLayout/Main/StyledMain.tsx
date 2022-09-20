import styled, { css } from 'styled-components';

export const StyledMain = styled.main`
  flex: 1;
  width: 100%;
  display: flex;

  ${({ theme }) => {
    const { padding } = theme.style;
    return css`
      padding: ${padding.md};
    `;
  }}
`;
