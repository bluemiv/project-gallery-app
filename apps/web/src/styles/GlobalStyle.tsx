import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    
    .main-container {
      flex: 1;
      display: flex;
    }
  }
`;

export default GlobalStyle;
