import type { Meta, StoryObj } from '@storybook/react';
import App from '../App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, whiteTheme } from './storiesTheme';
import { ReduxStoreProviderDecorator } from '../state/ReduxStoreProviderDecorator';

const meta: Meta<typeof App> = {
  title: 'TodoLists/App',
  component: App,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  decorators: [ReduxStoreProviderDecorator],
};

export default meta;

type Story = StoryObj<typeof App>;

export const AppStorie: Story = {
  render: () => (
    <>
      <CssBaseline />
      <App />
    </>
  ),
};
export const AppDarkThemeStorie: Story = {
  render: () => (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </>
  ),
};

export const AppWhiteThemeStorie: Story = {
  render: () => (
    <>
      <ThemeProvider theme={whiteTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </>
  ),
};
