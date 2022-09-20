import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  height: 80px;
  display: flex;
  align-items: center;

  a.title {
    font-weight: bold;
  }

  nav ul {
    display: flex;
  }

  .theme-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    border: none;
    transition: color 0.25s ease-in-out;
  }

  ${({ theme }) => {
    const { padding, fontColor, primaryColor, fontSize } = theme.style;

    return css`
      column-gap: ${padding.md};
      padding: 0 ${padding.lg};

      nav {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        ul {
          column-gap: ${padding.md};
        }
      }

      .theme-button {
        color: ${fontColor};
        font-size: ${fontSize.md};
        &:hover {
          color: ${primaryColor.basic};
        }
      }
    `;
  }}
`;
