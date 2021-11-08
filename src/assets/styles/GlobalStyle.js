import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, *, *::after, *::before  {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Barlow', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.m};
    background:  ${({ theme }) => theme.colors.gray};
  }
  h1,h2,h3,h4,h5,h6,p,a,label,button,div,figure {
    margin: 0;
    padding: 0;
  }
  
  a, button {
    font-family: 'Barlow', sans-serif;    
  }
`;
