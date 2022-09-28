import styled, { css } from 'styled-components';

export interface StyledInputProps {
  width: string;
}

export const StyledInput = styled.div<StyledInputProps>`
  width: ${({ width }) => width};
  display: flex;
  align-items: center;

  label {
    min-width: 130px;
  }

  input {
    flex: 1;
    min-width: 200px;
    background-color: inherit;
  }

  ${({ theme }) => {
    const { padding, primaryColor, fontColor, radius, transition } = theme.style;

    return css`
      padding: ${padding.sm} 0;
      column-gap: ${padding.md};

      input {
        border: 1px solid ${fontColor};
        border-radius: ${radius.sm};
        padding: ${padding.xs};
        color: ${fontColor};
        transition: ${transition()};

        &:focus {
          outline: none;
          border: 1px solid ${primaryColor.basic};
        }
      }
    `;
  }}
`;
