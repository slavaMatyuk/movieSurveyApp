import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
      font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

  #root {
    margin: 0 auto;
    background-color: #b0d0f0;
    display: flex;
    flex-direction: column;
    flex: 1 1;
    height: 100vh;
  }
`;
