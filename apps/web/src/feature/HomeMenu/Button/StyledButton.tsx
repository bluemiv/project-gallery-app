import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: inherit;

  ${({ theme }) => {
    const { primaryColor, fontSize, fontColor } = theme.style;
    return css`
      border: 1px solid ${fontColor};
      font-size: ${fontSize.md};
      transition: all 0.25s ease-in-out;

      &:hover {
        border: 1px solid ${primaryColor.basic};
        color: ${primaryColor.basic};
      }
    `;
  }}
`;
