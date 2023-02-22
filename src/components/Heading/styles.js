import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xxlarge};
    ${mediaFont(theme)}
  `
};

const titleCase = (upperCase) => css`
  text-transform: ${upperCase ? 'uppercase' : 'none'};
`;

const mediaFont = (theme) => css`
  @media (${theme.media.lteMedium}) {
    font-size: ${theme.fonts.sizes.xlarge};
    transition: ${theme.transition.fast};
  }
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, textTransform }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.yellowColor};
    ${titleSize[size](theme)}
    ${titleCase(textTransform)}
  `}
`;
