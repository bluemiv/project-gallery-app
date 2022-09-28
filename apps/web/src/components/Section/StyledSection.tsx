import styled, { css } from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;

  .title {
    font-weight: bold;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  ${({ theme }) => {
    const { padding, radius, boxShadow } = theme.style;
    return css`
      padding: ${padding.md};
      border-radius: ${radius.sm};
      box-shadow: ${boxShadow};
      row-gap: ${padding.md};
    `;
  }}
`;
