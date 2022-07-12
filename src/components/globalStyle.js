import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  html, body {
    font-family: 'Roboto', sans-serif;
    width: 100%;    
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
  }
  body {
    height: 100%;
  }

  *{
    text-decoration: none !important;
  } 

 html {
  scroll-behavior: smooth;
  font-size: 62.5%;
 }
 @media(max-width:960px){
  html {
    font-size: 55%;
   }
 }
 @media(max-width:600px){
  html {
    font-size: 50%;
   }
 }
 @media(max-width:400px){
  html {
    font-size: 50%;
   }
 }
 li{
  font-size: 1.5rem;
 }
 p{
  font-size: 1.5rem;
 }
 h2 {
  font-size: 2.5rem;
 }
 h3 {
  font-size: 2rem;
 }
 h4{
  font-size: 1.75rem;
 }
 h5{
  font-size: 1.5rem;
 }

`;
export default GlobalStyle;

/*
    0px     600px    960px    1280px   1920px
    xs      sm       md       lg       xl
*/

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#0a66c2' : '#004182')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: ${({ border }) => (border ? '2px solid lightgray' : 'none')};
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #004182;
    background-color: ${({ primary }) => (primary ? '#004182' : '#0a66c2')};
  }
`;

