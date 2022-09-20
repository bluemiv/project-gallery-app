import styled, { css } from 'styled-components';

const width = '240px';

export const StyledDirectory = styled.button`
  width: ${width};
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: inherit;

  label {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${({ theme }) => {
    const { padding, fontSize, fontColor, radius, primaryColor, transition } = theme.style;
    return css`
      border: 1px solid ${fontColor};
      border-radius: ${radius.sm};
      column-gap: ${padding.sm};
      padding: ${padding.sm};
      transition: ${transition()};

      svg {
        font-size: ${fontSize.lg};
      }

      &:hover {
        border: 1px solid ${primaryColor.dark};
        color: ${primaryColor.dark};
        background-color: ${primaryColor.light};

        label {
          cursor: pointer;
        }
      }
    `;
  }}
`;
