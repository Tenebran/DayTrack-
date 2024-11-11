import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import App from '../App';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, whiteTheme } from './storiesTheme';

const meta: Meta<typeof App> = {
  title: 'TodoLists/App',
  component: App,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof App>;

export const AppStorie: Story = {
  render: () => (
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  ),
};
export const AppDarkThemeStorie: Story = {
  render: () => (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  ),
};

export const AppWhiteThemeStorie: Story = {
  render: () => (
    <Provider store={store}>
      <ThemeProvider theme={whiteTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  ),
};
