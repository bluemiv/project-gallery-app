import styled, { css } from 'styled-components';

export const StyledBreadcrumb = styled.div`
  display: flex;

  ${({ theme }) => {
    const { padding, fontSize } = theme.style;
    return css`
      column-gap: ${padding.xs};
      font-size: ${fontSize.sm};
    `;
  }}
`;
