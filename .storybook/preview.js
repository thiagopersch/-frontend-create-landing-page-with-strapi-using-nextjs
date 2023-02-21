import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global';
import { theme } from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: theme.colors.backgroundColor.mainBg
        },
        {
          name: 'dark',
          value: theme.colors.backgroundColor.darkBg
        }
      ]
    }
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
];
