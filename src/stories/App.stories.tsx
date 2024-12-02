import type { Meta, StoryObj } from '@storybook/react';
import { App } from '../app/App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './storiesTheme';
import { ReduxStoreProviderDecorator } from '../state/ReduxStoreProviderDecorator';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { BrowserRouter } from 'react-router-dom';
import { CustomThemeProvider } from '../common/context/ThemeContext';
import '../translations/i18n';

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
    <BrowserRouter basename={'/'}>
      <CustomThemeProvider>
        <Provider store={store}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </Provider>
      </CustomThemeProvider>
    </BrowserRouter>
  ),
};
export const AppDarkThemeStorie: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <BrowserRouter basename={'/'}>
      <Provider store={store}>
        <CustomThemeProvider>
          <CssBaseline />
          <App />
        </CustomThemeProvider>
      </Provider>
    </BrowserRouter>
  ),
};

export const AppWhiteThemeStorie: Story = {
  render: () => (
    <BrowserRouter basename={'/'}>
      <Provider store={store}>
        <CustomThemeProvider>
          <CssBaseline />
          <App />
        </CustomThemeProvider>
      </Provider>
    </BrowserRouter>
  ),
};
