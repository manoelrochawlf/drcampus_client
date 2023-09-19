import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;  
  }
  body{
    background: linear-gradient(90deg, rgba(228,228,228,1) 55%, rgba(187,219,226,1) 100%);
  }
  `