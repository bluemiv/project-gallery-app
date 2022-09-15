import { createGlobalStyle, css, ThemeType } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  html, body, #root {
    padding: 0;
    margin: 0;
    font-size: 18px;
  }

  * {
    box-sizing: border-box;
  }

  ul, ol {
    list-style: none;
  }

  a, button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  ${({ theme }) => {
    const { fontColor, backgroundColor, primaryColor } = theme.style;
    return css`
      html,
      body,
      #root {
        color: ${fontColor};
        background-color: ${backgroundColor};
      }

      button {
        color: ${fontColor};
      }

      a {
        color: ${fontColor};
        transition: color 0.25s ease-in-out;

        &:hover {
          color: ${primaryColor.basic};
        }
      }
    `;
  }}
`;

export default GlobalStyle;
