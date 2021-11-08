import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: 'hsl(0, 0%, 98%)',
  text: 'hsl(200, 15%, 8%)',
  elements: 'hsl(0, 0%, 100%)',
  input: 'hsl(0, 0%, 52%)',
  toggle: '#E5E7EB',
};

export const darkTheme = {
  background: 'hsl(207, 26%, 17%)',
  text: 'hsl(0, 0%, 100%)',
  elements: 'hsl(209, 23%, 22%)',
  input: 'hsl(0, 0%, 52%)',
  toggle: '#4B5563',
};

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    font-family: 'Nunito Sans', sans-serif;
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

// 300 600 800 ? font-weights | home = 14px, details = 16px
