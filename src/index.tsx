import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { CssBaseline } from '@mui/material';
import { App } from './app/App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';
import { CustomThemeProvider } from 'common/context/ThemeContext';
import './translations/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
    <Provider store={store}>
      <CustomThemeProvider>
        <CssBaseline />
        <App />
      </CustomThemeProvider>
    </Provider>
  </BrowserRouter>
);
