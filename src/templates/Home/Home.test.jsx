import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-themes';
import { theme } from '../../styles/theme';
import 'jest-styled-components';

test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello World'
  }).parentElement;
  expect(headingContainer).toHaveStyleRule('background', 'red');
});
