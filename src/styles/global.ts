import {
  GlobalStyleComponent,
  DefaultTheme,
  createGlobalStyle,
  css,
} from "styled-components";

type GlobalStyleProps = {
  theme?: DefaultTheme;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    ${({ theme }) => css`
      background: ${theme.colors.backgroundColor.secondaryBg};
      font-size: 1.6rem;
      font-family: ${theme.fonts.default};
      outline: none;
    `}
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a {
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors.fontColor.secondaryColor};
  }
  
  .table {
    width: 100%;
    overflow-y: auto;
  }
`;

export default GlobalStyles;
