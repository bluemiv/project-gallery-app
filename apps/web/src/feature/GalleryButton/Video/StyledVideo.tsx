import styled, { css } from 'styled-components';

const size = '250px';

export const StyledVideo = styled.button`
  width: ${size};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;

  label {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${({ theme }) => {
    const { radius, padding, fontColor, fontSize, primaryColor, transition } = theme.style;
    return css`
      padding: ${padding.md};
      border: 1px solid ${fontColor};
      border-radius: ${radius.sm};
      column-gap: ${padding.sm};
      transition: ${transition()};

      svg {
        font-size: ${fontSize.lg};
      }

      &:hover {
        color: ${primaryColor.dark};
        border: 1px solid ${primaryColor.dark};
        background-color: ${primaryColor.light};

        label {
          cursor: pointer;
        }
      }
    `;
  }}
`;
