import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.darkBg};
  color: ${theme.colors.whiteColor};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.mainBg};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
