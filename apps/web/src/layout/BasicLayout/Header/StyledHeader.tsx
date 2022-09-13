import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  height: 80px;
  display: flex;
  align-items: center;

  a.title {
    font-weight: bold;
  }

  ${({ theme }) => {
    const { padding } = theme.style;

    return css`
      padding: 0 ${padding.lg};
    `;
  }}
`;
